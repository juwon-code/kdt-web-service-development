# 데이터베이스 조회.
SHOW DATABASES;


# 회원 테이블 생성.
CREATE TABLE member (
	id VARCHAR(30),
	name VARCHAR(30),
	pwd VARCHAR(30)
);


# 회원 데이터 삽입.
INSERT INTO member VALUES ('ssongCoding', 'kim songa', 'aaaaa');
INSERT INTO member VALUES ('tennisking', 'park songa', 'bbbbb');
INSERT INTO member VALUES ('programmer', 'song songa', 'ccccc');


# 회원 데이터 조회.
# 회원의 아이디 조회.
SELECT id FROM member;

# 회원의 모든 데이터 조회.
SELECT * FROM member;

# 특정 회원의 데이터 조회.
SELECT * FROM WHERE id = 'tennisking';


# 회원 데이터 수정.
# 특정 회원의 비밀번호를 변경.
UPDATE member SET pwd = 'zzzzz' WHERE id = 'tennisking';


# 회원 데이터 삭제.
# 특정 회원 삭제.
DELETE FROM member WHERE NAME = 'park songa';