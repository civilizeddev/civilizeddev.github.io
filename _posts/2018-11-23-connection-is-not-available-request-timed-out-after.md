---
layout: post
title: "SQLTransientConnectionException: Connection is not available, request timed out after"
excerpt: "Connection Leak 문제"
date: 2018-11-23
tags:
  - hikari
comments: true
---

## SQLTransientConnectionException: Connection is not available, request timed out after

- DB연결 자원이 반환되지 않아서 커넥션 풀이 고갈이 되면 발생한다.
- Spring Framework에서, @Transactional이 없을 때 발생하기도 한다.

## 나의 경우

Struts2로 된 레거시 프로젝트를 Spring Boot로 점차 마이그레이션 하면서 모듈 하나씩 수정하고 있다.
Struts 액션에서, 트랜잭션 경계가 있는 스프링 빈 서비스를 통하지 않고 바로 Mapper를 사용하면 간혹 이런 현상이 생긴다.

## 해결책

마이그레이션 중에, Action에서 Mapper를 바로 사용하지 않도록 하고 서비스로 옮기고 @Transactional을 걸어준다.
