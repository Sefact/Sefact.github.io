---
title: "[ES6] 템플릿 리터럴 (Template literal)"
date: 2023-06-07 22:56:00 +0900
categories: [Javascript, Learn]
tags: [javascript, learn, basic, coding, ES6]
---

# 템플릿 리터럴(Template literal)이란 무엇인가?
ES6에서는 `템플릿 리터럴`이라는 새로운 문자열 작성법이 도입되었습니다. 기존의 `따옴표(', ")`를 이용한 방식이 아닌
`백틱(backtick)` 기호 (``)를 사용하며 아래와 같은 형식으로 작성할 수 있습니다.

```javascript
var template = `Hello World!!!`;
console.log(template); // Hello World!!!
```

기존의 방식과 다르게 템플릿 리터럴을 사용하면 `멀티라인 문자열`, `표현식 삽입`, `태그드 템플릿` 등 다양한 기능을 사용할 수 있습니다.

## 멀티라인 문자열
기존의 따옴표를 사용하는 방식은 아래와 같이 줄바꿈을 하기 위해서는 `\n` 개행문자를 사용하여야 했습니다.
```javascript
var quote = 'Hello \n' +
  'World';
console.log(str);
```

탬플릿 리터럴 내에서는 기존 방식과 다르게 개행 문자를 사용하지 않아도 줄바꿈이 적용되머, 공백도 있는 그대로 적용됩니다.

```javascript
var backtick = `Hello
                World`
console.log(str);
```

## 표현식 삽입
ES6 이전에는 문자열을 연결 하기 위해서는 `+` 연산자를 이용하여 아래와 같이 사용하였습니다.

```javascript
var num = 10;
var str = '사과';
console.log('과일 가게에서 ' + num + '개의 ' + str + '를 사왔습니다.'); // 과일 가게에서 10개의 사과를 사왔습니다.
```

템플릿 리터럴을 사용한 경우에는 표현식을 사용해야하는 부분에 `${ }`을 통해 감싸서 아래와 같이 표현이 가능하며 기존의 `+` 연산자보다
가독성이 좋으며 간편하게 문자열을 조합할 수 있습니다.

```javascript
var num = 10;
var str = '사과';
console.log(`과일 가게에서 ${num}개의 ${str}를 사왔습니다.`); // 과일 가게에서 10개의 사과를 사왔습니다.
```

## 태그드 템플릿
템플릿 리터럴의 발전된 형태로 태그를 사용하여 템플릿 리터럴을 함수로 파싱할 수 있게 해줍니다.

태그 함수의 첫 번째 인수는 문자열 값의 배열이며, 그 외의 인수는 표현식이 들어갑니다.
이를 활용하여 아래와 같이 문자열을 변환하여 반환해 줄 수 있습니다.

```javascript
const food = 'cookie';
const taste = 'sweet';

function getTodayFood(str, food, taste) {
    const str0 = str[0]; // Today's snack is
    
    // cookie > ice cream
    if (food === 'cookie') {
        food = 'ice cream';
    }

    // sweet > salty
    if (taste === 'sweet') {
        taste = 'salty';
    }

    return str0 + food + ' ' + taste
}

const snacks = getTodayFood`Today's snack is ${food} ${taste}`;
console.log(snacks); // Today's snack is ice cream salty
```

## Reference

[MDN Web Docs: Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

[poiemaweb: 템플릿 리터럴](https://poiemaweb.com/es6-template-literals)

모던 자바스크립트 Deep Dive (자바스크립트의 기본 개념과 동작 원리)
