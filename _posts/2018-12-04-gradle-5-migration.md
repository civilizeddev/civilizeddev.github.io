---
layout: post
title: "Gradle 5.0 업그레이드"
excerpt: "Gradle 4.10.2에서 5.0으로 업그레이드 하기"
date: 2018-12-04
tags:
  - gradle
comments: true
---

# Gradle 5.0 출시

개인 프로젝트에는 Gradle을 사용하지 않고 주로 sbt를 쓰는데, 회사 프로젝트에는 아직 Gradle이 남아있다. 이번에 Gradle 5.0이 나왔다. 전에는 wrapper 버전만 올려줘도 잘 됐는데, 이번 5.0부터는 뭔가 에러가 난다. build.gradle 파일을 어떻게 고쳐야 하는지 알아보자.

# 업그레이드 가이드

[Edit this page Upgrading your build from Gradle 4.x to 5.0](https://docs.gradle.org/current/userguide/upgrading_version_4.html){:target="_blank"}

## deprecated feature 검사

wrapper를 5.0로 올리고 실행한다. (혹시 에러가 나면 이전 버전의 wrapper로 실행한다.)

```
$ gradlew help --scan
```

그러면 이런게 뜬다.

```
Welcome to Gradle 5.0!

Here are the highlights of this release:
 - Kotlin DSL 1.0
 - Task timeouts
 - Dependency alignment aka BOM support
 - Interactive `gradle init`

For more details see https://docs.gradle.org/5.0/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

> Task :help

Welcome to Gradle 5.0.

To run a build, run gradlew <task> ...

To see a list of available tasks, run gradlew tasks

To see a list of command-line options, run gradlew --help

To see more detail about a task, run gradlew help --task <task>

For troubleshooting, visit https://help.gradle.org

BUILD SUCCESSFUL in 12s
1 actionable task: 1 executed

Publishing a build scan to scans.gradle.com requires accepting the Gradle Terms of Service defined at https://gradle.com/terms-of-service. Do you accept these terms? [yes, no] yes

Gradle Terms of Service accepted.

Publishing build scan...
https://gradle.com/s/x7gpztky3y7te
```

build scan URL을 따라 들어가서 email을 입력하면, 해당 이메일 주소로 Build Scan 분석 결과를 보내준다.

혹시 Build Scan 결과에 `Deprecations` 탭이 있는지 확인하고, 있으면 그에 맞게 조치한다.

## 결과

일단 되긴 되는데, IntelliJ IDEA에서 `build.gradle` 파일을 열면 warning이 좀 발생한다. 무시해도 빌드는 된다.

