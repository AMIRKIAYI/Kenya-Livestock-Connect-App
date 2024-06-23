const statements = [
    "Buy and sell quality livestock with ease!",
    "Join our community of trusted livestock traders!",
    "Get the best deals on livestock today!",
    "Browse top-quality livestock from verified sellers!",
    "Discover rare breeds and special offers today!"
];

let currentIndex = 0;
const statementElement = document.getElementById('statement');

function changeStatement() {
    statementElement.textContent = statements[currentIndex];
    currentIndex = (currentIndex + 1) % statements.length;
}

setInterval(changeStatement, 3000); // Change statement every 3 seconds

// Initial statement
changeStatement();
