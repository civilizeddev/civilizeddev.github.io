---
layout: post
title: "React with TS 개발환경 세팅"
excerpt: "React & Webpack & TypeScript 프로젝트 생성하기"
date: 2018-12-10
tags:
  - react
  - typescript
  - webpack
comments: true
---

## 순수 JavaScript? 사절!

한 때 JavaScript를 좋아했던 적이 있다. 특히 ES6이 처음 나왔을 때 그랬다. 그 유연하고 편리함이 마음에 들었다. NodeJS로 전천후 개발을 헤보려고 시도한 적이 있다. 그런데 그 편리함에도 단점이 있었는데, 바로 그 유연성 때문에 안전과 유지보수성이 희생된다는 것이다. 이건 처음 개발할 때는 모른다. 문제는 나중이다. 코드는 점점 지저분해지고, 내가 짠 것도 추적하기 힘들어지고, 도구의 지원도 제한적이다. 리팩토링 시도는 사망각이다. 지금 JavaScript로 개발을 한다고 하면 나중에 골치 아파질 것을 생각하니 시작도 하기 싫다.

## 이상적인 대안 후보 Scala.js

타입 안전의 끝판대장 앞대장(?) 격인 Scala로 JavaScript 코딩을 할 수 있다. 여타 후보로는 ClojureScript, Elm 이런 것도 있지만 내가 그 베이스 언어를 모르기 때문에 할 수 없고, Scala.js는 문법적으로 정말 좋다. Scala 자체가 fluent하기도 하고 JVM 라이브러리가 JS로도 포팅이 되어 있어서 백엔드 코딩하듯이 할 수 있다. 심지어 백엔드, 프론트엔드간 모델, 서비스 공유도 가능하다. 이 말은 한 번의 작성으로 프론트엔드, 백엔드 간에 모델을 정의하고 Validation도 통일할 수 있다. 기존 방식으로는 클라이언트에 모델 클래스를 만들고, 백엔드에 또 자바 빈을 만들었기 때문에 이중일이었고, 쌍방간에 맞춰줘야 했다. 그런데 Scala에서는 말그대로 isomorphic이 실현된다. 모델을 shared로 빼면 되기 때문이다.

한 가지 아쉬운 점은, 대부분은 상호 호환이 되지만, 1:1로 대응하지 않는 언어적 요소 때문에 가끔 코딩하기 어려운 부분이 생긴다. 그것 때문에 막히면 해결할 길이 막막하다. 정식 버전이 아직 0.6.x이기 때문이다. (어떤 용자 회사는 훨씬 이전부터 프로덕션 개발에 사용했다더라...) 언젠가는 scala.js 컨트리뷰터가 되어서 필요한 부분을 개선하고 발전시켜 나가고 싶다. 이 분야에는 정말 뛰어난 컨트리뷰터가 많다. 아무튼 일단 조금 더 기다려보기로 했다.

## React & Webpack & TypeScript

React는 정말 좋다. 그나마 현재 주요 프론트엔드 라이브러리에서 내 개발 철학에 부합하는 녀석이다. 하지만 이 녀석을 순수 JavaScript와 함께 사용한다는 것은, 또 얼마 지나지 않아 재앙을 맞을 수도 있다는 것이다. (복잡하고 어지러운 것을 잘 참는 사람이라면 괜찮을 수도 있지만) 적어도 타입 시스템을 가지고 유지보수성을 확보할 수 있는 구성으로 TypeScript의 도입을 생각하게 되었다. 지금 그나마 할 수 있는 최적의 조합이 아닌가 생각한다.

# 따라해보자

[React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

해보니 `package.json` 밖에 생성이 안 된다.

유명한 프로젝트 생성 도구 `create-react-app` 에서 TypeScript 기반으로 프로젝트를 생성하는 기능이 있다.

[https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
[https://github.com/Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter)

```
$ create-react-app my-app --scripts-version=react-scripts-ts
```

기본 프로젝트 구조가 생성된다.

## tslint.json

TypeScript에 대한 코드 스타일 준수 설정이다.
VSCode 에디터를 사용하면 지원이 잘 된다.

```
{
  ...
  "rules": {
    "interface-name": [false, "always-prefix"], // interface 이름이 'I'로 시작하는 것을 강제하지 않음
    "no-empty-interface": false, // interface에 property를 정의하지 않아도 됨 (갓 생성한 컴포넌트는 대개 State 인터페이스가 비어 있으므로)
    "quotemark": [true, "double", "avoid-template", "avoid-escape], // 쌍 따옴표 사용
    "semicolon": [true, "never"] // 세미콜론 생략
  },
  ...
}
```

아마 이렇게 내용을 좀 추가해야 한다.
다른 가능한 설정을 아래를 참조

[https://palantir.github.io/tslint/rules/](https://palantir.github.io/tslint/rules/)

원래도 그렇게 사용했지만, TypeScript Coding Style Guideline에 따라서 문자열에 쌍따옴표(")을 사용한다.
