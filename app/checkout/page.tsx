"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RadioTile from "./_components/RadioTile";
import TextFormField from "./_components/TextFormField";
import { useContext } from "react";
import ItemSummary from "./_components/ItemSummary";

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
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
          <div className="lg:flex justify-start items-start gap-4">
            <div className="lg:w-full p-6 md:p-12 bg-white rounded-xl">
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
                  <div className="md:grid grid-cols-2">
                    <h4 className="heading-sm font-bold mb-4">
                      Payment Method
                    </h4>
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
                  </div>
                  <div className="md:grid grid-cols-2 gap-4">
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
            <section
              id="checkoutItems"
              className="lg:w-2/3 summary bg-white rounded-lg p-6 lg:p-12 space-y-4"
            >
              <h2 className="heading-md font-bold">Summary</h2>
              <ul>
                {cartItems.map((item) => (
                  <ItemSummary item={item} />
                ))}
              </ul>
              <button className="btn btn-primary w-full">Continue & Pay</button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
