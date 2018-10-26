---
layout: post
title: "[scala.js] Union Type '|' 으로 오버로딩 함수 호출 에러 해결"
excerpt: "scalajs.js.| (Union) 으로 선언된 함수를 바르게 호출하는 방법"
date: 2018-10-26
tags:
  - scala.js
comments: true
---

## scalajs.js.|

Scala.js에는 Union Type이 있다. Union Type을 우리말로 "공용체(혹은 공용 구조체)"라고 부른다. 하나의 참조가 여러가지 타입을 나타낼 수 있다.

예를 들면, `String | Int` 이면 `String`일 수도 있고 `Int`일 수도 있다.

JavaScript는 동적타입 언어이므로 이런 문법적 장치를 scala.js에 정의한 것이다.

## 기술적 한계 - 암묵 변환, 타입 추론

scala.js는 implicit conversion을 통해 문맥으로 통해 그때그때 적합한 Union Type 중의 특정 타입을 바인딩한다.

그런데 스칼라의 타입 추론 시스템에는 한계가 있어서 복잡한 implicit conversion이 있는 상태에서 타입 추론이 잘 안 된다.

이때는 명시적으로 타입 표시를 해주든지, 명시 변환을 해야한다.

## Workaround

Union Type으로 정의된 오버로딩 함수가 있다.

```
import scalajs.js

val push: js.|[js.Function1[String, Unit], js.Function2[String, js.Object, scala.Unit]]
```

파라매터 `(String)` 하나만 받는 함수일 수도 있고, `(String, Object)`를 받는 함수일 수도 있다.

그런데 그냥 `push("/")` 라고 하면 컴파일 에러가 난다.

`String => Unit`이 `js.Function1[String, Unit]`로 암묵 변환되는 것과 `js.|[js.Function1[String, Unit], js.Function2[String, js.Object, scala.Unit]]`가 `js.Function1[String, Unit]`로 암묵 변환되는 규칙이 만나서 적절히 추론이 되면 좋겠지만, 어쨌든 안 된다.

그래서 이때는 명시 변환을 이용한다.

```
push.asInstanceOf[js.Function1[String, Unit]]("/")
```

좀 지저분하지만, 이렇게 하면 되긴 된다.
