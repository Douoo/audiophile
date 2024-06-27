import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RadioTile from "./RadioTile";
import TextFormField from "./TextFormField";
import Image from "next/image";

export default function Checkout() {
  return (
    <>
      <header className="bg-neutral-900">
        <Navbar className="clr-neutral-100" />
      </header>
      <main className="bg-neutral-300 pt-10 pb-16">
        <div className="container-custom space-y-8">
          {" "}
          <Link className="inline-block font-medium" href={""}>
            Go Back
          </Link>
          <div className="p-6 md:p-12 bg-white rounded-xl">
            <h1 className="heading-md font-bold uppercase mb-10">Checkout</h1>
            <form action="">
              <section className="billing mb-14">
                <h2 className="clr-primary-900 uppercase font-bold mb-4">
                  Billing Detail
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <TextFormField
                    label="Name"
                    fieldFor="name"
                    type="name"
                    placeholder="Alexei Ward"
                  />
                  <TextFormField
                    label="Email"
                    fieldFor="email"
                    type="email"
                    placeholder="alexei@mail.com"
                  />
                  <TextFormField
                    label="Phone Number"
                    fieldFor="phone"
                    type="tel"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </section>
              <section className="shipping mb-14">
                <h2 className="clr-primary-900 uppercase font-bold mb-4">
                  Shipping info
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <TextFormField
                    className="col-start-1 col-end-3"
                    label="Your Address"
                    fieldFor="address"
                    type="text"
                    placeholder="1137 Williams Avenue"
                  />
                  <TextFormField
                    label="ZIP Code"
                    fieldFor="zipcode"
                    type="text"
                    placeholder="1001"
                  />
                  <TextFormField
                    label="City"
                    fieldFor="city"
                    type="text"
                    placeholder="New York"
                  />
                  <TextFormField
                    label="Country"
                    fieldFor="country"
                    type="text"
                    placeholder="United States"
                  />
                </div>
              </section>
              <section className="payment mb-14 ">
                <h2 className="clr-primary-900 uppercase font-bold mb-4">
                  Payment Details
                </h2>
                <h4>Payment Method</h4>
                <div className="space-y-4 mb-8">
                  <RadioTile
                    label="e-Money"
                    name="paymentChoice"
                    fieldFor="eMoney"
                    value="e-Money"
                  />
                  <RadioTile
                    label="Cash on Delivery"
                    name="paymentChoice"
                    fieldFor="cashOnDelivery"
                    value="cashOnDelivery"
                  />
                </div>
                <div className="space-y-4">
                  <TextFormField
                    label="e-Money Number"
                    fieldFor="eMoneyNumber"
                    type="text"
                    placeholder="238521993"
                  />
                  <TextFormField
                    label="e-Money PIN"
                    fieldFor="eMoneyNumber"
                    type="text"
                    placeholder="6891"
                  />
                </div>
              </section>
            </form>
          </div>
          <section className="summary bg-white rounded-lg p-6 lg:p-12 space-y-4">
            <h2 className="heading-md font-bold">Summary</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-lg"
                  src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                  alt="product image"
                  width={64}
                  height={64}
                />
                <div>
                  <span className="block uppercase font-bold">XX99 MK II</span>
                  <span className="" data-currency="$">
                    $2,999
                  </span>
                </div>
              </div>
              <span className="clr-neutral-800">x1</span>
            </div>
            <button className="btn btn-primary w-full">Continue & Pay</button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
