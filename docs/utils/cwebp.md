# Mac에서 webp 변환
윈도우 유저의 경우 꿀뷰 혹은 다른 기타 프로그램을 사용하면 간단하게 webp로 변환이 가능하나 맥에서는 지원하지 않기 때문에 이러한 경우에 cwebp를 사용하면 파일을 간단하게 webp로 변환 가능합니다.

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

이런 느낌으로 사용가능합니다.
```shell
$ cwebp -q 100 image.png - image.webp
```

## 변환 결과
```shell
users  7836323  2 26 16:05 image.png
users  1100170  2 26 16:12 image.webp
```
기존의 png 파일 대비해서 거의 7분의 1 정도의 용량이 절감되었습니다.

## cwebp 옵션
`cwebp -H`를 통해 사용할 수 있는 옵션들을 확인할 수 있습니다.
```shell
$ cwebp -H
Options:
  -h / -help ............. short help
  -H / -longhelp ......... long help
  -q <float> ............. quality factor (0:small..100:big), default=75
  -alpha_q <int> ......... transparency-compression quality (0..100),
                           default=100
  -preset <string> ....... preset setting, one of:
                            default, photo, picture,
                            drawing, icon, text
     -preset must come first, as it overwrites other parameters
  -z <int> ............... activates lossless preset with given
                           level in [0:fast, ..., 9:slowest]

  -m <int> ............... compression method (0=fast, 6=slowest), default=4
  -segments <int> ........ number of segments to use (1..4), default=4
  -size <int> ............ target size (in bytes)
  -psnr <float> .......... target PSNR (in dB. typically: 42)

  -s <int> <int> ......... input size (width x height) for YUV
  -sns <int> ............. spatial noise shaping (0:off, 100:max), default=50
  -f <int> ............... filter strength (0=off..100), default=60
  -sharpness <int> ....... filter sharpness (0:most .. 7:least sharp), default=0
  -strong ................ use strong filter instead of simple (default)
  -nostrong .............. use simple filter instead of strong
  -sharp_yuv ............. use sharper (and slower) RGB->YUV conversion
  -partition_limit <int> . limit quality to fit the 512k limit on
                           the first partition (0=no degradation ... 100=full)
  -pass <int> ............ analysis pass number (1..10)
  -qrange <min> <max> .... specifies the permissible quality range
                           (default: 0 100)
  -crop <x> <y> <w> <h> .. crop picture with the given rectangle
  -resize <w> <h> ........ resize picture (*after* any cropping)
  -mt .................... use multi-threading if available
  -low_memory ............ reduce memory usage (slower encoding)
  -map <int> ............. print map of extra info
  -print_psnr ............ prints averaged PSNR distortion
  -print_ssim ............ prints averaged SSIM distortion
  -print_lsim ............ prints local-similarity distortion
  -d <file.pgm> .......... dump the compressed output (PGM file)
  -alpha_method <int> .... transparency-compression method (0..1), default=1
  -alpha_filter <string> . predictive filtering for alpha plane,
                           one of: none, fast (default) or best
  -exact ................. preserve RGB values in transparent area, default=off
  -blend_alpha <hex> ..... blend colors against background color
                           expressed as RGB values written in
                           hexadecimal, e.g. 0xc0e0d0 for red=0xc0
                           green=0xe0 and blue=0xd0
  -noalpha ............... discard any transparency information
  -lossless .............. encode image losslessly, default=off
  -near_lossless <int> ... use near-lossless image
                           preprocessing (0..100=off), default=100
  -hint <string> ......... specify image characteristics hint,
                           one of: photo, picture or graph

  -metadata <string> ..... comma separated list of metadata to
                           copy from the input to the output if present.
                           Valid values: all, none (default), exif, icc, xmp

  -short ................. condense printed message
  -quiet ................. don't print anything
  -version ............... print version number and exit
  -noasm ................. disable all assembly optimizations
  -v ..................... verbose, e.g. print encoding/decoding times
  -progress .............. report encoding progress

Experimental Options:
  -jpeg_like ............. roughly match expected JPEG size
  -af .................... auto-adjust filter strength
  -pre <int> ............. pre-processing filter

Supported input formats:
  WebP, JPEG, PNG, PNM (PGM, PPM, PAM), TIFF
```

## cwebp 일괄 변환
아래와 같은 명령어를 사용하여 `images` 폴더에 있는 이미지를 일괄로 `webp`로 변환할 수도 있습니다.
```shell
$ for file in images/*; do cwebp "$file" -o "${file%.*}.webp"; done
```

## 빠른동작 적용법
명령어로 폴더를 일괄 변경한다고 하여도 매번 명령어를 복사 붙여넣기 하여서 변환을 하면 매우 번거롭기 때문에 맥에서 지원하는 `Automator`를 이용하여 클릭만으로 변환하는 방법도 존재합니다.
```console
LaunchPad > Search > Automator
```
![automator 1](~@source/images/utils/automator-1.png) </br>
여기서 **빠른동작**을 클릭한 후 **선택**을 하면 아래와 같은 화면이 나오게 됩니다.
![automator 2](~@source/images/utils/automator-2.png)
```console
유틸리티 실행 > 셀 스크립트 실행
```
셀 스크립트 실행을 더블 클릭하면 아래와 같이 명령어를 입력할 수 있는 화면이 나옵니다. </br>
![automator 3](~@source/images/utils/automator-3.png) </br>
아래 명령어를 복사하여 위와 같이 입력하면 모든 준비가 끝납니다.
```shell
# /bin/zsh
# export PATH=/opt/homebrew/bin:$PATH (.bash_profile)

source ~/.bash_profile
for FILE in "$@"
do
    EXT=${FILE##*.}
    QUALITY=92 # quality (0-100)
    cwebp -q $QUALITY "$FILE" -o "${FILE/%.$EXT/.webp}"
done
``` 
`파일 > 저장` 버튼 혹은 단축키 `⌘(=command) + S`를 누르면 빠른 동작을 저장할 수 있는 화면이 나오게 됩니다. </br>
![automator 4](~@source/images/utils/automator-4.png) </br>
저장 이후 변환을 원하는 파일에 대하여 마우스 오른쪽을 클릭한 후에 `빠른동작 > Convert Webp(=빠른동작으로 저장한 이름)` 을 클릭하면 이미지 변환이 실행됩니다. </br>
![automator 4](~@source/images/utils/automator-5.png) </br>
아래 사진처럼 정상적으로 변환이 된 걸 확인할 수 있습니다.</br>
![automator 4](~@source/images/utils/automator-6.png)

## Reference
<https://developers.google.com/speed/webp/docs/cwebp>

<Comment />