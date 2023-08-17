const products = [
  {
    name: "Smartphone",
    price: 499.99,
    category: "Electronics",
    description: "High-end smartphone with advanced features.",
  },
  {
    name: "Laptop",
    price: 799.0,
    category: "Electronics",
    description: "Powerful laptop for work and entertainment.",
  },
  {
    name: "Designer Watch",
    price: 299.5,
    category: "Fashion",
    description: "Elegant watch with a unique design.",
  },
  {
    name: "Gaming Console",
    price: 349.99,
    category: "Electronics",
    description: "Next-gen gaming console for immersive gameplay.",
  },
  {
    name: "Digital Camera",
    price: 599.95,
    category: "Electronics",
    description: "High-resolution camera for stunning photography.",
  },
];

// const totalPrice = products.reduce(
//   (total, product) => total + product.price,
//   0
// );

//filtered array
const reducedArray = products.reduce((accumulator, product) => {
  accumulator.push({
    name: "This is a product of " + product.name,
    price: product.price + 100,
  });
  return accumulator;
}, []);

console.log(reducedArray);
