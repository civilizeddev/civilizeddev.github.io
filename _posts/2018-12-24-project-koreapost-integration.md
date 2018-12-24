---
layout: post
title: "운송사 Koreapost(우체국) K-packet 배송 접수 API 통합 구현"
date: 2017-02-28
excerpt: "2017-02 ~ 2017-02 (1개월)"
project: true
tag:
  - simpleglobal-one
  - koreapost
comments: true
---

## 개요

- 발주: [SimpleGlobal](https://simpleglobal.com/about/)
- 개발: [(주)이멕스](http://www.imex.co.kr/)
- 기간: 2017-02 ~ 2017-02 (1개월)

## 내용

- [우체국 계약고객전용시스템 OPEN API](http://biz.epost.go.kr/customCenter/custom/custom_16.jsp?subGubun=sub_3&subGubun_1=cum_35&gubun=m07) API 연동 구현
- 배송접수
- 레이블 출력
- 화물 추적(Tracking)

## 사용 기술

- 운영체제: Ubuntu 14
- 언어: Scala
- 프레임워크: Play Framework
- 개발도구: IntelliJ IDEA
- 빌드도구: sbt
- CI: [Jenkins](https://jenkins.io/)
- 형상관리: [Git](https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)), [GitHub](https://github.com/)
- 이슈관리: [JIRA](https://ko.atlassian.com/software/jira)
- 커뮤니케이션: [Confluence](https://ko.atlassian.com/software/confluence), [Slack](https://slack.com/)
- 요소기술: Play WS(http 클라이언트), REST/XML, Jasper Report(배송 레이블 출력)
