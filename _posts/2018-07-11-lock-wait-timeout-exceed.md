---
layout: post
title: "Lock wait timeout exceed; try restarting transaction"
excerpt: "UPDATE가 안 된다?!!"
date: 2018-07-11
tags:
  - mysql
comments: true
---

## UPDATE가 안 된다?!!

전날에 운영환경에 새 버전을 배포했는데, 01:00에 미국에서 특정 기능이 안 된다고 전화가 왔다. 원격 연결로 작업하려니 오늘 따라 인터넷이 너무 느려서 02:00에 그냥 회사로 출근했다.
MySQL DB에서 특정 테이블의 값에 문제가 있어서 UPDATE만 해주면 되는데, `Lock wait timeout exceeded; try restarting transaction` 뜨면서 UPDATE가 안 된다.

## 의심

- ~~Transaction Isolation이 `REPEATABLE-READ` 때문인가?~~
  - 지금까지는 문제없었다. 게다가 다른 테이블은 잘 된다.
- ~~느린 쿼리 때문인가?~~
  - `SHOW PROCESSLIST` 해도 별다른 거 없었다.
- 트랜잭션 락 걸렸나?
  - 트랜잭션 락은 어떻게 확인?

## 해결

구글링 해서 찾았다.

```
SELECT * FROM `information_schema`.`innodb_trx` ORDER BY `trx_started`
```

정상적 상태라면 한 건도 조회되지 않아야 한다. 혹시 있으면 `trx_mysql_thread_id` 칼럼의 PID를 KILL 한다.

```
KILL 12345
```

## References

- [[Stack Overflow] Fixing “Lock wait timeout exceeded; try restarting transaction” for a 'stuck" Mysql table?](https://stackoverflow.com/a/35721042/4322423)
