import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
// import Wrapper from "./Wrapper";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Asmaa" : "Asmaa"}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main className="mt-5 mb-5">
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
