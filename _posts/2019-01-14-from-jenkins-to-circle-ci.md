---
layout: post
title: "Jenkins에서 Circle CI로"
excerpt: "직접 호스팅 젠킨스 대신 클라우드 Circle CI를 사용해보자."
date: 2019-01-14
tags:
  - jenkins
  - circle-ci
comments: true
---

# Circle CI

내가 아는 CI 툴은 이런 것들이 있다.[^1]

- Jenkins
- Travis
- Semaphore
- Circle CI
- TeamCity (JetBrains)
- Bamboo (Atlassian)

Circle CI는 유튜브 동영상을 보는데 중간중간 광고를 많이 하더라. 최근에 나온 줄 알았는데, 나온지는 꽤 되었다. 사실 Jenkins를 오래 써왔기 때문에 Jenkins가 가장 익숙하지만, 이제 Circle CI를 사용해보려고 한다.

# Jenkins 대신 Circle CI, 왜?

## 설치형 부담

Jenkins는 설치형(자체 호스팅)이다. 내가 서버를 갖고(혹은 EC2 등에) 거기에다가 설치해서 사용해야 한다. (사실 Jenkins도 클라우드 서비스가 있다. CloudBee라고, 그런데 안 유명하다.) 만약 Jenkins를 AWS EC2에다가 올려서 사용한다고 해보자. 빌드 서버인 만큼 컴퓨팅 파워가 충분해야 한다. CPU 코어도 많이, RAM도 많이 필요하다. 그러면 단가가 비싸진다. 게다가 빌드 서버는 빌드 할 때만 드문드문 사용하는데, AWS EC2로 해놓으면 매우 돈이 아깝게 된다. 그럴바엔 차라리 전용 서비스를 쓰는게 낫지 않을까?

## 공짜로 써볼 수 있는 Circle CI

Travis CI도 공짜로 쓸 수 있다. 단 GitHub Public Repository와 연동을 해야 하기 때문에 Private Repository를 빌드하려면 유료 플랜을 구독해야 한다. 그리고 사람들이 지적하는 단점으로, 속도가 느리다고 한다. (실제로 그런지는 모르겠다. 관심없음) 그래서 Circle CI를 공짜로 쓰면서 시험 사용을 해보고 아예 갈아타보려고 한다.

# 가격

- 1 container[^2]는 공짜
- 추가 1 container 당 $50/month

컨테이너의 기본 컴퓨팅 파워는 2.4Ghz Xeon (2core) + 8GB RAM인 것 같다.[^3]

~~한 사람 당 1개 무료이면, 한 계정에 리포지터리 한 개씩 빌드 담당 배정해서 무료로 쓸 수 있을 것 같다.~~

# 가입

GitHub 계정으로 사인업하면 된다.

# .circleci/config.yml[^4]

Jenkins에서 `Jenkinsfile` 작성하듯이, Travis에서 `.travis.yml` 작성하듯이 (사실 Travis의 방식에 더 가깝다) 빌드 선언을 작성하면 된다.

```
jobs:
  build:
    working_directory: ~/cambodia
    docker:
      - image: openjdk:8
    environment:
      - SBT_VERSION: 1.2.8
    steps:
      - run:
          name: Install sbt
          command: |
                    apt update && apt install -y curl
                    curl -L -o sbt-$SBT_VERSION.deb https://dl.bintray.com/sbt/debian/sbt-$SBT_VERSION.deb
                    dpkg -i sbt-$SBT_VERSION.deb
                    rm sbt-$SBT_VERSION.deb
      - checkout
      - restore_cache:
          key: sbt-cache
      - run:
          name: Packaging Archive
          command: cat /dev/null | sbt clean update dist
      - save_cache:
          key: sbt-cache
          paths:
            - "~/.ivy2/cache"
            - "~/.sbt"
            - "~/.m2"
orbs:
  slack: circleci/slack@1.0.0
version: 2.1
workflows:
  version: 2
  build_and_test:
    jobs:
      - build
```

# 소감

GitHub이 Private Repository를 무료로 전환하고, Circle CI는 Private Repository도 배포할 수 있으니까 개인 프로젝트 할 수 있는 환경이 매우 좋아졌다. 간단한게 경쟁력이다. CircleCI를 계속 써봐야 겠다. (계속)

---

[^1]: https://stackshare.io/stackups/circleci-vs-jenkins-vs-travis-ci
[^2]: Circle CI에서 하나의 빌드 실행 단위
[^3]: https://circleci.com/docs/2.0/executor-types/#using-machine
[^4]: https://circleci.com/docs/2.0/configuration-reference/
