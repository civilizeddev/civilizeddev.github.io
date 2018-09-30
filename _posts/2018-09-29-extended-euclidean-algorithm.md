---
layout: post
title: "확장 유클리드 알고리즘"
excerpt: "ax + by = gcd(a, b) = d 일 때, x, y, d를 구할 수 있다."
date: 2018-09-29
tags:
  - gcd
comments: true
---

유클리드 호제법은 다음과 같은 재귀함수를 통해 간단히 정의된다.

```scala
def gcd(a: Int, b: Int): Int = {
  b match {
    case 0 => a
    case _ => gcd(b, a % b)
  }
}
```

## 확장 유클리드 호제법

정수 a와 b에 대하여 확장 유클리드 호제법은 최대공약수 d를 계산할 뿐 아니라 다음 수식을 만족하는 x와 y를 구할 수 있다.

$$ ax + by = d = gcd(a, b) \qquad\dots (4.7) $$

이때,

- x와 y는 상반된 부호를 가진다.

각 단계 i 마다 $$ r_i = ax_i + by_i $$ 를 만족하는 $$ x_i $$ 와 $$ y_i $$ 를 찾을 수 있다고 할 때,

$$
a = q_1b + r_1 \qquad r_1 = ax_1 + by_1 \\
b = q_2r_1 + r_2 \qquad r_2 = ax_2 + by_2 \\
r_1 = q_3r_2 + r_3 \qquad r_3 = ax_3 + by_3 \\
\vdots \\
r_{n-2} = q_nr_{n-1} + r_n \qquad r_n = ax_n + by_n \\
r_{n-1} = q_{n+1}r_n + 0
$$

정리하면,

$$ r_i = r_{i-2} - r_{i-1}q_i \qquad\dots (4.8) $$

또한, i-1과 i-2행에서 다음 값을 찾을 수 있다.

$$
r_{i-2} = ax_{i-2} + by_{i-2} \\
r_{i-1} = ax_{i-1} + by_{i-1}
$$

이를 식 (4.8)에 대입하면 다음을 얻을 수 있다.

$$
r_i = (ax_{i-2} + by_{i-2}) - (ax_{i-1} + by_{i-1})q_i \\
= a(x_{i-2} - q_ix_{i-1}) + b(y_{i-2} - q_iy_{i-1})
$$

하지만 이미 $$ r_i = ax_i + by_i $$ 라고 추측하였기 때문에 다음이 도출된다.

$$
x_i = x_{i-2} - q_ix_{i-1} \\
y_i = y_{i-2} - q_iy_{i-1}
$$

기존의 유클리드 호제법은 나머지가 0이 되면 $$ d = gcd(a, b) = r_n $$ 를 구하고 끝났다. 하지만 확장 유클리드 호제법은 이를 $$ d = r_n = ax_n + by_n $$ 까지 확장하였다. 따라서 식 (4.7)에서는 $$ x = x_n $$ 과 $$ y = y_n $$ 이다.

## 확장 유클리드 호제법 알고리즘 구현

각 행마다 이전 두 행의 나머지인 $$ r_{i-1} $$ 과 $$ r_{i-2} $$ 을 이용하여 새로운 나머지 값은 $$ r_i $$ 를 계산한다.
알고리즘을 시작하려면 $$ r_{-1} $$ 과 $$ r_0 $$ 이 필요하다. 이들의 값은 a와 b이다.

따라서,

$$ r_{-1} = a, r_0 = b, x_{-1} = 1, y_{-1} = 0, x_0 = 0, y_0 = 1 $$

<iframe height="800px" frameborder="0" style="width: 100%" src="https://embed.scalafiddle.io/embed?sfid=ljla27o/0&layout=v85"></iframe>

## References

- pp123, William Stallings, 컴퓨터 보안과 암호 5th Edition, Pearson, 2011
- [MathJax Basic Tutorial and Quick Reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference){:target="_blank"}