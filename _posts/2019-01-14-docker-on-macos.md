---
layout: post
title: "Homebrew로 MacOS에 Docker 설치하기"
excerpt: "MacOS 사용자라면 Homebrew로 Docker를 설치할 수 있다."
date: 2019-01-14
tags:
  - docker
  - homebrew
comments: true
---

# Docker on MacOS

Docker 홈페이지 가이드[^1]에는 dmg 다운로드를 통한 설치 방법만 소개되어 있다. 하지만 MacOS 사용자라면 Homebrew를 통해서 간단하게 설치할 수 있다.

# 설치 방법

```
$ brew cask install docker
$ brew install bash-completion docker-completion docker-compose-completion docker-machine-completion
```

그리고 `Application/Docker.dmg`를 한 번 실행해서, Docker 데몬을 띄운다. (실행하지 않으면 콘솔에 docker command가 안 먹힌다.)

# 결론

Homebrew 짱 ㅋㅋ

---

[^1]: https://docs.docker.com/docker-for-mac/install/
