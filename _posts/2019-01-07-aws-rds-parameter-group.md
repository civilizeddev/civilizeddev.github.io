---
layout: post
title: "AWS RDS Parameter Group 세팅"
excerpt: "DB 생성 전에 Parameter Group 세팅을 먼저 해야 한다."
date: 2019-01-07
tags:
  - aws
  - rds
  - mysql
  - mariadb
comments: true
---

# AWS RDS 데이터베이스 인스턴스를 그냥 생성하면?

MySQL, MariaDB의 설치시 기본 `character_set`은 `latin1`이고, `collation`은 `latin1-swedish-ci`로 되어 있다. 모르고 썼다가는 나중에 문자가 다 깨져서 저장된다. 그런데 한 번 설치된 후에 이걸 바꾸기가 어렵다. 설치시부터 세팅을 해줘야 한다.

# Parameter Group을 먼저 만들자.

MariaDB(MySQL과 같다)를 설치하면 default로 Parameter Group이 생성되어 있다.

1. default Parameter Group을 복사해서 커스텀 Parameter Group을 만든다.
1. `character_set`를 `utf8mb4`로, `collation`을 `utf8mb4_unicode_ci`로 수정한다.
1. 데이터베이스 생성하기에서 커스텀 Parameter Group을 선택해준다.

# 결과

깔끔하게 `character_set`과 `collation`이 설치시부터 설정된다. 클라이언트가 세션에서 설정을 업데이트하거나 캐릭터셋을 따로 맞출 필요가 없다. 원래 이렇게 클린설치를 해야 한다.

