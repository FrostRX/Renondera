import { Products } from "@/config/Products";

export default function CardProduct() {
  // Return all the prodructs
  const allProducts = Products.products.map((product) => {
    return product;
  });
  console.log();
  return (
    <div className="grid place-items-center gap-5 md:grid-cols-2">
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="bg-gray-300 flex gap-3 md:h-48 items-center rounded-xl w-[95%] md:w-full mx-auto"
        >
          <img
            className="w-32 h-32"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Atom_1.0_icon.png"
            alt={product.name}
          />
          <div className="my-5 mx-2">
            <p className="text-renondera-main text-sm">{product.cat}</p>
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p className="max-w-xl">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
