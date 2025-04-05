// Check if records already exist in localStorage, if not, initialize an empty array
let records = JSON.parse(localStorage.getItem('lostFoundRecords')) || [];

// Handle form submission
document.getElementById('lost-found-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;

    // Create a new record object
    const newRecord = {
        type,
        name,
        contact,
        description,
        location,
        date
    };

    // Add the new record to the records array
    records.push(newRecord);

    // Save records to localStorage
    localStorage.setItem('lostFoundRecords', JSON.stringify(records));

    // Reset the form
    event.target.reset();

    // Redirect to the records page
    window.location.href = 'lost.html';
});

// Function to display all records
if (document.getElementById('records-container')) {
    const recordsContainer = document.getElementById('records-container');
    records.forEach(record => {
        const recordElement = document.createElement('div');
        recordElement.classList.add('record');

        recordElement.innerHTML = `
            <h4>${record.type === 'item' ? 'Item' : record.type === 'person' ? 'Person' : 'Other'} - ${record.name || 'Anonymous'}</h4>
            <p><strong>Contact:</strong> ${record.contact}</p>
            <p><strong>Description:</strong> ${record.description}</p>
            <p><strong>Location:</strong> ${record.location}</p>
            <p><strong>Date:</strong> ${record.date}</p>
        `;

        recordsContainer.appendChild(recordElement);
    });
}