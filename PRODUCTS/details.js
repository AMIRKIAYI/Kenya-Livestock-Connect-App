document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const id = urlParams.get('id');

    if (category && id !== null) {
        fetch(`http://localhost:3000/${category}`)
            .then(response => response.json())
            .then(data => {
                const item = data[id];
                if (item) {
                    const detailsContainer = document.getElementById('product-details');
                    detailsContainer.innerHTML = `
                        <img src="${item.image}" alt="${item.breed}">
                        <h1>${item.breed}</h1>
                        <p>${item.description}</p>
                        <p>Weight: ${item.weight}</p>
                        <p>Price: ${item.price}</p>
                        <button id="buy-now-button">Buy Now</button>
                        <button id="Add-to-cart">Add to Cart</button>
                    `;

                    document.getElementById('buy-now-button').addEventListener('click', () => {
                        document.getElementById('purchase-form').style.display = 'block';
                    });
                } else {
                    alert('Item not found');
                }
            })
            .catch(error => {
                console.error(`Error fetching data for ${category}:`, error);
            });
    } else {
        alert('Invalid product details');
    }
});

document.getElementById('buy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('buyer-name').value;
    const email = document.getElementById('buyer-email').value;
    const address = document.getElementById('buyer-address').value;
    const phone = document.getElementById('buyer-phone').value;

    // Implement actual purchase functionality here, such as sending data to the server
    alert(`Purchase successful!\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phone}`);
});