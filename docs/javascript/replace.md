# 전화번호 정규식 자동 하이픈(-) 적용
사용자가 전화번호를 입력할 때마다 정규식을 사용하여 자동으로 형식에 맞게 끔 설정해주는 코드입니다

```javascript
const regPhone = (target) => {
    let value = '';
    value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(-{1,2})$/g, '');
    target.value = value;
}
```

```html
<input type="text" maxlength="13" onkeyup="regPhone(this)">
```

<Comment />