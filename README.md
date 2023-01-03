# fe-console-todo

# 예외처리

0. parsing

   - [x]명령어에 오타가 있는 경우

1. show

   - [x]두번째 인자가 all, todo, doing, done 이 아닌 경우

2. add

   - [x]인자가 부족한 경우 -> 허용
   - [ ]tags 형식이 [""] 가 아닌 경우

3. delete
   - [x]id 가 존재하지 않는 경우
4. update
   - [x]id 가 존재하지 않는 경우
   - [x]세번째 인자가 all, todo, doing, done 이 아닌 경우
   - [x] 같은 상태로 업데이트 하는 경우 (?) -> 허용
