---
layout: post
title: "카미구미 고베 포트, 다목적 물류센터 CFS 웹 애플리케이션 구축 프로젝트"
date: 2014-10-31
excerpt: "2013-10 ~ 2014-10 (1년)"
project: true
tag:
- kamigumi
- cfs
- naccs
- edi
comments: true
---

## 개요

- 발주: [카미구미(일본)](https://www.kamigumi.co.jp/)
- 개발: [(주)토탈소프트뱅크](http://www.tsb.co.kr/)
- 기간: 2013-10 ~ 2014-10 (1년)

## 내용

- 기존에 COBOL로 개발된 console-based의 CFS 애플리케이션을 Java/Web-based로 전면 재개발
- 마스터 데이터 관리[^1], 수출입 및 통관 프로세스, 창고 관리, 요금 청구, 통계 리포팅

## 사용 기술

- 운영체제: Windows Server 2008
- 데이터베이스: Oracle 11g
- WAS: [Apache Tomcat 7](http://tomcat.apache.org/)
- 언어: Java, [ActionScript3](https://ko.wikipedia.org/wiki/%EC%95%A1%EC%85%98%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8), [PL/SQL](https://ko.wikipedia.org/wiki/PL/SQL)
- 프레임워크: [Spring Framework](https://spring.io/), WebTOS(자체)
- 개발도구: [Eclipse](https://namu.wiki/w/%EC%9D%B4%ED%81%B4%EB%A6%BD%EC%8A%A4(%ED%86%B5%ED%95%A9%20%EA%B0%9C%EB%B0%9C%20%ED%99%98%EA%B2%BD)), [Jaspersoft Studio](https://community.jaspersoft.com/project/jaspersoft-studio), [Adobe Flex Builder](https://ko.wikipedia.org/wiki/%EC%96%B4%EB%8F%84%EB%B9%84_%ED%94%8C%EB%9E%98%EC%8B%9C_%EB%B9%8C%EB%8D%94)
- 형상관리: [CVS](https://ko.wikipedia.org/wiki/CVS)
- 이슈관리: [Mantis](https://www.mantisbt.org/)
- 요소기술: Flex, Jasper Reports, EDI

## 역할

- 수입(입고) 프로세스 프론트/백엔드 구현
- 수입 통관 프로세스 프론트/백엔드 구현, 일본 관세국 NACCS[^2] EDI 연동
- 집계/청구(사용료, 보관료, 작업료 등) 시스템 구현
- UAT[^3] 현장 지원 출장(일본, 고베)

## 성과

- 정상 운영 중

## 참조

<figure>
  <a href="/assets/img/tsb_cfs.jpg">
	  <img src="/assets/img/tsb_cfs.jpg">
  </a>
	<figcaption>
    <a href="https://www.facebook.com/totalsoftbank/photos/a.1435535409995816/1447526808796676/?type=1&theater" title="Kamigumi Selects TSB's CFS Management System">Kamigumi Selects TSB's CFS Management System</a>
  </figcaption>
</figure>

---

[^1]: 코드, 기본 엔트리, 설정 등
[^2]: 수출입 항만 관련 정보처리시스템
[^3]: 사용자 인수 테스트([User Acceptance Testing](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%88%98_%EA%B2%80%EC%82%AC))
