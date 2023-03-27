# 파이썬 기본 문법 정리 (2)

## if 조건문
조건에 따라 코드를 실행하거나, 실행하지 않게 만들고 싶을 때 사용하는 구문
```python
>>> if True:
        print("조건이 참이므로 출력합니다")
        print("출력 완료")

조건이 참이므로 출력합니다
출력 완료
```
조건이 거짓인 경우에는 아래 코드 예시처럼 출력을 진행하지 않습니다.
```python
>>> if False:
    print("조건이 거짓이므로 출력하지 않습니다")
```

### 입력문 사용
입력문을 사용하여 아래 코드와 같이 표현도 가능 합니다.
```python
number = input("숫자를 입력해주세요: ")
number = int(number)

if number > 0:
    print("정수입니다.")
    
if number < 0:
    print("음수입니다.")
    
if number == 0:
    print("0입니다.")
```



<Comment />