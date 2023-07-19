// const data = {
//   products: [
//     {
//       name: "Daisy Pattern Woven Dress 545 - Black",
//       slug: "free-shirt",
//       category: "Shirts",
//       image: "/img/asmaa_product_5.jpg",
//       price: 229.0,
//       brand: "Nike",
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 20,
//       description: "A popular shirt",
//     },
//     {
//       name: "Fit Shirt",
//       slug: "fit-shirt",
//       category: "Shirts",
//       image: "/img/asmaa_product_6.jpg",
//       price: 279.0,
//       brand: "Adidas",
//       rating: 3.2,
//       numReviews: 10,
//       countInStock: 20,
//       description: "A popular shirt",
//     },
//     {
//       name: "Slim Shirt",
//       slug: "slim-shirt",
//       category: "Shirts",
//       image: "/img/asmaa_product_7.jpg",
//       price: 279.0,
//       brand: "Adidas",
//       rating: 3.2,
//       numReviews: 10,
//       countInStock: 20,
//       description: "A popular shirt",
//     },
//     {
//       name: "Golf Pants",
//       slug: "golf-pants",
//       category: "Shirts",
//       image: "/img/asmaa_product.jpg",
//       price: 279.0,
//       brand: "Adidas",
//       rating: 3.2,
//       numReviews: 10,
//       countInStock: 20,
//       description: "A popular shirt",
//     },
//     {
//       name: "ADA DRESS",
//       slug: "ada-dress",
//       category: "Shirts",
//       image: "/img/asmaa_product_10.jpg",
//       price: 279.0,
//       brand: "Adidas",
//       rating: 3.2,
//       numReviews: 10,
//       countInStock: 20,
//       description:
//         "Robe évasé à col chemisier avec fermeture par boutons sur le devant ; manches longues avec poignets boutonnées , ceinture à nœud de même tissu.",
//     },
//     {
//       name: "Abaya noir avec volants en bleu",
//       slug: "classic-pants",
//       category: "Shirts",
//       image: "/img/asmaa_product_11.jpg",
//       price: 279.0,
//       brand: "Adidas",
//       rating: 3.2,
//       numReviews: 10,
//       countInStock: 20,
//       description:
//         " Instructions d’entretien: Lavage en machine ou nettoyage à sec professionne",
//     },
//   ],
//   productGide: [
//     {
//       image: "/img/asmaa_product_6.jpg",
//       title: "",
//       desc: "",
//     },
//   ],
// };

// export default data;

//=========================
import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Daisy Pattern Woven Dress 545 - Black",
      slug: "free-shirt",
      category: "Shirts",
      image: "/img/asmaa_product_5.jpg",
      imgUrlThm: "/img/asmaa_product_6.jpg",
      price: 229.0,
      OldPrice: 329.0,
      brand: "SOLD",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Daisy Pattern Woven Dress 545 - Black",
      slug: "freee-shirt",
      category: "Shirts",
      image: "/img/asmaa_product_6.jpg",
      imgUrlThm: "/img/asmaa_product_5.jpg",
      price: 229.0,
      OldPrice: 329.0,
      brand: "nwe",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Daisy Pattern Woven Dress 545 - Black",
      slug: "tree-shirt",
      category: "Shirts",
      image: "/img/asmaa_product_7.jpg",
      imgUrlThm: "/img/asmaa_product_8.jpg",
      price: 229.0,
      OldPrice: 329.0,
      brand: "SOLD",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Daisy Pattern Woven Dress 545 - Black",
      slug: "aree-shirt",
      category: "Shirts",
      image: "/img/asmaa_product_5.jpg",
      imgUrlThm: "/img/asmaa_product_6.jpg",
      price: 229.0,
      OldPrice: 329.0,
      brand: "nwe",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Daisy Pattern Woven Dress 545 - Black",
      slug: "dree-shirt",
      category: "Shirts",
      image: "/img/asmaa_product_5.jpg",
      imgUrlThm: "/img/asmaa_product_6.jpg",
      price: 229.0,
      OldPrice: 329.0,
      brand: "nwe",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
  ],
  productGide: [
    {
      image: "/img/asmaa_product_6.jpg",
      title: "",
      desc: "",
    },
  ],
};

export default data;
