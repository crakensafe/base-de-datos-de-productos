document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    // Cargar productos al iniciar
    loadProducts();

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const imagen = document.getElementById('imagen').value;

        if (nombre && precio && imagen) {
            addProduct({ nombre, precio, imagen });
            productForm.reset();
            loadProducts();
        }
    });

    function loadProducts() {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        productList.innerHTML = products.map(product => `
            <div class="bg-purple-700 text-white p-4 rounded-lg shadow-md mb-4">
                <img src="${product.imagen}" alt="${product.nombre}" class="w-full h-32 object-cover mb-2 rounded-lg">
                <h3 class="text-xl font-bold">${product.nombre}</h3>
                <p class="text-white">$${product.precio}</p>
            </div>
        `).join('');
    }

    function addProduct(product) {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
});
