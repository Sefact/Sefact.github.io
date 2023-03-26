# 복잡도
`복잡도(complexity)`는 알고리즘의 성능을 나타내는 척도이다. `시간 복잡도(Time complexity)`와 `공간 복잡도(Space complexity)`로 나눌 수 있다.
- 시간 복잡도: 알고리즘을 위해 필요한 연산 횟수
- 공간 복잡도: 알고리즘을 위해 필요한 메모리의 양

## 시간복잡도
특정한 크기의 입력에 대하여 알고리즘이 얼마나 오래걸리는지를 의미한다.
시간 복잡도를 표현할 때는 `빅오 표기법` 사용하며 간단히 정의하자면 가장 빠르게 증가하는 항만을 고려하는 표기법이다.</br>
아래의 예시의 경우에는 5개의 데이터를 받아 차례로 5회를 더해준다(N = 5).
여기서 연산 횟수는 N에 비례하는 것을 확인 할 수 있으며, N이 커짐에 따라서 무시할 수 있을 정도로 작아질 것이다.
아래의 코드에서 가장 영향력이 큰 부분은 N에 비례하는 연산을 수행하는 반복문 부분이며 시간 복잡도를 `O(N)`이라고 표기한다.
```python
array = [3, 5, 1, 2, 4] # 5개의 데이터(N = 5)
summary = 0

for x in array:
    summary += x
    
print(summary)
```
```python
15
```
다른 예제를 보면 이 코드는 연산 횟수가 1로 단순히 더하기 연산이 한번만 수행되는 상수 연산이므로 시간 복잡도는 `O(1)`로 표현 할 수 있다.
```python
a = 5
b = 7
print(a + b)
```

|  빅오 표기법  | 명칭 |
|:----:|:--:|
| O(1) | 상수 시간(Constant time) |
| O(logN) | 로그 시간(Log time) |
| O(N) | 선형 시간 |
| O(NlogN) | 로그 선형 시간 |
| O(N<sup>2</sup>) | 이차 시간 |
| O(N<sup>3</sup>) | 삼차 시간 |
| O(2<sup>n</sup>) | 지수 시간 |

<Comment />