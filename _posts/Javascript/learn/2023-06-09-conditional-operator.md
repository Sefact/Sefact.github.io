---
title: "조건부 삼항 연산자(Conditional Operator)에 대하여"
date: 2023-06-09 00:04:00 +0900
categories: [Javascript, Learn]
tags: [javascript, learn, basic, coding]
---

## 조건부 삼항 연산자
개발할 때 조건 처리를 위하여 `if` 혹은 `if ... else`문 등을 사용하여 아래와 같이 조건문 처리 합니다.
```javascript
function calculateBMI(weight, height) {
    var meter = height / 100;
    var bmi = weight / (meter * meter);

    return Math.round(bmi * 100) / 100;
}

var bmi = calculateBMI(80, 180);
var res = '';

if (bmi >= 25) {
    res = '비만'
} else {
    res = '정상'
}
console.log(bmi, res) // 24.69, 정상
```

이러한 참과 거짓을 판별하는 형태의 조건문의 경우에는 조건부 삼항 연산자를 사용하여 아래와 같은 형태로 표현이 가능합니다.
앞선 `if ... else` 형태를 1줄로 표현하여 코드의 가독성을 높일 수 있습니다.

```shell
조건식 ? 조건식이 참인 경우 반환할 값 : 조건식이 거짓인 경우 반환할 값
```

```javascript
var bmi = 24;
var res = bmi >= 25 ? '비만' : '정상';
console.log(bmi, res) // 24, 정상
```

<br>

## 중첩된 조건부 삼항 연산자
다중 조건 형태의 `else if` 처럼 아래와 같은 방식으로 중첩된 형태로 삼항 연산자 표현이 가능합니다.

```shell
조건식 ? 조건식이 참인 경우 반환할 값 : 새로운 조건식 ? 새로운 조건식이 참인 경우 반환할 값 : 조건식이 거짓인 경우 반환할 값
```

```javascript
var bmi = 29
var res = bmi >= 30 ? '비만' : bmi >= 25 ? '과체중' : '정상'
console.log(res) // 과체중
```

코드의 가독성을 향상시키고 간결하게 표현하기 위해서 사용하는 것이기 때문에 이런 방식으로 쭉 늘여서 작성하면 사용하는 이유가 없는 것과 다를 바가 없다고 생각하기 때문에 별로 추천드리는 방식은 아니라고 생각합니다.

<br>

## Reference

[MDN Web Docs: 조건 (삼항) 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

[poiemaweb: 연산자](https://poiemaweb.com/js-operator)

모던 자바스크립트 Deep Dive (자바스크립트의 기본 개념과 동작 원리)
