guestForm.onsubmit = async (e) => {
    e.preventDefault()

    let data = await request('http://localhost:3400/api/guests', 'POST', {
        lastName: lastName.value,
        firstName: firstName.value,
        middleName: middleName.value,
        citizenship: citizenship.value,
        passportSeria: passportSeria.value,
        passportNumber: passportNumber.value,
        arrivalDate: arrivalDate.value,
        dateOfDeparture: dateOfDeparture.value,
        categoryNumber: categoryNumber.value,
        numberOfType: numberOfType.value,
        number: number.value
    })

    if(data.status) {
        let error = data.message.details
        for(let item of error) {
            errorMessage.textContent = item.message
        }
    } 

    guestForm.value.reset()
}
