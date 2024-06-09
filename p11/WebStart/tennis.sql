# 제품 테이블 생성.
CREATE TABLE product
(
    id INT,
    name VARCHAR(30),
    description VARCHAR(100),
    price INT
);

# 제품 데이터 삽입.
INSERT INTO product VALUES (1, 'Red Racket', 'Hot Red!', 300000);
INSERT INTO product VALUES (2, 'Blue Racket', 'Cool Blue!', 350000);
INSERT INTO product VALUES (3, 'Black Racket', 'Chick Black!', 500000);