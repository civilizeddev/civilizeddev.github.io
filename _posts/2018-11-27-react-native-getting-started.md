---
layout: post
title: "리액트 네이티브 앱 개발 시작하기"
excerpt: "Proof of Concept 데모 앱 제작하기"
date: 2018-11-27
tags:
  - react-native
  - typescript
comments: true
---

> 백엔드 개발자가 풀스택 개발자인 척 프론트엔드도 건드렸다가 이제는 모바일 앱 개발도 하려고 한다.

경력 중에 이것저것 하긴 했지만, 나는 주로 백엔드 개발을 했다. 프론트엔드 쪽은, Angular를 Beta 때(한마디로 개-구릴 때) 조금 보다가 치우고, Vue는 대충 만들어 치우는 조짜베이 같은 스타일이라서 skip, 내 생각에는 React가 제일 잘 만들어진 것 같다. 일단 React를 끼고 모바일 개발을 React Native로 할 것이고, Flow보다 강력한 타입체킹이 필요해서 TypeScript도 넣으려고 한다. 원래 scalajs로 하고 싶었지만, 아직까지는 지원이 많이 안 되고, 개발 중에 발생하는 문제를 극복할 자신이 없어서 TypeScript 선에서 쇼부를 본다. 자 그럼 개발환경 세팅을 해보겠다.

---

# Let's get started! 따라해보자.

> MacBook Pro 2018, macOS Mojave에서 실행했다.

## 필수요소 설치

### node[^1] 설치

    $ brew install node@8

### yarn[^2] 설치

    $ brew install yarn --without-node

### watchman[^3] 설치

    $ brew install watchman

### react-native-cli 설치

    $ yarn global add react-native-cli
    (npm install -g react-native-cli)

### Android Studio 설치

[다운로드](https://facebook.github.io/react-native/docs/getting-started#1-install-android-studio){:target="_blank"}

다음 요소를 추가 설치한다.[^4]

- Android SDK
- Android SDK Platform
- performance (Intel ® HAXM)

`Preference` > `Appearance & Behavior` > `System Settings` > `Android SDK.`

React Native 문서에서 지시하는 대로[^5] SDK 버전, 빌드 도구 버전을 맞춘다. (Android Studio는 처음 설치하면 기본적으로 최신버전으로 설정된다.)

---

## 개발환경 구성

### 프로젝트 생성

> 디렉토리 이름은 알파벳, 숫자만 사용할 수 있다. ('-' 도 안 됨)

    $ react-native init palmcove

### 안드로이드 디버깅 설정

안드로이드 기기 설정에서 개발자 옵션을 열어 디버깅을 활성화 하고, USB로 연결한다.

    $ adb devices

### 한 번 실행해보기

여기까지 실수없이 잘 됐는지 확인

    $ react-native run-android

### TypeScript 설정[^6]

타입체킹이 안 되는 개발은 hell이다.

#### TypeScript 설치[^7]

    $ brew install typescript

#### Adding Typescript

    $ yarn add --dev typescript
    $ yarn add --dev react-native-typescript-transformer
    $ yarn tsc --init --pretty --jsx react
    $ touch rn-cli.config.js
    $ yarn add --dev @types/react @types/react-native

[Adding Typescript](https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native#adding-typescript){:target="_blank"} 가이드에 따라서 고칠 것 고친다.

# 여기까지

잘 된다. 이제 본격적으로 React Native 모바일 앱을 개발해보겠다.

(다음에 계속)

---

# References

[^1]: node 버전 8을 설치하는 이유는, sbt `scalajs-bundler` 플러그인이 버전 8과 호환이 되기 때문에, 나중에 scalajs 프로젝트를 할 때를 대비해서 이렇게 설치한다.
[^2]: `--without-node` 옵션을 주지 않고 그냥 설치하면, node가 최신버전으로 설치된다. node는 이미 버전 8로 설치했으므로 제외한다.
[^3]: Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.
[^4]: https://developer.android.com/studio/?hl=ko
[^5]: https://facebook.github.io/react-native/docs/getting-started#2-install-the-android-sdk
[^6]: https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native
[^7]: https://brewformulas.org/Typescript
