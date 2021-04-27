// Check if destination is valid and check if date is valid
function inputChecker(city, departDate, returnDate, today) {
    const expression = /^[-a-zA-Z\s]{0,255}$/;
    const regex = new RegExp(expression);
    return ((city.match(regex) && city !== "" && today.getTime() <= departDate.getTime() && today.getTime() <= returnDate.getTime() && returnDate.getTime() > departDate.getTime()) ? true : false);
}

export {inputChecker};