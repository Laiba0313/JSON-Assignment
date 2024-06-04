fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('card-container');
        data.products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.ProdImage}" alt="${product.ProdName}">
                <h3>${product.ProdName}</h3>
                <p>${product.ProdDescription}</p>
                <p class="price">Price: $${product.ProdPrice}</p>
                <p class="quantity">Available: ${product.ProdQuantity}</p>
                <p class="category">Category: ${product.ProdCategory}</p>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching the product data:', error));