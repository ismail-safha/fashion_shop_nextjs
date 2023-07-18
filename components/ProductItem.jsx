import Link from "next/link";
import Wrapper from "./Wrapper";

export default function ProductItem({ product }) {
  return (
    <div className="">
      <Wrapper>
        <div className="product_img relative">
          <span className="product_brand">{product.brand}</span>
          <div className="thumbnail">
            <Link href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
          </div>
          <div className="thumbnail hover">
            <Link href={`/product/${product.slug}`}>
              <img src={product.imgUrlThm} alt={product.name}></img>
            </Link>
          </div>
          <div className="actions">
            <ul>
              <li>
                <Link href="/cart">
                  <i className="ri-star-line"></i>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <i className="ri-eye-line"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product_info">
          <Link href={`/product/${product.slug}`}>
            <h2 className="product_title">{product.name}</h2>
          </Link>
          <div className="product_price">
            <span className="before">DH {product.OldPrice}</span>
            <span>DH {product.price}</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
