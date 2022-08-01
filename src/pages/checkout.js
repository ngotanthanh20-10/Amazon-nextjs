import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const checkout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>checkout</title>
        <link rel="icon" href="/icon.svg.png" />
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your Amazon Cart is empty."
              : "Shopping Cart"}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct />
          ))}
        </div>
      </main>
    </div>
  );
};

export default checkout;
