---
layout: post
title: "스칼라 vs 파이썬 (문자열 함수)"
date: 2018-06-10 21:00:00 +0900
tags: [python, scala]
---
머신러닝 강의를 듣는데, 죄다 파이썬을 쓰고 있어서 일단 파이썬을 조금 알아보기로 했다.

나중에는 스칼라로 할 것이기 때문에 스칼라 코드와 나란히 비교한다.

그리고 구린 자바 코드도 보너스로 첨부한다.

<br>

---

<br>

## 대소문자 변환

### 스칼라

```scala
"abc".toUpperCase // "ABC"
"ABC".toLowerCase // "abc"
"aBc".capitalize // "Abc"
```

### 파이썬

```python
"abc".upper() # "ABC"
"ABC".lower() # "abc"
"aBc".capitalize() # "Abc"
```

### 자바 :disappointed:

```java
"abc".toUpperCase(); // "ABC"
"ABC".toLowerCase(); // "abc"
```

자바에는 빌트인 `capitalize()` 함수가 없다.

```java
import org.apache.commons.lang.StringUtils;

StringUtils.capialize("aBc"); // "Abc"
```

<br>

---

<br>

## Predicate 함수

### 스칼라

```scala
"abc".forall(_.isLower) // true
"ABC".forall(_.isUpper) // true
"   ".forall(_.isSpaceChar) // true
"123".forall(_.isDigit) // true
"123".forall(_.isLetter) // false
```

### 파이썬

```python
"abc".islower() # True
"ABC".isupper() # True
"   ".isspace() # True
"123".isdigit() # True
"123".isalpha() # False
```

`char` 타입이 아닌 `string` 타입에 바로 `isupper()` 같은 함수가 있는 것이 좀 이상하지만, 그냥 넘어가자.

### 자바 :disappointed:

```java
"abc".chars().allMatch(Character::isLowerCase); // true
"ABC".chars().allMatch(Character::isUpperCase); // true
"   ".chars().allMatch(Character::isSpaceChar); // true
"123".chars().allMatch(Character::isDigit); // true
"123".chars().allMatch(Character::isLetter); // false
```

... 차라리 이게 더 낫겟다.

```java
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

StringUtils.isAllLowerCase("abc"); // true
StringUtils.isAllUpperCase("ABC"); // true
StringUtils.isBlank("   "); // true
NumberUtils.isDigits("123"); // true
StringUtils.isAlpha("123"); // false
```
