---
layout: post
title: "[번역] Akka Discovery"
excerpt: "Akka Discovery는 서비스를 발견하는 다양한 방법에 대한 인터페이스를 제공합니다."
date: 2019-03-26
tags:
  - akka
  - akka-discovery
  - service-discovery
  - msa
comments: true
---

# Akka Discovery

**Akka Discovery**는 서비스를 발견하는(Service Discovery) 다양한 방법에 대한 인터페이스를 제공합니다.

기본으로 제공하는 메서드는 다음과 같습니다.

* Configuration
* DNS
* 복합

또한 [Akka Management](https://developer.lightbend.com/docs/akka-management/current)에는 다음과 같은 방법이 포함되어 있습니다.

* Kubernetes API
* AWS
* Consul
* Marathon API

Akka Discovery는 Akka Management의 일부였지만 Akka의 2.5.19 버전과 Akka Management의 버전 0.50.0을 기준으로 별도의 Akka 모듈이 되었습니다.


# Dependency

```
libraryDependencies += "com.typesafe.akka" %% "akka-discovery" % "2.5.21"
```


# 사용법

시작은 이렇게 합니다.

```
val system = ActorSystem()
val serviceDiscovery = Discovery(system).discovery
```

`lookup()`메서드는 필수 인자 `serviceName` 및 선택적 인자 `portName`, `protocol`을 취합니다. 이 인자들이 사용되는 방법은 검색 방법(DNS, Configuration, Aggregate)에 따라 다릅니다.

예를 들어, DNS 방법에서는 모든 인자를 다 쓸 경우 SRV 쿼리를, 일부 인자를 비워둘 경우 A, AAAA 쿼리를 사용합니다.

```
serviceDiscovery.lookup(Lookup("akka.io"), 1.second)

// Convenience for a Lookup with only a serviceName
serviceDiscovery.lookup("akka.io", 1.second)
```

`portName` 및 `protocol`은 선택 인자이며, `withXXX()` 메서드로 입력할 수 있습니다.

```
val lookup: Future[ServiceDiscovery.Resolved] = serviceDiscovery.lookup(
  Lookup("akka.io").withPortName("remoting").withProtocol("tcp"),
  1.second
)
```

HTTP 포트 및 Akka Remote 포트와 같이, 여러 포트를 개방하는 서비스에 `port`를 사용할 수 있습니다.


# 검색 방법: DNS

DNS 검색은 다음과 같이 `Lookup` 쿼리를 매핑합니다.

* `serviceName`, `portName` 그리고 `protocol`를 모두 입력하면 `_port._protocol._name` 형식으로 SRV 쿼리를 형성합니다. (각 파라미터 앞에 `_`가 붙어있습니다.)
* 일부 필드가 누락된 쿼리는 `serviceName`에 대한 A, AAAA 쿼리에 매핑됩니다.

Akka Discovry 용어와 SRV 용어 간의 대응은 다음과 같습니다.

* SRV service = port
* SRV name = serviceName
* SRV protocol = protocol

DNS를 Akka Discovery 검색 방법으로 사용하려면 `application.conf` 파일에 `akka-dns`를 설정합니다.

```
akka {
  discovery {
   method = akka-dns
  }
}
```

이제 제네릭 API를 사용할 수 있습니다. 구체적인 서비스 검색 방법을 감출 수 있습니다.

```
import akka.discovery.ServiceDiscovery

val system = ActorSystem("Example")

// ...

val discovery = ServiceDiscovery(system).discovery
val result: Future[Resolved] = discovery.lookup("service-name", resolveTimeout = 500 milliseconds)
```


## 어떻게 작동하나?

DNS 검색에서는 `Simple` 또는 `Full` 조회가 실행되는지 여부에 따라 A, AAAA 레코드 또는 SRV 레코드를 사용합니다. SRV 레코드의 장점은 포트를 포함할 수 있다는 것입니다.


## SRV 레코드

모든 필드를 설정한 검색은 SRV 쿼리가 됩니다. 예를 들어 다음과 같습니다.

```
dig srv _service._tcp.akka.test

; <<>> DiG 9.11.3-RedHat-9.11.3-6.fc28 <<>> srv service.tcp.akka.test
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60023
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 1, ADDITIONAL: 5

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
; COOKIE: 5ab8dd4622e632f6190f54de5b28bb8fb1b930a5333c3862 (good)
;; QUESTION SECTION:
;service.tcp.akka.test.         IN      SRV

;; ANSWER SECTION:
_service._tcp.akka.test.  86400   IN      SRV     10 60 5060 a-single.akka.test.
_service._tcp.akka.test.  86400   IN      SRV     10 40 5070 a-double.akka.test.
```

이 경우 `service.tcp.akka.test`는 포트 5060에서는 `a-single.akka.test`, 포트 5070에서는 `a-double.akka.test`로 확인됩니다. 현재 검색은 가중치를 지원하지 않습니다.


## A, AAAA 레코드

누락된 필드가 있는 검색은 A, AAAA 레코드 쿼리가 됩니다. 예를 들어 다음과 같습니다.

```
dig a-double.akka.test

; <<>> DiG 9.11.3-RedHat-9.11.3-6.fc28 <<>> a-double.akka.test
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 11983
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 1, ADDITIONAL: 2

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
; COOKIE: 16e9815d9ca2514d2f3879265b28bad05ff7b4a82721edd0 (good)
;; QUESTION SECTION:
;a-double.akka.test.            IN      A

;; ANSWER SECTION:
a-double.akka.test.     86400   IN      A       192.168.1.21
a-double.akka.test.     86400   IN      A       192.168.1.22
```

이 경우 `a-double.akka.test`는 192.168.1.21 및 192.168.1.22로 해결됩니다.


# 검색 방법: Configuration

Configuration 방법은 서비스 이름을 제외한 모든 필드를 무시합니다.

단순한 구성의 서비스 검색에 Configuration 방법을 사용할 수 있습니다. Akka Discovery를 사용자 고유의 구성 값이 아닌 Configuration 방법과 함께 사용하면 코드를 변경하지 않고도 애플리케이션을 보다 정교한 검색 방법으로 마이그레이션할 수 있습니다.

Configuration 방법을 사용하기 위해 `application.conf` 파일에 아래와 같이 설정합니다.

```
akka {
  discovery.method = config
}
```

기본적으로 검색 가능한 서비스는 `akka.discovery.config`에 정의되어 있습니다. 다음 형식을 사용합니다.

```
akka.discovery.config.services = {
  service1 = {
    endpoints = [
      {
        host = "cat"
        port = 1233
      },
      {
        host = "dog"
        port = 1234
      }
    ]
  },
  service2 = {
    endpoints = []
  }
}
```

여기서 위 블록은 service1과 service2의 두 가지 서비스를 정의합니다. 각 서비스에는 여러 개의 엔드 포인트가 있을 수 있습니다.


# 검색 방법: 복합(여러가지 검색 방법 사용)

복합 검색을 사용하면 DNS를 통해 검색하고 다시 Configuration으로 전환하는 등 여러 검색 방법을 사용할 수 있습니다.

복합 검색에 사용하는 모든 검색과 종속성을 추가합니다.

`akka.discovery.method`를 `aggregate`로 설정하고, 시도할 검색 방법과 순서에 따라 구성합니다.

```
akka {
  discovery {
    method = aggregate
    aggregate {
      discovery-methods = ["akka-dns", "config"]
    }
    config {
      services {
        service1 {
          endpoints [
            {
              host = "host1"
              port = 1233
            },
            {
              host = "host2"
              port = 1234
            }
          ]
        }
      }
    }
  }
}
```

위의 구성으로, 먼저 akka-dns가 확인되고 지정된 서비스 이름에 대한 대상이 없거나 반환되지 않으면 Configuration이 쿼리됩니다. 이 구성에는 `host1`과 `host2` 호스트가 있습니다.


# Akka Management Discovery에서 전환하기

Akka Discovery는 이전 버전의 Akka Management Discovery와 호환되지 않습니다. (관심 없어서 생략)


# 참조

* [Akka Discovery](https://doc.akka.io/docs/akka/2.5/discovery)
