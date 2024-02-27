let dateCounter = 1;

function addDateInputs() {
    dateCounter++;
    const container = document.getElementById('dateInputsContainer');
    const newDateInputs = document.createElement('div');
    newDateInputs.classList.add('date-inputs');
    newDateInputs.innerHTML = `
        <label>Data przyjazdu i wyjazdu:</label>
        <input type="date" id="arrivalDate${dateCounter}" name="arrivalDate${dateCounter}">
        <input type="date" id="departureDate${dateCounter}" name="departureDate${dateCounter}" onchange="calculateTotalDays()">
    `;
    container.appendChild(newDateInputs);
}

function calculateTotalDays() {
    let totalDays = 0;
    for (let i = 1; i <= dateCounter; i++) {
        const arrivalDate = document.getElementById(`arrivalDate${i}`).value;
        const departureDate = document.getElementById(`departureDate${i}`).value;
        if (arrivalDate && departureDate) {
            const millisecondsPerDay = 1000 * 60 * 60 * 24;
            const startDate = new Date(arrivalDate);
            const endDate = new Date(departureDate);
            const difference = endDate.getTime() - startDate.getTime();
            const days = Math.ceil(difference / millisecondsPerDay);
            totalDays += days;
        }
    }
    document.getElementById('totalDays').textContent = `Łączna liczba dni: ${totalDays}`;
}