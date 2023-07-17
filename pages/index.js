import Link from "next/link";
import Layout from "../components/Layout";
import ManeBanner from "../components/ManeBanner";
import ProductGide from "../components/productGide";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <>
      <Layout title="home page">
        <ManeBanner />
        <ProductGide />
        {/* <ProductItemTest /> */}
        <div className=" text-[#1F1F1F] text-center  px-[36px] py-[13px]  mt-[60px] mb-[60px]">
          <h1 className="text-[40px] ">Product</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mdm:grid-cols-3 lgm:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem key={product.slug} product={product}></ProductItem>
          ))}
        </div>
        <div className="btn">
          <Link href="/#">More Products</Link>
        </div>
      </Layout>
    </>
  );
}
