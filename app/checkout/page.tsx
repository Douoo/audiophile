"use client";

import { useCartContext, CartItem } from "@/context/CartContext";
import CheckoutSummaryItems from "./_components/CheckoutSummaryItems";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RadioTile from "./_components/RadioTile";
import TextFormField from "./_components/TextFormField";
import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import CheckoutCompleteModal from "./_components/CheckoutCompleteModal";
import emptyBag from "@/public/assets/shared/mobile/empty_bag.svg";
type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  paymentDetail: eMoney | null;
};

interface eMoney {
  eMoneyNumber: string;
  eMoneyPin: number;
}

let items: CartItem[], totalCost: number;
export default function Checkout() {
  const { cartItems, totalPrice, removeAll, itemCount } = useCartContext();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();
  const watchPaymentMethod = watch("paymentMethod");
  const [isCheckoutComplete, setIsCheckoutComplete] = useState<boolean>(false);

  function handlePaymentSelection(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setValue("paymentMethod", value, { shouldDirty: true });
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsCheckoutComplete(true);
    items = [...cartItems];
    totalCost = totalPrice;
    removeAll();
    reset();
    console.log(items);
    console.log(totalCost);
  };
  return !itemCount && !isCheckoutComplete ? (
    <main className="grid place-items-center text-center max-w-[540px] mx-auto py-24">
      <Image src={emptyBag} alt="Empty cart" />
      <div className="grid place-items-center gap-6 h-full">
        <h1 className="heading-md font-bold">No Items in Your Cart</h1>
        <p>
          It looks like your cart is empty. Browse our collection and find
          something you love! Add items to your cart and come back here to
          proceed with checkout. Don&apos;t miss out on our latest arrivals and
          special offers!
        </p>
        <Link href="/" className="btn btn-primary">
          Start Shopping Now
        </Link>
      </div>
    </main>
  ) : (
    <>
      {isCheckoutComplete && (
        <CheckoutCompleteModal items={items} totalCost={totalCost} />
      )}
      <main className="bg-neutral-300  pb-16">
        <div className="container-custom space-y-8">
          {" "}
          <BackButton />
          <div>
            <form
              className="lg:flex justify-start items-start gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="lg:w-full p-6 md:p-12 bg-white rounded-xl">
                <h1 className="heading-md font-bold uppercase mb-10">
                  Checkout
                </h1>
                <section className="billing mb-14">
                  <h2 className="clr-primary-900 uppercase font-bold mb-4">
                    Billing Detail
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextFormField
                      label="Name"
                      type="text"
                      placeholder="Alexei Ward"
                      {...register("name", {
                        required: "Required",
                      })}
                      error={errors.name?.message as string}
                    />
                    <TextFormField
                      label="Email"
                      type="email"
                      placeholder="alexei@mail.com"
                      {...register("email", {
                        required: "Required",
                      })}
                      error={errors.name?.message as string}
                    />
                    <TextFormField
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 202-555-0136"
                      {...register("phone", {
                        required: "Required",
                      })}
                      error={errors.name?.message as string}
                    />
                  </div>
                </section>
                <section className="shipping mb-14">
                  <h2 className="clr-primary-900 uppercase font-bold mb-4">
                    Shipping info
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TextFormField
                      className="md:col-start-1 md:col-end-3"
                      label="Your Address"
                      type="text"
                      placeholder="1137 Williams Avenue"
                      {...register("address", {
                        required: "Required",
                      })}
                      error={errors.address?.message as string}
                    />
                    <TextFormField
                      label="ZIP Code"
                      type="text"
                      placeholder="1001"
                      {...register("zipCode", {
                        required: "Required",
                      })}
                      error={errors.zipCode?.message as string}
                    />
                    <TextFormField
                      label="City"
                      type="text"
                      placeholder="New York"
                      {...register("city", {
                        required: "Required",
                      })}
                      error={errors.city?.message as string}
                    />
                    <TextFormField
                      label="Country"
                      type="text"
                      placeholder="United States"
                      {...register("country", {
                        required: "Required",
                      })}
                      error={errors.country?.message as string}
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
                        value="eMoney"
                        onChange={handlePaymentSelection}
                        active={watchPaymentMethod == "eMoney"}
                      />
                      <RadioTile
                        label="Cash on Delivery"
                        name="paymentChoice"
                        value="cashOnDelivery"
                        onChange={handlePaymentSelection}
                        active={watchPaymentMethod == "cashOnDelivery"}
                      />
                    </div>
                  </div>
                  {watchPaymentMethod == "cashOnDelivery" && (
                    <div className="flex items-start gap-6">
                      <Image
                        src={"/assets/checkout/icon-cash-on-delivery.svg"}
                        alt={"Cash on delivery"}
                        width={48}
                        height={48}
                      />
                      <p className="clr-neutral-700">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                  {watchPaymentMethod == "eMoney" && (
                    <div className="md:grid grid-cols-2 gap-4">
                      <TextFormField
                        label="e-Money Number"
                        type="text"
                        placeholder="238521993"
                        {...register("paymentDetail.eMoneyNumber", {
                          required: "Required",
                        })}
                        error={errors.paymentDetail?.eMoneyNumber?.message}
                      />
                      <TextFormField
                        label="e-Money PIN"
                        type="text"
                        placeholder="6891"
                        {...register("paymentDetail.eMoneyPin", {
                          required: "Required",
                        })}
                        error={errors.paymentDetail?.eMoneyPin?.message}
                      />
                    </div>
                  )}
                </section>
              </div>
              <section
                id="checkoutItems"
                className="lg:w-2/3 summary bg-white rounded-lg p-6 lg:p-12 space-y-4"
              >
                <h2 className="heading-sm font-bold uppercase">Summary</h2>
                <ul>
                  {cartItems.map((item) => (
                    <CheckoutSummaryItems key={item.id} item={item} />
                  ))}
                </ul>
                <button
                  className="btn btn-primary w-full"
                  disabled={isSubmitting || isCheckoutComplete}
                >
                  {isSubmitting && (
                    <span className="mr-4">
                      <svg
                        className="animate-spin inline-block w-4 h-4 "
                        fill="#ffffff"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>{" "}
                        </g>
                      </svg>
                    </span>
                  )}
                  Continue & Pay
                </button>
              </section>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
