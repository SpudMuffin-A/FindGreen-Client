import React from "react";
import ImageLight from "../assets/img/login-findgreen.png";
import OtpForm from "../components/Forms/OtpForm";

function Otp() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-screen"
          src={ImageLight}
          alt="Office"
        />
      </div>
      <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="mb-4 text-3xl font-semibold text-gray-700">
            Enter OTP
          </h1>
          <OtpForm />
        </div>
      </main>
    </div>
  );
}

export default Otp;
