const productsArray = [
  {
    id: "price_1Pj1UvI8hzMP85DpsMGAOot4", // Coffee
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1Pj1VsI8hzMP85DpBxaQJD8e", // Sunglasses
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1Pj1W2I8hzMP85Dpz14IaSo5", // Camera
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (!productData) {
    console.log("Product Data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
