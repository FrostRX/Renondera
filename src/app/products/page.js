import Head from "@/app/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardProduct from "@/components/Products/CardProduct";

export default function ProductsPage() {
  return (
    <>
      <Head title="Nustros Productos" />
      <Navbar />
      <div className="pt-20">
        <div className="mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-renondera-main font-semibold tracking-wide uppercase">
                Nuestros Productos
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Nuestros productos
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Estos son los productos que ofrecemos para tu emprendimiento.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <CardProduct />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
