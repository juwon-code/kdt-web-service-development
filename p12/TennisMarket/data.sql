# 1.1. 테니스 DB 스키마 생성.
CREATE SCHEMA tennis_db DEFAULT CHARACTER SET UTF8;

# 1.2. 테니스 스키마 사용.
USE tennis_db;

# 2.1. 제품 테이블 생성.
CREATE TABLE product
(
    id INT,
    name VARCHAR(30),
    description VARCHAR(100),
    price INT
);

# 2.2. 제품 데이터 삽입.
INSERT INTO product VALUES (1, 'Red Racket', 'Hot Red!', 300000);
INSERT INTO product VALUES (2, 'Blue Racket', 'Cool Blue!', 350000);
INSERT INTO product VALUES (3, 'Black Racket', 'Chick Black!', 500000);

# 3. 주문 날짜 테이블 생성.
CREATE TABLE orderlist
(
    product_id INT,
    order_date DATE
);