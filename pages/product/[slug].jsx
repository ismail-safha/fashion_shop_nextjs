import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  if (!product) {
    return (
      <Layout title="Product Not Found">
        <Wrapper>Product Not Found</Wrapper>
      </Layout>
    );
  }
  // add To Cart Handler
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    router.push("/cart");
  };

  return (
    <>
      <Layout title={product.name}>
        <Wrapper>
          <div className="flex md:flex-col md:px-10  gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] lg:max-w-[500px] max-w-full lg:mx-auto mx-0">
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout="responsive"
              ></Image>
            </div>
            {/* right column start */}
            <div className="flex-[1] py-3">
              <div className="summery_product">
                <div className="entry">
                  <h1 className="title">{product.name}</h1>

                  <div className="product_group">
                    <div className="product_price">
                      <span className="current">DH {product.price}</span>
                      <div className="wrap">
                        <span className="before">DH {product.OldPrice}</span>
                        <span className="discount">-25%</span>
                      </div>
                    </div>
                    <div className="product_rating">
                      <span>
                        <i className="ri-star-fill"></i>
                        <span>{product.rating}</span>
                      </span>
                    </div>
                  </div>

                  <div className="product_size">
                    <span>Size:</span>
                    <div className="wrap_has">
                      <button className="">S</button>
                      <button className="">M</button>
                      <button className="selected">L</button>
                      <button>XL</button>
                    </div>
                  </div>

                  <div className="product_stock">
                    <strong>
                      {product.countInStock > 0 ? "In stock" : "Unavailable"}
                    </strong>
                    <span className="grey-color">in stock</span>
                    <i className="ri-checkbox-circle-line"></i>
                  </div>

                  <div className="product_action">
                    <div className="addCart">
                      <button
                        type="submit"
                        onClick={addToCartHandler}
                        className="primary-btn"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

                  <div className="shipping">
                    <ul>
                      <li>
                        <i className="ri-gift-line"></i>
                        <span>Free shipping & return</span>
                        <span className="grey-color">On orders over $100</span>
                      </li>
                      <li>
                        <i className="ri-truck-line"></i>
                        <span>Estimate Delivery:</span>
                        <span className="grey-color"> 01-07 jan, 2023 </span>
                      </li>
                    </ul>
                  </div>
                  <div className="description_product">
                    <p>
                      <strong>Every time the AJ1</strong>
                      {product.description}
                    </p>
                    <ul>
                      <li>Colour Shown: White/Black/Ice Blue</li>
                      <li>Style: DV1308-104</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
