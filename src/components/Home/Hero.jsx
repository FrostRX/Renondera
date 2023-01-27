export default function Hero() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="grid place-items-center  mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl text-gray-700 font-bold max-w-2xl text-center py-7">
          Brindamos herramientas prácticas para ayudarte a gestionar tu negocio
          de la manera más sencilla posible
        </h1>
        <img
          className="rounded-2xl shadow-lg w-[90%] md:w-auto"
          src="https://i.imgur.com/WJCGHIk.png"
          alt="Renondera Dashboard"
        />
      </div>
    </div>
  );
}
