import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import data from "../../utils/data";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const router = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug == slug);
  if (!product) {
    return <>Product Not Found</>;
  }
  // add To Cart Handler
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <>
      <Layout title={product.name}>
        <Wrapper>
          <Link href="/">back to product</Link>
          <div className="grid mdm:grid-cols-4 mdm:gap-3">
            {/* product image */}
            <div className="mdm:col-span-2">
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout="responsive"
              ></Image>
            </div>
            {/* information product */}
            <div>
              <ul>
                <li>
                  <h1 className="text-lg">{product.name}</h1>
                </li>
                <li>Category: {product.category}</li>
                <li>Brand: {product.brand}</li>
                <li>
                  {product.rating} of {product.numReviews} reviews
                </li>
                <li>Description: {product.description}</li>
              </ul>
            </div>
            {/*  */}
            <div className="">
              <div className="card p-5">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>DH {product.price}</div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? "In stock" : "Unavailable"}
                  </div>
                </div>
                <button
                  className="primary-button w-full"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
