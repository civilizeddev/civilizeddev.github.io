---
layout: post
title: "대수 구조"
excerpt: "추상 대수학의 핵심요소"
date: 2018-09-29
tags:
  - 추상대수학
  - algebraic structure
  - abstract algebra
comments: true
---

## 집합(集合, Set)

`S`

- 말 그대로 집합

## [마그마(Magma)](https://ko.wikipedia.org/wiki/마그마_(수학)){:target="_blank"}

`(M, ∙)`

- (이항연산) 모든 $$ a, b ∈ M $$에 대해 $$ a ∙ b ∈ M $$를 만족하는 연산 $$ ∙ $$ 정의

## [반군(半群, Semigroup)](https://ko.wikipedia.org/wiki/반군){:target="_blank"}

`(S, ∙)`

- 마그마에 아래의 공리를 추가
- (결합법칙) $$ (A ∙ B) ∙ C = A ∙ (B ∙ C) $$

## [모노이드(단항;單項, Monoid)](https://ko.wikipedia.org/wiki/모노이드){:target="_blank"}

`(M, ∙)`

- 반군에 아래의 공리를 추가
- (항등원의 존재) 모든 $$ a ∈ M $$에 대해, $$ a ∙ e = e ∙ a = a $$를 만족하는 $$ e ∈ M $$가 존재한다.

## [군(群, Group)](https://ko.wikipedia.org/wiki/군_(수학)){:target="_blank"}

`(G, ∙)`

- 모든 원소가 가역원인 모노이드
- 모노이드에 아래의 공리를 추가
- (역원의 존재) 모든 $$ g ∈ G $$에 대해 $$ g^{-1}g = gg^{-1} = e $$ ($$ e $$는 항등원)인 원소 $$ g^{-1} $$가 존재한다.

## [가환군(可換群, Commutative Group)](https://ko.wikipedia.org/wiki/아벨_군){:target="_blank"}

`(G, +)`

- `아벨군`, 혹은 `아벨리안군`이라고도 한다.
- 군에 아래의 공리를 추가
- (덧셈 연산의 교환법칙) 모든 $$ g, h ∈ G $$에 대해, $$ g + h = h + g $$를 만족

