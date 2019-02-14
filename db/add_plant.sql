insert into inventory
(name, price, product_description, product_category, product_image)
values 
( ${name}, ${price}, ${product_description}, ${product_category}, ${product_image});
select * from inventory;
-- order by id asc;