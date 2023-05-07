# 파이썬 코딩 테스트용 기본 문법 정리

## 자료형
Python의 자료형은 정수형, 실수형, 복소수형, 문자열, 리스트, 튜플 등이 존재

### 정수형(Integer)
정수를 다루는 자료형 양과 음의 정수 그리고 0이 존재
```python
# 양의 정수
a = 10 

# 음의 정수
a = -10

a = 0
```

### 실수형(Real Number)
소수점 아래 데이터를 포함하는 자료형을 이야기하며, 소수부나 정수부가 0인 경우 0을 생략하고 작성 가능
```python
# 양의 실수
a = 123.45

# 음의 실수
a = -543.21

# 소수부 정수부 생략 (= 5.0, -0.7)
a = 5.
a = -.7
```

#### 실수형
IEEE754 표준의 경우 실수형 저장 시 4Byte, 8Byte의 고정된 크기의 메모리를 할당하기 때문에 정확도에 한계가 존재
* 10진수 경우에는 0.3 + 0.6의 결과 값이 0.9로 정확함
    * 2진수에서는 0.9를 정확히 표현할 방법이 존재하지 않음
    * 최대한 가깝게 표현하려고 하기 때문에 오차가 발생

```python
a = 0.3 + 0.6
print(a)

if a == 0.9:
    print(True)
else:
    print(False)
```
```python
# 결과 값
0.89999999999
False
```

앞선 결과처럼 올바른 결과를 내지 못하는 경우가 존재함
* `round()`를 이용하여 반올림하는 방법을 사용
* 123.456을 반올림하여 round(123.456, 2)
    * 123.46처럼 표현

### 지수(Exponent)
Python은 e나 E를 이용하여 지수형 표현이 가능
* e나 E 다음에 오는 수는 10의 지수부를 의미
* 1e9라고 입력 시에는, 10의 9제곱(1,000,000,000)을 의미하게 된다
<center>유효숫자e<sup>지수</sup> = 유효숫자 X 10<sup>지수</sup></center>

```python
# 1,000,000,000
a = 1e9

# 123.4
a = 12.34e1

# 1.234
a = 1234e-3
```

### 연산자
기본 연산자(+, -, *, /)에 나머지 연산자(%)나 몫을 얻기 위한 몫 연산자(//) 그리고 거듭 제곱 연산자(\*\*)등이 존재
```python
a = 7
b = 3

# 나누기 (=2.3333333333333335)
print(a / b)

# 나머지 (=1)
print(a % b)

# 몫 (=2)
print(a // b)
```
```python
a = 5
b = 3

# 거듭 제곱 (=125)
print(a ** b)

# 제곱근 (=2.23606797749979)
print(a ** 0.5)
```

### 리스트(List)
여러 개의 데이터를 연속적으로 담아 처리하기 위해 사용하는 자료형
* 대괄호([])안에 원소를 넣어 초기화하며, 쉼표(,)로 구분
* 리스트 선언시에 `list()` 혹은 `[]`를 이용하여 선언이 가능
* 원소에 접근할 때는 Index 값을 괄호에 넣어 접근 `list[0]`

#### 인덱싱과 슬라이싱
`인덱싱(Indexing)`은 인덱스 값을 입력하여 특정한 원소에 접근하는 것을 의미
* 양과 음의 정수 모두 사용 가능
* 음의 정수를 넣은 경우는 거꾸로 탐색

```Python
a = [1, 2, 3, 4]

# 3번째 원소를 출력 (=3)
print(a[2])

# 뒤에서 3번째 원소를 출력 (=2)
print(a[-3])

# 1번째 원소 값 변경(=[4, 2, 3, 4])
a[0] = 4
print(a)
```

`슬라이싱(Slicing)`은 연속적인 위치를 갖는 원소를 가져올 때 사용
* `[]`안에 `:`을 넣어서 시작과 끝을 지정하여 사용
* 끝 인덱스의 경우는 1을 더 크게 설정해야 함

```Python
a = [1, 2, 3, 4]

# 2번째 부터 4번째 원소까지 출력(=[2, 3, 4])
print(a[1:4])
```

#### 리스트 컴프리헨션
Python에서 리스트를 초기화하는 방법중에 하나로 대괄호 안에 조건문과 반복문을 적용하여 리스트를 초기화 할 수 있다
```Python
array = [i for i in range(10)]
print(array)
```
```Python
# 실행 결과
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<br>

```Python
# 홀수만 포함하는 조건을 넣은 리스트
array = [i for in range(10) if i % 2 == 1]
print(array)

# 제곱 값을 포함하는 리스트
array = [i * i for in range(10)]
print(array)
```
```Python
# 실행 결과
[1, 3, 5, 7, 9]
[1, 4, 9, 16, 25, 36, 49, 64, 81]
```

<br/>

N x M 크기의 2차원 리스트를 초기화할 때 효과적으로 사용 가능
```Python
# 2차원 리스트 올바른 초기화 방식
n, m = 4, 3
array = [[0] * m for _ in range(n)]
array[1][1] = 5

# 2차원 리스트의 잘못된 방식
# 아래와 같은 방법으로 2차원 리스트 초기화 시 array[1][1]를 포함하여 2-4줄 까지 변경됨
n, m = 4, 3
array = [[0] * m] * n

array[1][1] = 5
```

#### 언더바
반복을 위한 변수의 값을 무시하고자 할 때 주로 `언더바(_)`를 사용
```Python
for _ in range(5):
    print("Hello World")
```

#### 리스트 메소드
|  함수명  |  사용법  |  설명  |  시간 복잡도  |
|:---:|:---:|:--:|:---:|
|  append()  |  변수명.append()  |  리스트에 원소를 하나 삽입  |  O(1)  |
|  sort()  |  변수명.sort()  |  오름차순으로 정렬  |  O(NlogN)  |
|  sort()  |  변수명.sort(reverse=True)  |  내림차순으로 정렬  |  O(NlogN)  |
|  reverse()  |  변수명.reverse()  |  리스트의 원소의 순서를 모두 뒤집어 놓는다  |  O(N)  |
|  insert()  |  insert(삽입할 위치 인덱스, 삽입할 값)  |  특정한 인덱스 위치에 원소를 삽입할 때 사용  |  O(N)  |
|  count()  |  변수명.count(특정 값)  |  특정한 값을 가지는 데이터의 개술르 셀 때 사용  |  O(N)  |
|  remove()  |  변수명.remove()  |  특정한 값을 가지는 원소를 제거하는데, 값을 가진 원소가 여러 개면 하나만 제거 |  O(N)  |

#### 특정 값을 가지는 원소 모두 제거
```Python
a = [1, 2, 3, 4, 5, 5, 5]
remove_set = {3, 5}

result = [i for i in a if i not in remove_set]
print(result)
```
```Python
# 실행 결과
[1, 2, 4]
```

### 문자열 자료형
문자열 변수 초기화 시에는 `큰따옴표(")`나 `따옴표(')`를 사용
```Python
str = 'Hello World'
print(str)
```
```Python
# 실행 결과
Hello World
```

#### 문자열 연산
문자열 변수에 `+`을 이용하면 문자열을 연결 가능
* 양의 정수와 `*` 연산자를 이용하면 문자열이 정수의 값만큼 여러번 연결됨
* 리스트와 마찬가지로 `인덱싱`과 `슬라이싱`을 이용 가능
```Python
a = "Hello"
b = "World"

print(a + " " + b)
print(a * 3)
print(a[2:4])
```
```Python
# 실행 결과
Hello World
HelloHelloHello
ll
```

### 튜플
튜플은 리스트와 유사하지만 다른 형태이며 한번 선언된 값은 변경할 수 없으며 선언시에 `소괄호()`를 이용
```Python
a = (1, 2, 3, 4, 5)
# 4번째 원소만 출력
print(a[3])

# 2번째부터 4번째 까지의 원소를 출력
print(a[1:4])
```
```Python
# 실행 결과
4
(2, 3, 4)
```

#### 튜플 사용하는 경우
* 서로 다른 성질의 데이털르 묶어서 관리하는 경우
    * 최단 경로 알고리즘에서 (비용, 노드번호)의 형태로 주로 사용
* 데이터의 나열을 해싱의 키 값으로 사용하는 경우
* 리스트보다 메모리를 효율적으로 이용해야 할 경우

### 사전 자료형
`키(Key)`와 `값(Value)`의 쌍을 데이터로 가지는 자료형
* `변경 불가능한(Immutable)` 자료형을 키로 사용할 수 있음
* 해시 테이블을 이용하므로 조회 및 수정에서 `O(1)`의 시간에 처리 가능
```Python
data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
print(data)

if '사과' in data:
  print("'사과'를 키로 가지는 데이터가 존재")
```
```Python
# 실행 결과
{'사과': 'Apple', '바나나': 'Banana'}
'사과'를 키로 가지는 데이터가 존재
```

#### 사전 자료형 메소드
`키(Key)`와 `값(Value)`의 값을 별도로 뽑아내는 메소드가 존재
* `keys()` 함수를 이용하면 키 데이터만을 리스트로 뽑아서 사용
* `values()` 함수를 이용하면 값 데이터만을 리스트로 뽑아서 사용
```Python
data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'

key_list = data.keys()
value_list = data.values()
print(key_list)
print(value_list)
```
```Python
# 실행 결과
dict_keys(['사과', '바나나'])
dict_values(['Apple', 'Banana'])
```

### 집합 자료형
집합은 `set()`함수에 리스트 혹은 문자열을 이용해서 초기화하거나 `중괄호({})`안에 각 원소를 콤마(,)를 기준으로 구분하여 삽입함으로써 초기화
* 중복을 허용하지 않으며 순거가 없음
* 데이터의 조회 및 수정에 있어서 `O(1)`의 시간복잡도를 가짐
```Python
# set()을 이용한 초기화 방법
data = set([1, 2, 3, 4, 5])

# {}를 이용한 초기화 방법
data = {1, 2, 3, 4, 5}
```

#### 집합 자료형의 연산
집합 연산으로는 `합집합`, `교집합`, `차집합` 연산 등이 존재
* `합집합`은 집합 A에 속하거나 B에 속하는 원소로 이루어진 집합
* `교집합`은 집합 A에도 속하고 B에도 속하느 원소로 이루어진 집합
* `차집합`은 집합 A의 원소 중에서 B에 속하지 않는 원소들로 이루어진 집합
```Python
a = {1, 2, 3, 4, 5, 6}
b = {5, 6, 7, 8, 1, 2}

# 합집합
print(a | b)
# 교집합
print(a & b)
# 차집합
print(a - b)
```
```Python
# 실행 결과
{1, 2, 3, 4, 5, 6, 7, 8}
{1, 2, 5, 6}
{3, 4}
```

#### 집합 자료형 관련 함수
```Python
data = {1, 2, 3}
print(data)

# 새로운 원소 추가
data.add(4)
print(data)

# 새로운 여러 개의 원소 값 추가
data.update([5, 6])
print(data)

# 특정한 값을 가지는 원소 삭제
data.remove(3)
print(data)
```
```Python
{1, 2, 3}
{1, 2, 3, 4}
{1, 2, 3, 4, 5, 6}
{1, 2, 4, 5, 6}
```

#### 사전 자료형과 집합 자료형의 특징
순서가 없기 때문에 인덱싱으로 값을 얻을 수 없음
* 사전은 `키(Key)` 집합은 `원소(Element)`를 이용해 `O(1)`의 시간 복잡도로 조회가 가능

### 입력과 출력
* `input()` 함수는 한 줄의 문자열을 입력 받는 함수
* `map()` 함수는 리스트의 모든 원소에 각각 특정한 함수를 적용할 때 사용하는 함수
```Python
# 공백을 기준으로 구분된 데이터를 입력 받는 경우
a = list(map(int, input().split()))
# 입력 값: 1 2 3 4 5
print(a)

# 공백을 기준으로 변수에 데이터를 할당
a, b, c = map(int, input().split())
# 입력 값: 1 2 3
print(a, b, c)
```

```Python
# 실행 결과
[1, 2, 3, 4, 5]
1 2 3
```

#### f-string
Python 3.6부터 사용 가능하며, 문자열 앞에 접두사 `f`를 붙여 사용하며, 중괄호 안에 변수명을 기입하여 문자열과 정수를 함께 넣게 끔 할 수 있다
```Python
answer = 7
print(f"정답은 {answer}입니다.")
```
```Python
# 실행 결과
정답은 7입니다.
```

## 조건문
프로그램의 흐름을 제어하는 문법으로 조건에 따라서 프로그램을 로직을 설정할 수 있게 끔 해준다
```Python
# 조건문의 기본 형태
answer = 10

if answer >= 10:
  print('정답')
  
# 조건문에 해당되지 않는 경우의 추가 형태
answer = 6

if answer > 10:
  print("1번째 조건과 일치")
elif answer > 5:
  print("2번째 조건과 일치")
else:
  print("어떠한 조건과도 일치하지 않음")
```
```Python
# 실행 결과
정답
2번째 조건과 일치
```

### 비교 연산자
`비교연산자`는 특정한 두 값을 비교할 때 사용
|  비교연산자  |  설명  |
|:---:|:---:|
|  X == Y  |  X와 Y가 서로 같을 때 True |
|  X != Y  |  X와 Y가 서로 다를 때 True |
|  X > Y  |  X가 Y보다 클 때 True |
|  X < Y  |  X가 Y보다 작을 때 True |
|  X >= Y  |  X가 Y보다 크거나 같을 때 True |
|  X <= Y  |  X가 Y보다 작거나 같을 때 True |

### 논리 연산자
논리 값 (True/False) 사이의 연산을 수행할 떄 사용
|  논리연산자  |  설명  |
|:---:|:---:|
|  X and Y  |  X와 Y가 모두 True인 경우 True |
|  X or Y  |  X와 Y중에 하나라도 True인 경우 True |
|  not X  |  X가 False인 경우 True |

### 기타 연산자
데이터의 포함 여부를 판단하기 위한 연산자
|  in 연산자와 not in 연산자  |  설명  |
|:---:|:---:|
|  x in 리스트  |  리스트 안에 x가 들어가 있는 경우 True |
|  x not in 문자열  |  문자열 안에 x가 들어가 있지 않은 경우 True |

### 조건문 간소화
```Python
# 조건문 내부 코드가 한 줄인 경우 줄바꿈을 하지 않고 작성 가능
score = 85

if score >= 80: result = "Success"
else: result = "Fail"
print(result)

# 조건부 표현식은 if ~ else문을 한 줄에 작성 가능
score = 85
result = "Success" if score >= 80 else "Fail"
print(result)
```
```Python
Success
Success
```

### 조건문 내에서 부등식 사용
```Python
# and 연산자를 이용한 조건
x = 15
if x > 0 and x < 20:
  print("x는 0 이상 20 미만의 수")
  
# 부등호만을 이용한 조건
x = 15
if 0 < x < 20:
  print("x는 0 이상 20 미만의 수")
```
```Python
x는 0 이상 20 미만의 수
x는 0 이상 20 미만의 수
```

## 반복문
특정한 소스를 반복적으로 실행하고자 할 떄 사용
```Python
# 1부터 9까지의 정수의 합을 구하기 위한 반복문
i = 1
result = 0

while i <= 9:
  result += i
  i += 1

print(result)
```
```Python
# 실행 결과
45
```

### 무한 루프
반복문의 종료 조건에 도달하지 못하게 작성된 경우 끊임 없이 반복 되는 `무한 루프(Infinite Loop)`가 발생
```Python
x = 10

# x가 계속 10보다 크기 때문에 계속 x를 출력
while x > 5:
  print(x)
```

### 반복문(for문)
while이 아닌 for문을 이용하여 반복문을 작성할 수 있으며, for문의 구조는 특정한 변수를 이용하여 `in` 뒤에 오는 데이터(리스트, 튜플)에 포함되어 있는 원소를 첫 번째 인덱스부터 차례대로 하나씩 방문하는 형태로 구성
```Python
for 변수 in 리스트:
  반복할 코드
```

#### for _ in range()
연속적인 값을 차례대로 순회할 때는 `range()`를 주로 사용
* range(시작, 끝)의 형태로 구성
* 내부 값을 하나만 넣은 경우는 시작 값은 무조건 0으로 구성
```Python
result = 0

for i in range(1, 10):
  result += i
  
print(result)
```
```Python
# 실행 결과
45
```

#### continue
코드의 실행을 건너뛰고, 다음 반복을 진행하고자 하는 경우에는 `continue` 키워드를 사용
```Python
result = 0

for i in range(1, 10):
  if i % 2 == 0:
    continue
  result += i
  
print(result)
```
```Python
# 실행 결과
25
```

#### break
`break`는 반복문을 즉시 종료할 때 사용합니다
```Python
i = 1

while True:
  print(i)
  if i == 3:
    break
  i += 1
```
```Python
# 실행 결과
1
2
3
```

## 함수
`함수(Function)`는 특정한 작업을 하나의 단위로 묶어 놓은 것을 의미

### 함수의 종류
* 파이썬에서 기본적으로 제공하는 `내장 함수`
* 개발자가 직접 정의하여 사용할 수 있는 `사용자 정의 함수`

### 함수 정의
함수는 함수 내부에서 사용할 변수인 `매개변수` 와 결과를 반환할 `반환값`으로 구성되어 있습니다
```Python
def 함수명(매개변수):
  실행할 코드
  return 반환 값
```

### global
`global` 키워드는 지역 변수가 아닌 함수 바깥에 선언된 변수를 바로 참조하기 위해서 사용
```Python
a = 0

def func():
  global a
  a += 1
  
for i in range(10):
  func()
  
print(a)
```
```Python
# 실행 결과
10
```

### 여러 개의 반환 값
여러 개의 반환 값도 가질 수 있습니다
```Python
def operator(a, b):
  add_var = a + b
  subtract_var = a - b
  multiply_var = a * b
  divide_var = a / b
  return add_var, subtract_var, multiply_var, divide_var
a, b, c, d = operator(7, 3)
print(a, b, c, d)
```
```Python
# 실행 결과
10 4 21 2.3333333333333335
```

## 람다 표현식
`람다(lambda)` 표현식을 이용하면 함수를 선언하지 않고 특정한 기능을 간단하게 작성할 수 있습니다
```Python
def add(a, b):
  return a + b
  
# add() 함수 사용
print(add(3, 7))

# 람다 표현식으로 add() 함수 구현
print((lambda a, b: a + b)(3, 7))
```
```Python
# 실행 결과
10
10
```

### 내장함수에서 자주 사용하는 람다 함수
```Python
array = [('홍길동', 50), ('이순신', 32), ('아무개', 74)]

def my_key(x):
  return x[1]
  
print(sorted(array, key=my_key))
print(sorted(array, key=lambda x: x[1]))
```
```Python
# 실행 결과
[('이순신', 32), ('홍길동', 50), ('아무개', 74)]
[('이순신', 32), ('홍길동', 50), ('아무개', 74)]
```

### 여러 개의 리스트에 적용
```Python
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]

result = map(lambda a, b: a + b, list1, list2)
print(result)
```
```Python
# 실행 결과
[7, 9, 11, 13, 15]
```

## 표준 라이브러리
* 내장함수: 기본 입출력 함수부터 정렬 함수까지 기본적인 함수 제공
* itertools: 반복되는 형태의 데이터를 처리가히 위한 유용한 기능을 제공
  * 순열과 조합 라이브러리가 주로 사용됨
* heapq: 힙(Heap) 자료구조를 제공하며 우선순위 큐 기능을 구현하기 위해 사용
* bisect: 이진 탐색(Binary Search) 기능을 제공
* collections: 덱(deque), 카운터(Counter) 등의 자료구조가 포함
* math: 필수적인 수학적 기능을 제공

### 자주 사용되는 내장 함수
```Python
# sum()
result = sum([1, 2, 3, 4, 5])
print(result)

# min(), max()
min_result = min(7, 3, 5, 2)
max_result = max(7, 3, 5, 2)
print(min_result, max_result)

# eval()
result = eval("(3+5)*7")
print(result)

# sorted()
result = sorted([9, 1, 8, 5, 4])
reverse_result = sorted([9, 1, 8, 5, 4], reverse=True)
print(result)
print(reverse_result)

# sorted() with key
array = [('홍길동', 35), ('이순신', 75), ('아무개', 50)]
result = sorted(array, key=lambda x: x[1], reverse=True)
print(result)
```
```Python
# 실행 결과
15
2 7
56
[1, 4, 5, 8, 9]
[9, 8, 5, 4, 1]
[('이순신', 75), ('아무개', 50), ('홍길동', 35)]
```

### 순열과 조합
* 순열: 서로 다른 n개에서 서로 다른 r개를 선택하여 일렬로 나열하는 것
  * {'A', 'B', 'C'}에서 3개를 선택하여 나열하는 경우: 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA'
* 조합: 서로 다른 n개에서 순서에 상관 없이 서로 다른 r개를 선택하는 것
  * {'A', 'B', 'C'}에서 순서를 고려하지 않고 2개를 뽀는 경우: 'AB', 'AC', 'BC'
<center>순열의 수: nPr = n * (n - 1) * (n - 2) * ··· * (n - r + 1)</center>
<center>조합의 수: nCr = n * (n - 1) * (n - 2) * ··· * (n - r + 1) / r!</center>

```Python
# 순열 구하기
from itertools import permutations

data = ['A', 'B', 'C']

result = list(permutations(data, 3))
print(result)
```
```Python
[('A', 'B', 'C'), ('A', 'C', 'B'), ('B', 'A', 'C'), ('B', 'C', 'A'), ('C', 'A', 'B'), ('C', 'B', 'A')]
```
```Python
# 조합 구하기
from itertools import combinations

data = ['A', 'B', 'C']

result = list(combinations(data, 2))
print(result)
```
```Python
[('A', 'B'), ('A', 'C'), ('B', 'C')]
```

### 중복 순열과 중복 조합
```Python
# 중복을 허용하여 2개를 뽑는 모든 순열
from itertools import product

data = ['A', 'B', 'C']

result = list(product(data, repeat=2))
print(result)

# 중복을 허용하여 2개를 뽑는 모든 조합
from itertools import combinations_with_replacement

data = ['A', 'B', 'C']

result = list(combinations_with_replacement(data, 2))
print(result)
```
```Python
[('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'B'), ('C', 'C')]
[('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]
```

### 카운터(Counter)
Python collections 라이브러리의 `Counter`는 등장 횟수를 세는 기능을 제공합니다
* 리스트와 같이 반복 가능한 객체가 주어졌을 때 내부의 원소가 몇 번 등장했는지 알려줍니다
```Python
# 중복을 허용하여 2개를 뽑는 모든 순열
from collections import Counter

counter = Counter(['red', 'blue', 'green', 'blue', 'blue'])

# 'blue'와 'green'의 등장 횟수 출력
print(counter['blue'])
print(counter['green'])

# 사전 자료형으로 변환
print(dict(counter))
```
```Python
3
1
{'red': 1, 'blue': 3, 'green': 1}
```

### 최대 공약수와 최소 공배수
```Python
import math

# 최소 공배수(LCM)를 구하는 함수
def lcm(a, b):
  return a * b // math.gcd(a, b)
  
a = 21
b = 14

# 최대 공약수(GCD) 계산
print(math.gcd(21 ,14))

# 최소 공배수(LCM) 계산
print(lcm(21, 14)) 
```
```Python
7
42
```

## Reference
### 나동빈님의 이코테 2021 강의
<https://www.youtube.com/watch?v=m-9pAwq1o3w&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC>