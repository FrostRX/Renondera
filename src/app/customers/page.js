import Head from "@/app/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CustomersPage() {
  return (
    <>
      <Head title="Nustros Productos" />
      <Navbar />
      <div className="pt-20">
        <div className="mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-renondera-main font-semibold tracking-wide uppercase">
                Afiliados
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Conoce a nuestros afiliados
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Estamos orgullosos de trabajar con ellos. Recuerda que puedes
                unirte a esta familia contactándonos.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10"></div>
        </div>
      </div>
    </>
  );
}
