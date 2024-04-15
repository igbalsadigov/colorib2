// axios.get('https://dummyjson.com/products')
//   .then(response => {
//     const products = response.data.map(product => `
//       <div class="product">
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <button>Add to Cart</button>
//       </div>
//     `).join('');

//     document.getElementById('thirdSection').innerHTML += `
//       <div class="coontainerThird">
//         <div class="product">
//           ${products}
//         </div>
//       </div>
//     `;
//   })
//   .catch(error => {
//     console.error('Hata oluştu:', error);
//   });


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    // #productSec içeriğini temizle
    document.querySelector('#mallar').innerHTML = '';

    // Her ürün için HTML oluştur
    data.forEach(product => {
      const productHTML = `
        <div class="cart">
          <div class="cartImg">
            <img src="${product.image}" alt="">
          </div>
          <div class="cartDesc">
            <p>${product.title}</p>
            <span>$${product.price}</span>
          </div>
        </div>
      `;

      // Oluşturulan HTML'i #productSec içine ekle
      document.querySelector('#mallar').innerHTML += productHTML;
    });
  })
  .catch(error => console.error('API hatası:', error));