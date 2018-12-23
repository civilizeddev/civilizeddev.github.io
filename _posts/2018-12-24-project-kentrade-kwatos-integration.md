---
layout: post
title: "케냐항만공사(KPA) KWATOS - Kenya TradeNet, EDI 통합 프로젝트"
date: 2013-10-31
excerpt: 2013-04 ~ 2013-10 (6개월)
project: true
tag:
- kpa
- edi
comments: true
---

## 개요

- 발주: [케냐항만공사(케냐)](https://www.kpa.co.ke/)
- 개발: [(주)토탈소프트뱅크](http://www.tsb.co.kr/)
- 기간: 2013-04 ~ 2013-10 (6개월)

## 내용

- KPA[^1]의 컨테이너터미널 운영시스템 KWATOS[^2]와 Kenya TradeNet 전자창구시스템 KESWS간 전자문서교환(EDI) 통합
- 기존 물류 유관기관(항만, 세관)간에 P2P로 이루어지던 문서교환 방식에서 Kenya TradeNet을 통한 Hub 방식으로 전환

## 사용 기술

- 운영체제: Windows Server 2003
- 데이터베이스: Oracle 10g
- 언어: Visual Basic 6.0, Java, PL/SQL
- 개발도구: [Eclipse](https://namu.wiki/w/%EC%9D%B4%ED%81%B4%EB%A6%BD%EC%8A%A4(%ED%86%B5%ED%95%A9%20%EA%B0%9C%EB%B0%9C%20%ED%99%98%EA%B2%BD))
- 형상관리: [CVS](https://ko.wikipedia.org/wiki/CVS), [StarTeam](https://en.wikipedia.org/wiki/StarTeam)
- 이슈관리: [Mantis](https://www.mantisbt.org/)
- 요소기술: Spring Task, FTP, EDI

## 역할

- EDI 사용지시서 분석, Translator 설계 및 구현 (DB 데이터를 EDI 메시지로 추출/변환/송수신)
  - EDI/XML, UN/EDIFACT Standard 포맷 취급[^4]
  - VB용 Object-XML Mapper 구현[^5]
- VB로 개발된 KWATOS 백엔드와 외부 KESWS 시스템과의 통합을 위해 Java 애플리케이션으로 Adapter 구현
  - (KWATOS EDI는 FTP 프로토콜, KESWS는 XML 웹 서비스를 사용)
  - 개발 비용 절감을 위해 Adapter 패턴 제안
- UAT[^6] 현장 지원 출장(케냐/아프리카)[^7]

## 성과

- 기존 시스템의 변경을 최소화하여 비용 절감, 목표 기능 달성
- 정상 운영 중

## 참조

- [28th UN/CEFACT Forum - Case of the Kenya TradeNet System p.4](https://www.unece.org/fileadmin/DAM/cefact/cf_forums/Bangkok_2016/PPTs/MiniConf_SWD_KenTrade.pdf)

---

[^1]: 케냐항만공사(Kenya Port Authority) https://www.kpa.co.ke/
[^2]: 케냐 뭄바사 킬린디니구 연안 자동화 터미널 운영시스템(Kilindini Waterfront Automated Terminal Operating System) http://www.kwatos.kpa.co.ke/
[^3]: 케냐 국세청(Kenya Revenue Authority) https://itax.kra.go.ke/
[^4]: 요즘엔 웹 서비스가 대세라서 신규 사업에는 잘 쓰이지 않지만, 아직도 많은 분야에서 사용 중인 데이터 교환 형식 https://www.unece.org/cefact/edifact/welcome.html
[^5]: VB에는 Java처럼 OXM(Object-XML Mapper) 라이브러리가 없어서 직접 제작
[^6]: 사용자 인수 테스트([User Acceptance Testing](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%88%98_%EA%B2%80%EC%82%AC))
[^7]: [출장 중 발생한 테러 사건](https://namu.wiki/w/%EC%BC%80%EB%83%90%20%EC%87%BC%ED%95%91%EB%AA%B0%20%ED%85%8C%EB%9F%AC)
