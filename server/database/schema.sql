CREATE DATABASE guest_registration;

--table guests
CREATE TABLE guests(
    guest_id serial primary key,
    first_name varchar(32) not null,
    middle_name varchar(32),
    last_name varchar(32) not null,
    citizenship varchar(100) not null,
    passport_seria varchar(2) not null,
    passport_number integer not null,
    arrival_date text not null,
    date_of_departure text,
    category_number varchar(50) not null,
    type_number varchar(50) not null,
    number smallint not null
);



