---
layout: post
title: "Nginx 로그 파일 Rolling"
excerpt: "로그 파일 용량을 일정선으로 유지"
date: 2018-06-14
tags:
  - nginx
comments: true
---

## 웹 서버의 디스크 용량이 가득차면?

Disk Full이 된 시스템이 제대로 동작할리 없다.
애플리케이션 서버를 중계하는 웹 서버에 디스크 공간이 부족하면 데이터 버퍼링이 안 된다.
그러면 클라이언트의 브라우저에서는 정적 리소스 파일 등의 다운로드가 실패한다.
예를 들면 `style.css` 파일을 로드하는데, 응답이 200 OK 임에도 불구하고 Response Body를 읽어올 수 없다. (본문이 없음)
HTTP 헤더의 `Content-Length`와 차이가 나기 때문에 크롬 브라우저에서는 `CONTENT_LENGTH_MISMATCH` 오류로 뜬다.

## 해법

로그 파일이 쌓이지 않도록 롤링(일정 기간이나 용량 단위로 로그 파일을 분리)을 하고 퍼징(오래된 것부터 삭제 및 정리)을 해야 한다.
Nginx를 설치하면 기본적으로 `/var/log/nginx`에 로그 파일이 쌓인다.
그런데 설정을 통해서 별도의 경로에 로그 파일이 쌓인 다면, 설정을 더 추가해줘야 한다.
로그 파일의 롤링은 `logrotate` 라는 데몬이 관리해준다.

```bash
sudo vi /etc/logrotate.d/nginx
```

이런 내용이 들어있다.

```
/var/log/nginx/*.log {
        daily
        missingok
        rorate 14
        compress
        delaycompress
        notifempty
        create 0640 www-data adm
        sharedscripts
        prerotate
                if [ -d /etc/logrotate.d/httpd-prerotate ]; then \
                        run-parts /etc/logrotate.d/httpd-prerotate; \
                fi \
        endscript
        postrotate
                invoke-rc.d nginx rotate >/dev/null 2>&1
        endscript
}
```

  - daily: 매일
  - missingok: 혹 `access.log`, `error.log` 파일이 없더라도 무시
  - rorate 14: 위에서 `daily`라고 설정했으면 일단위로, 즉 14일분의 로그파일만 보관
  - compresss: 로그 파일을 압축해서 저장
  - 나머지는 모르겠다.

저장하고 나가면 적용(?)... 되는지는 아직 모르겠다. (추후 업데이트)

## References

- [How to Configure Logging and Log Rotation in Nginx on Ubuntu VPS](https://www.makesurehow.com/Configure-Logging-and-Log-Rotation-in-Nginx-on-Ubuntu-VPS)
