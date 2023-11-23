create table user(
    id int primary key auto_increment,
    name varchar(250),
    mobile varchar(250),
    email varchar(40) UNIQUE,
    password varchar(50),
    status varchar(10),
    role varchar(10)
    
);

