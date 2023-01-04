# fe-console-todo
# FE-console-todo 윤성환, 정동환, 최재원
***
### 실행 방법
- node grade.js
***
### 기능 & 명령예시
- show
  - EX) show$all
  - EX) show$todo
- add
  - EX) add$javascript-study$["favorite","study"]
- delete
  - EX) delete$1
- update
  - EX) update$2$done
***
### 실행예시
<img width="1180" alt="스크린샷 2023-01-04 오전 11 38 38" src="https://user-images.githubusercontent.com/43432783/210474445-485a5bb0-a33b-43d4-9645-bee3980a1050.png">

### 예외처리
- close, show, add, delete, update 이외에 명령어 들어오면 에러
- 각각의 명령어에 맞는 인자 개수와 다르게 들어오면 에러
- show에서 두번째 인자로 todo, doing, done 이외의 입력이면 에러
- add에서 공백 들어오면 공백제거
- delete, update에서 입력받은 id가 숫자가 아니면 에러
- delete, update에서 압력받은 id가 존재하지 않으면 에러
- update에서 입력받은 변경할 상태가 todo, doing, done이외의 입력이면 에러
