document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('card');
    const categories = ['Meat', 'Dairy', 'Leather'];

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

                data.forEach((item, index) => {
                    const card = document.createElement('div');
                    card.className = 'listing-card';

                    card.innerHTML = `
                        <img src="${item.image}" alt="${item.breed}">
                        <h3>${item.breed}</h3>
                        <p>${item.description}</p>
                        <p>Weight: ${item.weight}</p>
                        <p>Price: ${item.price}</p>
                        <a href="details.html?category=${category}&id=${index}" class="buy-button">Buy</a>
                    `;

                    cardsContainer.appendChild(card);
                });

                categorySection.appendChild(cardsContainer);
                listingsContainer.appendChild(categorySection);
            })
            .catch(error => {
                console.error(`Error fetching data for ${category}:`, error);
            });
    });
});
