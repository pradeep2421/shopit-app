const bcrypt = require("bcryptjs");
const data = {
  users: [
    {
      name: "dracarys",
      email: "donotemail@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "fire",
      email: "youcanmailme@gmail.com",
      password: bcrypt.hashSync("abdd", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "../images/p2.jpg",
      price: 120,
      countInStock: 14,
      brand: "Nike",
      rating: 4.5,
      numReviews: 128,
      description: "high quality product",
    },
    {
      name: "Nike Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 4,
      rating: 3.5,
      numReviews: 26,
      description: "high quality product",
    },
    {
      name: "Nike T Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 0,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike Pants",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 24,
      rating: 5.0,
      numReviews: 16,
      description: "high quality product",
    },
    {
      name: "Adidas Slim Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 9,
      rating: 4.0,
      numReviews: 15,
      description: "high quality product",
    },
    {
      name: "Mufti Slim Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 18,
      rating: 4.5,
      numReviews: 30,
      description: "high quality product",
    },
  ],
};
module.exports = { data };