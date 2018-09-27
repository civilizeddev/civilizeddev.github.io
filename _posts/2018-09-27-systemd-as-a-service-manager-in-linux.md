---
layout: post
title: "SysV init 스크립트를 systemd unit 파일로 변환하기"
excerpt: "systemd는 수많은 리눅스 배포판의 기본 init 시스템이다."
date: 2018-09-27
tags:
  - linux
  - systemd
comments: true
---

systemd는 수많은 리눅스 배포판의 기본 init 시스템이다

그동안 리눅스를 잘 모르고 대충 써오고 있었는데, 그중에서 서비스 데몬을 관리하기 위해 주로 SystemV init.d를 자주 사용했다.

init.d는 리눅스 재부팅 시에 서비스 데몬을 자동 실행해주는 기능은 있었지만, 서비스 프로세스를 감시하면서 혹시 프로세스가 죽었을 때 다시 실행해주는 기능은 없다.

그러다가 그런 기능을 지원하는 systemd라는게 있다는 것을 찾아냈다.

몰랐지만, 사실 나온지는 이미 오래되었고(2010년에 출시), 이제 대부분 리눅스 배포판의 기본 시스템으로 정착된 상태이다.

그래서 앞으로는 리눅스에서 SystemV나 BSD init 대신에 systemd를 주로 사용할 것이다.

혹시 기존에 SystemV 스크립트를 사용했다면, 아래와 같이 migration 할 수 있다.

## SysV init 스크립트를 systemd unit 파일로 변환하기

1. 기존 sysV init 파일은 아마 `/etc/init.d/`에 있을 것이다. (rc.d에 이미 등록된 상태로)
1. `$ sudo /lib/systemd/system-generators/systemd-sysv-generator`
1. 그러면, `/run/systemd/generator.late/` 에 `[서비스이름].service`로 파일이 생성된다.
1. 해당 파일을 `/etc/systemd/system/`으로 복사한다.
1. 파일 내용을 필요에 맞게 수정해준다.
    ```
    ...

    [Service]
    ...
    Restart=on-failure
    TimeoutSec=30sec
    GuessMainPID=no # !!! 기본값
    PIDFile=... 
    RemainAfterExit=no # !!! 기본값
    ExecStart=...
    ExecStop=...

    [Install]
    WantedBy=multi-user.target # !!! systemctl enable 하려면 반드시 필요하다.
    ```
1. `$ sudo update-rc.d [서비스] remove`로 더는 사용하지 않을 sysV init 등록을 해제한다.
1. `$ sudo systemctl daemon-reload`
1. `$ sudo systemctl enable [서비스].service` (`/etc/systemd/system/` 에서)
1. `$ sudo systemctl daemon-reload`

이제부터 서비스는 sysV init 대신에 systemd에서 관리한다.

- 리눅스를 reboot하면 서비스도 자동으로 재실행된다.
- 프로세스가 죽으면 자동으로 재실행된다.

## References

- [systemd](https://www.freedesktop.org/software/systemd/man/systemd.service.html){:target="_blank"}
- [systemctl](https://www.freedesktop.org/software/systemd/man/systemctl.html){:target="_blank"}
- [리눅스/명령어/systemctl 사용법 요약](https://www.manualfactory.net/10507){:target="_blank"}
- [houtianze/sysv.init.script.to.systemd.unit.file.md](https://gist.github.com/houtianze/59b89ca71cc2029dd61d3c4bd86e6ee7)
- [Auto-recovery of crashed services with systemd](https://singlebrook.com/2017/10/23/auto-restart-crashed-service-systemd/)
