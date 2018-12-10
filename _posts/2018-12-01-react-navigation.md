---
layout: post
title: "React Navigation 실습"
excerpt: "React Native 앱에 네비게이션을 넣어보자."
date: 2018-12-01
tags:
  - react-native
  - react-navigation
comments: true
---

# React Navigation

React Native 앱에서 여러 화면 간의 전환을 관리하는 네비게이터 라이브러리다.

# 사용 방법

## 설치

```
$ yarn add react-navigation
$ yarn add react-native-gesture-handler
$ react-native link
```

## MainActivity.java 수정

주의할 점이 있다면, android 프로젝트의 java 파일을 kotlin으로 바꾸지 않는 것이 좋다. 아직 지원이 안 되는 것 같다.

```java
public class MainActivity extends ReactActivity {

    ...

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

}
```

## App.tsx 수정

하나의 화면만 있던 App.tsx를 수정해서 여러 화면을 내장한다.[^1]

```typescript

```

# 하다가 컴파일 에러나면

- Gradle Refresh
- Bundler 재시작

## 머터리얼 디자인, ripple 효과가 들어간 bottom 탭 네비게이터

별도의 패키지를 추가로 설치해야 한다.[^2]

```
$ yarn add react-navigation-material-bottom-tabs react-native-paper
```


# References

[^1]: https://reactnavigation.org/docs/en/hello-react-navigation.html
[^2]: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
[^3]: https://ionicons.com/
