// //amazon data scrapper
// let data = null;


// async function fetchAmazonData() {
//     const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&category_id=aps';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '4308455532mshf236c29a3b2c97ep171863jsn1bf99e393059',
//             'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         data = result.data;
//         console.log(data);

//         // Call a function or execute code that relies on the fetched data
//         printProductPrices(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchAmazonData();







// // Function to print product prices
// function printProductPrices(data) {
//   const productContainer = document.getElementById('product-details');
//     if (data && Array.isArray(data.products)) {
//         const productPrices = data.products.map(product => product.product_price);
//         const product_title = data.products.map(product => product.product_title);
//         console.log(productPrices);
//         console.log(product_title);

//         data.products.forEach(product => {
//           const productDiv = document.createElement('div');
//           productDiv.className = 'product';

          

//           const priceElement = document.createElement('p');
//           priceElement.className="scrapped"
//           priceElement.textContent = `Price: ${product.product_price}`;

//           const titleElement = document.createElement('p');
//           titleElement.className="scrapped"
//           titleElement.textContent = `Title: ${product.product_title}`;

//           productDiv.appendChild(priceElement);
//           productDiv.appendChild(titleElement);

//           productContainer.appendChild(productDiv);
//       });

//     } else {
//         console.error('Invalid data format');
//         const errorElement = document.createElement('p');
//         errorElement.textContent = 'Invalid data format';
//         productContainer.appendChild(errorElement);
//     }
// }
