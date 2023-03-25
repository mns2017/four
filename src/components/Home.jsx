import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const img3 = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61iR9NMcKpL._UL1280_.jpg"

const img4 ="https://m.media-amazon.com/images/I/4156S5gFmtL._SX300_SY300_QL70_FMwebp_.jpg"
const img5 ="https://m.media-amazon.com/images/I/71dw2hQlT-L._SX679_.jpg"
const img6 ="https://m.media-amazon.com/images/I/61LL68H0ymL._SX679_.jpg"
const img7 ="https://m.media-amazon.com/images/I/71DaKKQ93ZL._UY879_.jpg"
const img8 ="https://m.media-amazon.com/images/I/6149OSWsfSL._UX679_.jpg"
const img9 ="https://m.media-amazon.com/images/I/61aRW4bh6UL._UY695_.jpg"
const img10 ="https://m.media-amazon.com/images/I/51xdEKJ0oDL._SX300_SY300_QL70_FMwebp_.jpg"
const img11 ="https://m.media-amazon.com/images/I/71gkW-diHmL._SX569_.jpg"

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Panda Bag",
      price: 490,
      imgSrc: img3,
      id: "7837",
    },
    {
      name: "Toy Gun",
      price: 2000,
      imgSrc: img11,
      id: "8700",
    },
    {
      name: "Beard-Trimmer",
      price: 2200,
      imgSrc: img4,
      id: "3616",
    },
    {
      name: "Smart watch",
      price: 1799,
      imgSrc: img5,
      id: "unique",
    },
    {
      name: "Villain Perfume",
      price: 500,
      imgSrc: img6,
      id: "bolder",
    },
    {
      name: "Man's T-shirts Pure",
      price: 490,
      imgSrc: img7,
      id: "suckly",
    },
    {
      name: "8 Sun Glasses",
      price: 1300,
      imgSrc: img8,
      id: "owsme",
    },
    {
      name: "2gm Gold",
      price: 13000,
      imgSrc: img9,
      id: "54543",
    },
    {
      name: "Belt",
      price: 4990,
      imgSrc: img10,
      id: "38838",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;