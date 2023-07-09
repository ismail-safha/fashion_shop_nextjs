import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <>
      <Layout title="home page">
        <div className=" text-[#1F1F1F]  px-[36px] py-[13px]  mt-[40px] mb-[40px]">
          <h1 className="text-center bg-[#dfc392] rounded-[15px]    font-TAN_PEARL font-[400] text-[20px] ">
            Product
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mdm:grid-cols-3 lgm:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem key={product.slug} product={product}></ProductItem>
          ))}
        </div>
      </Layout>
    </>
  );
}
