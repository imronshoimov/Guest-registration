const { fetch, fetchAll } = require("../utils/database");

const ALL_GUESTS = `
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
`;

exports.allGuests = () => fetchAll(ALL_GUESTS);

const FILTER_GUESTS = `
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
WHERE citizenship ILIKE '%'||$1||'%' OR category_number ILIKE '%'||$2||'%';
`;

exports.filterGuests = ({ citizenship, categoryNumber }) =>
  fetchAll(FILTER_GUESTS, citizenship, categoryNumber);

const ADD_GUEST = `
INSERT INTO guests(
    last_name,
    first_name,
    middle_name,
    citizenship,
    passport_seria,
    passport_number,
    arrival_date,
    date_of_departure,
    category_number,
    type_number,
    number
) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING guest_id
`;
exports.insertGuest = (data) =>
  fetch(
    ADD_GUEST,
    data.lastName,
    data.firstName,
    data.middleName,
    data.citizenship,
    data.passportSeria,
    data.passportNumber,
    data.arrivalDate,
    data.dateOfDeparture,
    data.categoryNumber,
    data.numberOfType,
    data.number
  );
