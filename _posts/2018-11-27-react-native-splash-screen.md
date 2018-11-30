---
layout: post
title: "React Native 앱에 스플래시 화면 넣기"
excerpt: "react-native-splash-screen"
date: 2018-11-27
tags:
  - react-native
  - react-native-splash-screen
comments: true
---

# 앱을 있어보이게 만들자

대부분 유명한 앱들은 실행할 때 스플래시 화면이 뜬다. 아무래도 스플래시 화면이 있어야 있어보이지 않겠는가. React Native에서 스플래시 화면을 쉽게 넣을 수 있도록 도와주는 라이브러리가 있다. 바로 `react-native-splash-screen`

---

# Let's get started! 따라해보자.

## [설치](https://www.npmjs.com/package/react-native-splash-screen#first-stepdownload){:target="_blank"}

    $ yarn add react-native-splash-screen

## [코드 생성](https://www.npmjs.com/package/react-native-splash-screen#automatic-installation){:target="_blank"}

자동으로 android 프로젝트에 `SplashScreen` 패키지와 관련된 코드를 넣어준다.

    $ react-native link react-native-splash-screen

## [resource 추가](https://www.npmjs.com/package/react-native-splash-screen#android){:target="_blank"}

`/app/src/main/res/layout/launch_screen.xml/` 파일을 추가한다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/launch_screen">
</LinearLayout>
```

`/app/src/main/res` 다렉토리 아래 각 사이즈에 맞는 디렉토리에 `launch_screen.png` 파일을 넣어준다.

- drawable-ldpi
- drawable-mdpi
- drawable-hdpi
- drawable-xhdpi
- drawable-xxhdpi

## MainActivity 수정

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this)
    super.onCreate(savedInstanceState)
}
```

## App.tsx 수정

Main 액티비티가 마운트 되면 스플래시 이미지를 숨긴다.

```typescript
componentDidMount() {
    SplashScreen.hide()
}
```

# 결과

잘 된다. 다음으로~!
