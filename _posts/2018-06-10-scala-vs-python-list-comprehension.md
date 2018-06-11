---
layout: post
title: "스칼라 vs 파이썬 (List Comprehension)"
excerpt: "리스트 처리 연산 비교"
date: 2018-06-10 21:00:00 +0900
tags: [python, scala]
comments: true
---

### 스칼라

```scala
val xs = Seq(-2, -1, 0, 1, 2)

// 음수가 아닌 항목만
for (x <- xs if x >= 0) yield x // Seq(0, 1, 2)

// 모든 요소 거듭제곱
for (x <- xs) yield (x * x) // Seq(4, 1, 0, 1, 4)

// 0이 아닌 요소의 역수
for (x <- xs if x != 0) yield (1.0 / x) // Seq(-0.5, -1, 1, 0.5)

// infile에서 비어있지 않은 줄을 읽어서 각 줄의 앞 뒤 공백 제거
for {
    l <- Source.fromFile(infile).getLines
    line = l.trim if line.nonEmpty
} yield line
```

### 파이썬

```python
xs = [-2, -1, 0, 1, 2]

# 음수가 아닌 항목만
[x for x in xs if x >= 0] // [0, 1, 2]

# 모든 요소 거듭제곱
[x**2 for x in xs] // [4, 1, 0, 1, 4]

# 0이 아닌 요소의 역수
[1/x for x in xs if x != 0]

# infile에서 비어있지 않은 줄을 읽어서 각 줄의 앞 뒤 공백 제거
[line for line in [l.strip() for l in infile] if line]
```

### 자바 :disappointed:

```java
final int[] xs = {-2, -1, 0, 1, 2};

// 음수가 아닌 항목만
IntStream.of(xs).filter(it -> it >= 0).toArray(); // {0, 1, 2}

// 모든 요소 거듭제곱
IntStream.of(xs).map(it -> it * it).toArray(); // {4, 1, 0, 1, 4}

// 0이 아닌 요소의 역수
IntStream.of(xs).filter(it -> it != 0).map(it -> 1.0 / it).toArray(); // {-0.5, -1, 1, 0.5}

// infile에서 비어있지 않은 줄을 읽어서 각 줄의 앞 뒤 공백 제거
Files.lines(infile.toPath()).map(String::trim).filter(it -> !it.isEmpty()).toArray(String[]::new);
```
