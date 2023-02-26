# Mac에서 webp 변환
윈도우 유저의 경우 꿀뷰 나 기타 프로그램을 사용하면 간단하게 webp로 변환이 가능하나 맥에서는 지원하지 않기 때문에 이러한 경우에 cwebp를 사용하면 파일을 간단하게 webp로 변환 가능합니다.

## 설치방법
brew를 통해 설치가 가능하며 설치 완료후에는 which 명령어를 통해 설치를 확인할 수 있습니다.
```shell
$ brew install cwebp
$ which brew
/opt/homebrew/bin/brew
```

## webp 변환
cwebp 명령어로 webp로 변활할 수 있습니다.</br>
기본형식은 아래와 같으며
```shell
$ cwebp [options] input_file -o output_file.webp
```

이런 느낌으로 사용가능합니다
```shell
$ cwebp -q 100 image.png - image.webp
```

## 변환 이후
```shell
users  7836323  2 26 16:05 pizza.png
users  1100170  2 26 16:12 pizza.webp
```
기존의 png 파일 대비해서 거의 7분의 1 정도의 용량 절감을 보여줍니다.



## cwebp 옵션
`-o string`


## Reference
https://developers.google.com/speed/webp/docs/cwebp

## 작성중
## 작성중

<Comment />