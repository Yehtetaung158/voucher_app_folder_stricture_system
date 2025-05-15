import React from "react";

const HeroSection = () => {
  return (
    <section className="hero bg-white dark:bg-gray-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-gray-800 max-sm:text-2xl dark:text-white">
            Voucher app Dashboard
          </h1>
          <p className="py-6">
            MMSIt မှ Laravel ဖြင့် ဖန်တီးထားသော aip ကို react js ဖြင့်ရေးထားသော
            dashboard ဖြစ်သည်။
          </p>
          <p>
            <span>Email - admin@gmail.com</span>/{" "}
            <span>Password - asdffdsa</span> ဖြင့် login ဝင်ပါ။
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
