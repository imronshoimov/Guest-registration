--query guests
SELECT 
    first_name || ' ' || last_name guests_full_name,
    citizenship,
    passport_seria || '' || passport_number passport,
    arrival_date,
    date_of_departure,
    category_number,
    type_number,
    number
FROM guests
ORDER BY guests_full_name;


SELECT 
    first_name || ' ' || last_name guests_full_name,
    citizenship,
    passport_seria || '' || passport_number passport,
    arrival_date,
    date_of_departure,
    category_number,
    type_number,
    number
FROM guests
WHERE citizenship ILIKE '%america%' AND category_number ILIKE '%standard%';

SELECT 
    first_name || ' ' || last_name guests_full_name,
    citizenship,
    passport_seria || '' || passport_number passport,
    arrival_date,
    date_of_departure,
    category_number,
    type_number,
    number
FROM guests
WHERE category_number ILIKE 'standard';