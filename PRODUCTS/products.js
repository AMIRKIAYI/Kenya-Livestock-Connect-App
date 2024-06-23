document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('card');
    const categories = ['Meat', 'Dairy', 'LatestProduct'];

    categories.forEach(category => {
        fetch(`http://localhost:3000/${category}`)
            .then(response => response.json())
            .then(data => {
                const categorySection = document.createElement('div');
                categorySection.className = 'category';

                const categoryHeader = document.createElement('h3');
                categoryHeader.textContent = category;
                categorySection.appendChild(categoryHeader);

                const cardsContainer = document.createElement('div');
                cardsContainer.className = 'cards-container';

                data.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'listing-card';

                    card.innerHTML = `
                        <img src="${item.image}" alt="${item.breed}">
                        <h3>${item.breed}</h3>
                        <p>${item.description}</p>
                        <p>Weight: ${item.weight}</p>
                        <p>Price: ${item.price}</p>
                        <button class="btn btn-primary spacing-btn buy-btn" data-category="${category}" data-id="${item.id}">Buy</button>
                        <button type="button" class="btn btn-primary spacing-btn delete-btn" data-category="${category}" data-id="${item.id}">Delete Product</button>
                    `;

                    cardsContainer.appendChild(card);
                });

                categorySection.appendChild(cardsContainer);
                listingsContainer.appendChild(categorySection);

                // Add event listeners to the delete buttons
                const deleteButtons = document.querySelectorAll('.delete-btn');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        const category = e.target.getAttribute('data-category');
                        const id = e.target.getAttribute('data-id');

                        console.log(`Deleting product from category: ${category}, id: ${id}`);

                        fetch(`http://localhost:3000/${category}/${id}`, {
                            method: 'DELETE',
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to delete product');
                            }
                            return response.json();
                        })
                        .then(() => {
                            alert('Product deleted successfully');
                            // Optionally, you can remove the card from the DOM here
                            e.target.closest('.listing-card').remove();
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Failed to delete product');
                        });
                    });
                });

                // Add event listeners to the buy buttons
                const buyButtons = document.querySelectorAll('.buy-btn');
                buyButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        const category = e.target.getAttribute('data-category');
                        const id = e.target.getAttribute('data-id');

                        console.log(`Buying product from category: ${category}, id: ${id}`);

                        // Redirect to details.html with product details as query parameters
                        window.location.href = `details.html?category=${category}&id=${id}`;
                    });
                });
            })
            .catch(error => {
                console.error(`Error fetching data for ${category}:`, error);
            });
    });
});
