---
layout: post
title: "Terraform으로 AWS 관리하기"
excerpt: "Terraform으로 Infrastructure as Code로 AWS 관리하기"
date: 2019-01-29
tags:
  - aws
  - terraform
  - IaC
comments: true
---

# 코드로서의 인프라

> Infrastructure as Code(IaC)

코드로 인프라를 설정하고 관리한다. AWS라면 인프라 구성을 AWS Management Console에서 UI로 관리하는 것이 아니라 코드로 관리한다.

# 테라폼

- 다양한 클라우드 서비스 제공자를 지원한다. (AWS, MS Azure, Google Cloud)
- 인프라 구성을 코드로 관리한다.
- '변경불가능한(immutable) 인프라' 개념을 지원한다. 즉 코드가 인프라 구성에 그대로 반영된다.

# 이미 구성된 AWS 인프라를 테라폼으로 가져오기

1. 테라폼 설치

    ```
$ brew install terraform
```
1. terraforming 설치 (terraform과는 별도의 Ruby 패키지)
    
    ```
$ sudo gem install terraforming
```
1. 기존 인프라를 *.tf 파일로 import
    ```
$ export AWS_REGION=ap-northeast-2
 $ terraforming help | grep terraforming | grep -v help | awk '{print "terraforming", $2, "--profile", "default", ">", $2".tf";}' | bash
```
    이렇게 하면 `ec2.tf`, `rds.tf`, ... 같은 파일들이 생성된다.

1. terraform.tfstate 파일과 통기화한다.

    ```
$ terraform import [RESOURCE_TYPE].[RESOURCE_ID_IN_TF] [RESOURCE_ID_IN_AWS] --tfstate
```
    * RESOURCE_TYPE: AWS 리소스 타입 (예: aws_instance, aws_vpc 등)
    * RESOURCE_ID_IN_TF: *.tf 파일에 지정한 id(참조)
    * RESOURCE_ID_IN_AWS: AWS에서 매기는 리소스 id (예: i-12345678, vpc-12345678 등)

1. 실제 인프라와 차이가 없는지 확인

    ```
$ terraform plan
```

    `No changes. Infrastructure is up-to-date.` 가 나올 때까지 `import`와 `plan`을 반복한다.

# 참조

* [terraform.io](https://www.terraform.io/)
* [[Outsider's Dev Story] 기존에 사용 중인 인프라를 Terraform으로 가져오기](https://blog.outsider.ne.kr/1292)
* [[terraforming] Example: Export all](https://github.com/dtan4/terraforming#example-export-all)
