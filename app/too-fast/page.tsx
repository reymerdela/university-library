import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Too many request!S
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Look like you are sending too many request to our server. Please try
        again later.
      </p>
    </main>
  );
};

export default Page;
