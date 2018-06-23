---
layout: post
title: "var while break 사용하지 않기"
excerpt: "var while break를 사용하지 않도록 코드를 리팩토링 해보자."
date: 2018-06-23
tags:
  - scala
  - java
comments: true
---

프로젝트 유지보수를 하면서 자바 코드를 스칼라 코드로 리팩토링 하고 있다. 그중에 재미있는 레거시 자바 코드를 발견해서 스칼라 코드로 변경하는 방법을 포스팅한다.

## 문제의 자바 코드

```java
String getRandomAccessCode() { return ... }

List<String> savedAccessCode = ...
boolean isUnique = false
String accessCode = getRandomAccessCode()

// 생성된 accessCode가 Unique한지 검사
while (!isUniqueAC) {
    for (String ac : savedAccessCode) {
        if (ac.equals(accessCode)) {
            isUniqueAC = false
            break
        }
    }

    if (!isUniqueAC) {
        accessCode = getRandomAccessCode()
    }
}
```

## 개선할 점

- 리스트를 처음부터 끝까지 뒤져야 한다. 리스트가 길어질 수록 시간이 많이 걸린다. (검색 효율)
- 만약 리스트에 이미 있는 값이 있을 경우 다음 루프에서 다시 처음부터 뒤진다.
- isUnique 플래그 변수를 사용하고, while 루프 내부 흐름을 따라가며 탈출 조건을 추적해야 하는 부담이 있다. (가독성)

## 유의사항

FP 언어인 스칼라의 기본 identifier 키워드는 `var` (variable; 변수)가 아니라 `val` (value, 값)이다. `val` 은 자바의 `final {타입}` 과 같다. 가급적 `val`을 사용하고 `var`는 지양한다. 일반적으로 FP에서는 변수를 사용하지 않는다. 즉 값 덮어쓰기를 하지 않는다. 위의 코드에서 `isUnique`를 제거해보자. 그리고 `String accessCode`를 덮어쓰는 것도 개선해보자.

비록 스칼라가 자바와의 문법상의 호환성을 가지고 있지만, 안되는 것도 있다. 일단, 반복문을 탈출하는 키워드인 `break`와 `continue`가 없다. 따라서 위의 코드는 스칼라에서 사용하기 어렵다. (이건 없는게 좋은 것 같다. 왜냐하면 있었으면 저렇게 자바처럼 코딩할테니까)

## 스칼라 코드

```scala
import scala.collection.JavaConverters._ // .asScala
  
def getRandomAccessCode(): String = { ... }

val savedAccessCode: java.util.List[String] = ...
val savedAccessCodeSet: Set[String] = savedAccessCode.asScala.toSet
  
val accessCode = {
  Stream.continually {
    getRandomAccessCode
  }.find { accessCode =>
    !(savedAccessCodeSet contains accessCode)
  }.get
}
```

- `Stream.continually[T]()` 는 무한 스트림을 생성하는 함수다.
- `Stream[T].find(T => Boolean): Option[T]`은 스트림 요소 중에서 Predicate `T => Boolean` 를 만족하는 첫번째 요소를 반환한다.

## 스칼라 코드에서 나아진 점

`List`, `Set`, `Map` 등의 컬렉션을 때에 맞게 적절히 사용해야 한다. `Set`의 기본 구현은 `HashSet`이다. 즉 `Set[T].contains(T): Boolean` 를 호출할 때의 시간 복잡도가 `O(1)`이 된다.

- FP 스타일에 맞게 `var`을 사용하지 않고 `val`만 사용하였다.
- `List`를 순회하는 대신 `Set`을 사용하여 검색 효율을 높였다.
- `while`, `break` 없이 선언적인 논리구조로 가독성을 향상시켰다.

## 결론

시실 이 뿐만 아니라 다른 어떤 케이스를 보더라도 스칼라 코드가 자바 코드에 비해 품질이 더 좋은 것 같다. 스칼라 표준 라이브러리에서 제공하는 기능이 풍부해서 답답하지도 않고, 장황하지도 않고, 본디 FP 언어이기 때문에 좀 더 엄밀하게 프로그래밍 할 수 있어서 좋다.