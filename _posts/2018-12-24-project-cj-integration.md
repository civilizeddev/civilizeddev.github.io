---
layout: post
title: "CJ 대한통운 택배 접수, 운송장 레이블 출력 구현"
date: 2017-06-30
excerpt: "2017-06 ~ 2017-06 (1개월)"
project: true
tag:
  - simpleglobal-one
  - cj
comments: true
---

## 개요

- 발주: [SimpleGlobal](https://simpleglobal.com/about/)
- 개발: [(주)이멕스](http://www.imex.co.kr/)
- 기간: 2017-06 ~ 2017-06 (1개월)

## 내용

- CJ대한통운 택배 배송 접수 연동 구현 (FTP)
- 주소 검증 API 연동 구현 (SOAP/XML)
- 운송장 레이블 생성(html -> pdf)

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
- 요소기술: [Alpakka FTP](https://developer.lightbend.com/docs/alpakka/current/ftp.html), [OpenHtmlToPdf](https://github.com/danfickle/openhtmltopdf), [ScalaTags](https://github.com/lihaoyi/scalatags)
