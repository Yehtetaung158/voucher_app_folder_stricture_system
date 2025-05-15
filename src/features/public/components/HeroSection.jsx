import React from "react";

const HeroSection = () => {
  return (
    <section className="hero bg-white dark:bg-gray-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hello there</h1>
          <p className="py-6">
            MMSIt မှ Laravel ဖြင့် ဖန်တီးထားသော aip ကို react js ဖြင့်ရေးထားသော dashboard ဖြစ်သည်။
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
