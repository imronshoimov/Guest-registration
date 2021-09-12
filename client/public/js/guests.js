let num = 0
let filteredId = 0

/* 
    FILTER
*/

async function getResponse(citizenship = 0, category) {
    let data = await request('http://localhost:3400/api/guests/filter', 'POST', {
    citizenship: citizenship,
    categoryNumber: category
    })

    let guests = data.data.guests

    if(guests) {
        renderGuests(guests, filteredId)
    }
}

// unique function
function getUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// selecting data
function selectData(guests) {
    let citizenship = []
    let categoryNumber = []
    for(let guest of guests) {
        citizenship.push(guest.citizenship);
        categoryNumber.push(guest.category_number);
    }
    
    let citizenshipData = citizenship.filter(getUnique);
    let categoryData = categoryNumber.filter(getUnique);

    console.log(categoryData);
    
    renderSelectData(citizenshipData, categoryData);
}

// rendering data
function renderSelectData(citizenship, category) {
    // selectCitizenship.textContent = " "
    selectCategory.textContent = " "
    for(let item of citizenship) {
        let option = document.createElement('option')
        
        option.value = item
        option.textContent = item
        
        selectCitizenship.appendChild(option)
    }
    
    for(let item of category) {
        let option = document.createElement('option')
        
        option.value = item
        option.textContent = item

        console.log(option);
        
        selectCategory.appendChild(option)
    }
}

// click events
selectCitizenship.onclick = () => {
    getResponse(selectCitizenship.value);
}

selectCategory.onclick = () => {
    getResponse(null, selectCategory.value);
}

/* 
    GUESTS
*/

async function Guests() {
    let data = await request('http://localhost:3400/api/guests', 'GET')
    let guests = data.data.guests;
    renderGuests(guests, num)
    selectData(guests)
}

Guests()

// click event
showAll.onclick = () => {
    Guests()
    selectCitizenship.textContent = " "
    selectCategory.textContent = " "
}

// rendergin all guests
function renderGuests(guests, guestId) {
    tableBody.textContent =  " "
    for(let guest of guests) {
        let row = document.createElement('tr');
        let id = document.createElement('td')
        let name = document.createElement('td')
        let citizenship = document.createElement('td')
        let passport = document.createElement('td')
        let arrivalDate = document.createElement('td')
        let dateOfDeparture = document.createElement('td')
        let categoryNumber = document.createElement('td')
        let typeNumber = document.createElement('td')
        let number = document.createElement('td')
        
        id.textContent = ++guestId
        name.textContent = guest.guests_full_name
        citizenship.textContent = guest.citizenship
        passport.textContent = guest.passport
        arrivalDate.textContent = guest.arrival_date
        dateOfDeparture.textContent = guest.date_of_departure
        categoryNumber.textContent = guest.category_number
        typeNumber.textContent = guest.type_number
        number.textContent = guest.number
        
        row.appendChild(id)
        row.appendChild(name)
        row.appendChild(citizenship)
        row.appendChild(passport)
        row.appendChild(arrivalDate)
        row.appendChild(dateOfDeparture)
        row.appendChild(categoryNumber)
        row.appendChild(typeNumber)
        row.appendChild(number)
        
        tableBody.appendChild(row)
    }
}