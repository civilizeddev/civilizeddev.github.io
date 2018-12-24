---
layout: post
title: "Logos-Glovis EDI 통합 구현"
date: 2017-01-31
excerpt: "2016-12 ~ 2017-01 (2개월)"
project: true
tag:
  - logos-logistics
  - edi
comments: true
---

## 개요

- 발주: [Logos Logistics](http://www.logos3pl.com/)
- 개발: [(주)이멕스](http://www.imex.co.kr/)
- 기간: 2016-12 ~ 2016-01 (1개월)

## 내용

- Logos Logistics 운송 시스템과 미주 (현대) Glovis Alabama 법인 간 EDI 송수신 구현
- EDI 204 Truck Tender Load 메시지 수신 처리 구현 (FTP polling)
- EDI 214 운송 상태 정보 송신 구현 (DB polling)
- Camel Framework + FTP 통합 구현

## 사용 기술

- 운영체제: Windows Server 2012
- 데이터베이스: MSSQL 2012
- 언어: Java
- 프레임워크: Spring Framework, [Apache Camel](http://camel.apache.org/)
- 개발도구: [Eclipse](https://namu.wiki/w/%EC%9D%B4%ED%81%B4%EB%A6%BD%EC%8A%A4(%ED%86%B5%ED%95%A9%20%EA%B0%9C%EB%B0%9C%20%ED%99%98%EA%B2%BD))
- 빌드도구: [Gradle](https://gradle.org/)
- CI: [Jenkins](https://jenkins.io/)
- 형상관리: [Git](https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)), [GitHub](https://github.com/)
- 이슈관리: [JIRA](https://ko.atlassian.com/software/jira)
- 커뮤니케이션: [Confluence](https://ko.atlassian.com/software/confluence), [Slack](https://slack.com/)
- 요소기술: JAXB, SFTP, EDI Smooks
