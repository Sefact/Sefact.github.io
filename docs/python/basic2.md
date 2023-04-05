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
리스트에 요소를 추가하는 방법은 2가지로 `append()` `insert()`가 존재합니다.
```python
리스트명.append(요소)
```
```python
리스트명.insert(위치, 요소)
```
실제 코드에서는 아래와 같이 작동합니다
```python
list = [1, 2, 3]
list.append(4)
list.append(5)
print(list)
[1, 2, 3, 4, 5]

# 0번째 위치에 10을 추가
list.insert(0, 10)
pirnt(list)
[10, 1, 2, 3, 4, 5]
```
또한 한번에 여러 요소를 추가할 수 있으며, 이럴 때는 `extend()` 함수를 사용합니다.
```python
list = [1, 2, 3]
list.extend([4, 5, 6])
print(list)
[1, 2, 3, 4, 5]
```

### 리스트 연결 연산자와 요소 추가의 차이
연결 연산자를 사용하는 경우 `extned()` 함수를 이용한 것과 비슷한 형태로 작동합니다.
```python
list_a = [1, 2, 3]
list_b = [4, 5, 6]
print(list_a + list_b)
[1, 2, 3, 4, 5, 6]
print(list_a)
[1, 2, 3]
print(list_b)
[4, 5, 6]
```
위의 경우처럼 연결 연산자를 사용하는 경우에는 실제 원본에는 아무 변화가 없습니다.
```python
list_a = [1, 2, 3]
list_b = [4, 5, 6]
list_a.extend(list_b)
print(list_a)
[1, 2, 3, 4, 5, 6]
```
하지만 `extend()` 함수를 이용한 경우에는 원본에도 영향이 가게 됩니다.

### 리스트 요소 삭제
리스트에서 요소를 삭제하는 방법으로는 인덱스로 제거하는 `del` 키워드와 `pop()` 함수와 값으로 제거하는 `remove`가 있습니다.
```python
del 리스트명[인덱스]
```
```python
리스트명.pop(인덱스)
```
요소를 제거할 때는 아래 코드처럼 사용할 수 있습니다.
```python
list = [1, 2, 3, 4, 5]

# del 키워드를 사용
del list[1]
print("del list[1]: ", list)
del list[1]: [1, 3, 4, 5]

# pop() 함수를 사용
list.pop(0)
print("list.pop(0): ", list)
list.pop(0): [3, 4, 5]
```

#### 값으로 제거하기
또 다른 방법으로는 리스트 내부에 있는 값을 찾아서 제거하는 방식으로 `remove()` 함수를 사용합니다.
```python
리스트.remove(값)
```
```python
list = [1, 2, 3, 4, 1, 2, 3]
list.remove(2)
print(list)
[1, 3, 4, 1, 2, 3]
```
위에서 보이는 것 처럼 중복된 값이 있는 경우에는 가장 먼저 발견되는 하나의 값만 제거합니다.

#### 모두 제거하기
리스트 내부의 모든 요소를 제거할 때는 `clear()` 함수를 사용합니다.
```python
리스트.clear()
```
```python
list = [1, 2, 3, 4, 5]
list.clear()
print(list)
[]
```

### 리스트 내부에 값 확인
리스트 내부에 값이 있는지 판단할 때는 `in` 연산자를 사용하며, 반대로 값이 없는 것을 확인할 때에는 `not in` 연산자를 사용합니다.
```python
값 in 리스트
```
```python
값 not in 리스트
```
```python
list = [11, 17, 29, 91, 53]
print(17 in list)
True 
print(17 not in list)
False 
```

## 반복문
컴퓨터에서 반복을 지시하는 방법을 반복을 반복문이라고 하며, 반복할 내용의 코드를 복사하고 원하는 만큼만 붙여넣기만 하면 됩니다.
```python
print("안녕")
print("안녕")
print("안녕")
```
이런식으로 작성하면 총 3번 코드가 반복된다. 하지만 딱 보기에도 10개 100개 1000개 이런식으로 많아지면 코드가 길어지고 확인해 불편한 점이 생길 것이다.
이런 경우 `for` 반복문을 통해 해결가능하다.
```python
for i in range(100):
    print("안녕")
```
위와 같은 반복문을 사용하면 안녕 이라는 단어를 2줄만으로 100번 출력할 수 있게 된다.

### 리스트와 함께 사용하기
for 반복문은 기본형태는 아래와 같습니다.
```python
for 반복자 in 반복할 수 있는 것:
    코드
```
`range()`로 반복 횟수만큼 반복하는 것이 아닌 아래와 같이 리스트와 함께 사용할 수도 있습니다.
```python
array = [10, 20, 30, 40, 50]

for element in array:
    print(element)
10
20
30
40
50
```

## 딕셔너리
인덱스를 기반으로 값을 저장하는 `list`와 달리 `Dictonaray`는 키를 기반으로 값을 저장합니다.
```python
{
    "keyA", 10,     # 문자열을 키로 사용
    100:    20,     # 숫자를 키로 사용
    False:  30,     # 불을 키로 사용
}
```
| 자료형  |       의미        | 가리키는 위치 |  선언 형식  |
|:----:|:---------------:|:-------:|:-------:|
| 리스트  | 인덱스를 기반으로 값을 저장 |   인덱스   | 변수 = [] |
| 딕셔너리 |  키를 기반으로 값을 저장  |    키    | 변수 = {} |

### 딕셔너리 선언
중괄호 `{}`로 선언하며, `key`, `value` 형태로 이루어져 있습니다.
```python
변수 = {
    key: value,
    key: value 
}
```
```python
dict = { 
    "name": "다람쥐",
    "type": "동물"
}
```

### 딕셔너리 요소에 접근
딕셔너리 요소에 접근하기 위해서는 리스트에서 인덱스를 접근하는 것처럼 키 값을 이용해서 요소에 접근 가능합니다.
```python
dict = { "name": "다람쥐", "type": "동물" }
print(dict["name"])
다람쥐
```

### 딕셔너리에 값 추가/제거
요소에 접근하는 방식처럼 값을 추가할 때는 키를 기반으로 값을 추가할 수 있습니다.
```python
딕셔너리[새로운 키] = 새로운 값
```
```python
dict = { "name": "다람쥐", "type": "동물" }
dict["age"] = 3
print(dict)
{'name': '다람쥐', 'type': '동물', 'age': 3}
```
요소의 추가 말고 기존의 값을 변경할 수도 있습니다.
```python
dict = { "name": "다람쥐", "type": "동물" }
dict["name"] = "고양이"
print(dict)
{'name': '고양이', 'type': '동물'}
```
요소를 삭제할 때는 리스트 처럼 `del` 키워드를 이용해서 삭제가 가능합니다.
```python
dict = { "name": "다람쥐", "type": "동물" }
del dict["name"]
print(dict)
{'type', '동물'}
```

### 딕셔너리 내부 키 여부 확인
내부의 키 존재 여부를 확인할 때는 `in` 키워드나 `get()` 함수를 사용할 수 있습니다.
```python
dict = { "name": "다람쥐", "type": "동물" }
print('name' in dict)
True

print(dict.get("name"))
다람쥐
```


### 딕셔너리와 함께 반복문 사용
딕셔너리는 `for` 반복문과 함께 사용 가능하며 내부에 있는 키가 변수로 들어가며 아래와 같은 형태로 사용할 수 있습니다.
```python
for 키 변수 in 딕셔너리:
    코드
```
```python
dict = {"name": "다람쥐", "type": "동물", "age": "3", "gender": "수컷"}
for key in dict:
    print("dict: ", key, ": ", dict[key])
dict:  name :  다람쥐
dict:  type :  동물
dict:  age :  3
```

## 반복문과 범위
앞에서도 잠깐 설명한적이 있지만 특정한 횟수만큼 반복하고 싶을때는 for문과 `range` 즉 범위를 조합해서 사용합니다.
```python
# 각각의 매개변수는 숫자를 의미한다
range(A)         # 0부터 (A - 1)까지의 범위를 의미
range(A, B)      # A부터 (B - 1)까지의 범위를 의미
range(A, B, C)   # A부터 (B - 1)까지의 범위를 가지며 앞뒤가 C만큼씩 차이가 난다는 것을 의미
```
```python
print(list(range(10)))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list(range(0, 5)))
[0, 1, 2, 3, 4]
print(list(range(0, 10, 2)))
[0, 2, 4, 6, 8]
```

### 범위와 함께 for 반복문 사용
for 반복문과 range 범위를 조합하여 사용 가능합니다.
```python
for 숫자 변수 in 범위:
    코드
```
```python
for i in range(5):
    print("num: ", i)
    
# 출력 결과
num:  0
num:  1
num:  2
num:  3
num:  4
```

### 리스트와 범위 조합해서 사용
```python
array = [10, 20, 30]
for item in array:
    print("item: ", item)
    
# 출력 결과
item:  10
item:  20
item:  30
```

### 역반복문
반대로 반복하기 위해서는 `range()` 함수의 매개변수를 이용하는 방법과 `reversed()` 함수를 사용하는 방법이 존재합니다.
```python
for i in range(4, -1, -1):
    print("i: ", i)
    
# 출력 결과
i:  4
i:  3
i:  2
i:  1
i:  0
```
```python
for i in reversed(range(5)):
    print("i: ", i)

# 출력 결과
i:  4
i:  3
i:  2
i:  1
i:  0
```

<Comment />