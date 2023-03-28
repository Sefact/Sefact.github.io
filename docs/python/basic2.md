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

### 짝수 홀수 구분
나머지 연산으로 입력된 숫자의 짝수 홀수를 구분 할 수 있습니다.
```python
number = input("숫자를 입력해주세요")
number = int(number)

if number % 2 == 0:
    print("짝수입니다.")
    
if number % 2 == 1:
    print("홀수입니다.")
```
 
## if~else와 elif 구문

### else 구문
앞선 홀수와 짝수처럼 정반대되는 경우에는 `else` 구문은 상황에 쓸 수 있습니다.
```python
number = input("숫자를 입력해주세요")
number = int(number)

if number % 2 == 0:
    print("짝수입니다.")
else:
    print("홀수입니다.")
```

### elif 구문
2가지로 구분이 불가능한 경우에는 `elif` 구문을 사용하면 다수의 조건을 구분 할 수 있습니다.
```python
if 조건A:
    조건A가 참일 경우 실행 할 구문
elif 조건B:
    조건B가 참일 경우 실행 할 구문
elif 조건C:
    조건C가 참일 경우 실행 할 구문
else:
    모든 조건이 거짓일 경우 실행 할 구문
```

### False로 반환되는 값
조건문의 매개변수에 불이 아닌 다른 값이 오는 경우에 자동으로 불로 변환해서 처리합니다.
`None`, `0`, `0.0` `빈 컨테이너(비어 있는 문자열, 리스트, 튜플, 딕셔너리)`등이 오는 경우 False로 변환해서 치리해줍니다.
```python
if 0:
    print("0은 True를 반환합니다.")
else:
    print("아닙니다 0은 False를 반환합니다.")

아닙니다 0은 False를 반환합니다.
```

### pass
아래 코드처럼 조건문에 어떠한 구문도 넣지 않은 경우에는 `IndentationError`를 발생시키며, 이는 들여쓰기가 잘못되었다는 걸 의미합니다.
```python
if zero == 0:
    # 비어있는 구문
else
    # 비어있는 구문
```
이러한 경우에는 구문은 비어있지만 넘겨준다는 `pass` 키워드를 넣어주면 에러 없이 조건문이 작동합니다.
```python
number = input("숫자를 입력하세요: ")
number = int(number)

if number % 2 == 0:
    # 짝수일 때 미구현
    pass
else:
    # 홀수일 때 미구현
    pass
```

## 리스트
`리스트(list)`란 여러가지 자료를 저장할 수 있는 자료를 의미합니다.
조금 더 설명하자면 개별적인 자료가 아닌 자료들을 모아서 사용할 수 있게 해주는 특별한 자료형입니다.
```python
array = [1, "가", 3, "나", 5, True, False]
print(array)
[1, '가', 3, '나', 5, True, False]
```

### 리스트 선언과 요소에 접근
리스트의 선언은 `대괄호[]`를 사용하며, `요소`는 대괄호 내부에 넣는 자료를 의미합니다.
```python
[1, 2, 3, 4]
["가", "나", "다", "라"]
[1, '가', 3, '나', 5, True, False]
```
리스트 요소에 접근하기 위해서는 선언한 리스트 이름뒤에 대괄호를 입력하고 대괄호안에 자료의 위치를 나타내는 숫자를 입력하면 요소에 접근할 수 있습니다.
```python
list = [1, 5, "A", 7, True, False]
```
|  [0]  |  [1]  |  [2]  |  [3]  |  [4]  |  [5]  |
|:---:|:---:|:--:|:---:|:---:|:---:|
|  `1`  |  `5`  |  `A`  |  `7`  | `True` | `False` |
여기서 리스트 대괄호 안에 들어가는 숫자를 `인덱스(index)`라고 부릅니다.
```python
list = [1, 5, "A", 7, True, False]
print(list[0])
1
print(list[2])
A
print(list[1:3])
[5, 'A'] 
```
아래 처럼 리스트의 요소를 변경할 수도 있습니다.
```python
list = [1, 5, "A", 7, True, False]
list[0] = "문자"
print(list)
['문자', 5, 'A', 7, True, False]
```

### 리스트 안에 리스트
이렇게 리스트 안에 리스트를 가지는 리스트도 만들 수 있습니다.
```python
list_array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(list_array[1])
[4, 5, 6]
print(list_array[1][1])
5
```

### 리스트 연산자
리스트 간의 연결의 경우는 `+`를 리스트의 반복에는 `*`를 그리고 길이를 구할때는 `len()`구문을 사용합니다.
```python
list_a = [1, 2, 3]
list_b = [4, 5, 6]

print("list_a + list_b = ", list_a + list_b)
list_a + list_b = [1, 2, 3, 4, 5, 6]

print("list_a * list_b = ", list_a * list_b)
list_a + list_b = [1, 2, 3, 1, 2, 3, 1, 2, 3]

print(len(list_a)
3
```

### 리스트에 요소 추가
작성중

<Comment />