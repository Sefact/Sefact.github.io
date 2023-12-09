---
title: "비동기의 종착점 async와 await에 대해 알아보기"
date: 2023-07-02 17:16:00 +0900
categories: [Javascript, Learn]
tags: [javascript, learn, basic, class, coding]
---

![promises](/assets/img/posts/callback-meme.jpg) <br>
<div style="text-align: center;">
사진 출처: <a href="https://www.reddit.com/r/ProgrammerHumor/comments/che938/asynchronous_javascript/">Reddit</a>
</div>

# async & await
`async`와 `await`은 ECMAScript 2017(ES8)에 도입된 비동기 처리 패턴은 기존의 비동기 처리 방식인 `콜백 함수`와 `promise`의 단점을 보완한 패턴입니다.

## async
비동기 동작을 수행하기 위한 `async`는 `function` 앞에 선언하여 사용할 수 있으며 Promise를 반환 해 줍니다

```javascript
async function getSomething() {
  return 'good';
}

console.log(getSomething()) // Promise { 'good' }
```


<br>

## Reference

[JAVASCRIPT.INFO: async와 await](https://ko.javascript.info/async-await)

[MDN Web Docs: async function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)

[CAPTAIN PANGYO: 자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
