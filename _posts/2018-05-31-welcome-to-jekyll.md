---
layout: post
title: "Welcome to Jekyll!"
excerpt: "Jekyll 설치하기"
date: 2018-05-31 21:00:00 +0900
tags:
  - jekyll
  - update
comments: true
---

# Jekyll 설치하기

내 컴퓨터는 *MS 서피스 프로 3* 이고 운영체제는 *Windows 10 Pro* 다.

사실 뭐 설치하고 할 때 Linux나 Mac에서 하는 것이 편하지만, 뭐 어쩔 수 없다.

다행히 Windows 10에서부터 서브시스템으로 리눅스를 사용할 수 있다.

윈도우에 우분투를 설치했다.


## 우분투 개발용 필수 패키지 설치

보통 우분투 배포판과 달리 윈도우 서브 시스템용 우분투에는 거의 최소사양으로 설치가 되어서, 개발에 필수적인 패키지들이 설치되어 있지 않다.

개발에 필수적인 패키지에는 표준 라이브러리와 GCC 컴파일러, 링커 등이 있는데, `build-essentials` 패키지만 설치하면 따라서 설치가 된다.

```bash
sudo apt install build-essentials
sudo apt install zlib1g-dev
```

## 루비 설치

Jekyll은 루비 패키지로 배포된다.

```bash
sudo apt install ruby ruby-dev
```

## Rubygems 환경변수 등록

루비의 패키지 관리도구 rubygems의 실행경로를 환경변수에 등록한다.

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## 루비 패키지 jekyll, bundler 설치

Rubygems로 jekyll, bundler 패키지를 설치한다.

```bash
gem install jekyll bundler
```

## Jekyll 사이트 scaffolding

```bash
cd /mnt/c/GitHub/blog/ # 블로그 사이트를 생성할 경로
jeykll new . --force # 빈 디렉토리가 아니어도 강제 생성
```

## 실행 (자동 빌드 ON)

아래 명령을 실행하면 작업 경로 내에서 생성/수정된 파일을 자동으로 감지하고 빌드한다.
`http://localhost:4000` 에서 바로 확인할 수 있다.

```bash
bundle exec jekyll serve
```

## References

- [Jekyll Cheatsheet](https://devhints.io/jekyll)
