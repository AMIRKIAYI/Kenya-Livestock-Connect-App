document.getElementById('sellLivestockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Example: you could submit the form data to a backend or display a success message
    alert('Listing submitted!');
});

function performSearch() {
    const query = document.getElementById('searchBar').value;
    alert('Search for: ' + query);
    // Implement search functionality
}

function filterListings() {
    const filterValue = document.getElementById('filter').value;
    alert('Filter applied: ' + filterValue);
    // Implement filter functionality
}

function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById('subscribeEmail').value;
    alert('Subscribed with email: ' + email);
    // Implement subscription functionality (e.g., send email to server)
}
