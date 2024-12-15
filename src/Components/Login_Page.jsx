import React from "react";
import image from "../assets/image.jpg";
export const Login_Page = () => {
  return (
    <section>
      <div className="w-full h-screen p-10 ">
        <div className="w-full  grid grid-cols-5 h-full   ">
          <div className="col-span-3 relative">
            <img
              src={image}
              alt="Background"
              className="w-full h-full object-cover rounded-r-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center  ">
              <h2 className="text-3xl font-bold mb-2"> </h2>
              <p className="text-lg text-center"></p>
            </div>
          </div>

          <div className="bg-white col-span-2  w-full flex items-center justify-center  ">
            <div className="w-[80%] border-4 transition flex flex-col rounded-2xl duration-1000 items-center justify-center ease-out animate-shadowRotate h-[80%] p-10">
              <div className="w-full px-10 text-center">
                <h2 className="p-3 text-5xl font-bold text-pink-400">
                  عکاسی تمدن
                </h2>
                <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                <h3 className="text-xl font-semibold text-blue-400 ">
                  Sign In!
                </h3>
                <form className="flex  flex-col w-full  items-center mt-5  ">
                  <div className="relative w-full group">
                    <input
                      required
                      type="text"
                      name="name"
                      className="border-2 w-full text-gray-300 px-3 focus:text-[#2bb987] text-lg py-1.5 focus:outline-none bg-white rounded-md focus:bg-white focus:border-[#2bb987] peer"
                    />
                    <span className="absolute right-0 top-2 px-2 text-md uppercase peer-focus:text-[#2bb987] pointer-events-none peer-focus:text-sm peer-focus:-translate-y-5 duration-200  peer-focus:border-[#2bb987]  bg-white  dark:text-gray-100 text-gray-700 peer-valid:text-sm peer-valid:-translate-y-5 mr-4">
                      اسم خودرا بنسوید
                    </span>
                  </div>
                  <div className="relative w-full group mt-5">
                    <input
                      required
                      type="email"
                      name="email"
                      className="border-2 w-full text-gray-300 px-3 focus:text-[#2bb987] text-lg py-1.5 focus:outline-none bg-transparent rounded-md focus:border-[#2bb987] peer"
                    />
                    <span className="absolute right-0 top-2 px-2 text-md uppercase dark:text-gray-100 text-gray-700 peer-focus:text-[#2bb987] pointer-events-none peer-focus:text-sm peer-focus:-translate-y-5 duration-200  peer-focus:border-[#2bb987]  bg-white dark:bg-slate-700 peer-valid:text-sm peer-valid:-translate-y-5 mr-4">
                      ایمیل خود را وارید کنید
                    </span>
                  </div>
                  <div className="flex justify-between gap-10 py-2 items-center">
                    <div className="flex items-center gap-1">
                      <input type="checkbox" name="" id="" />
                      <p className="text-xs text-blue-400">
                        مرا به خاطر بسپارید{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-blue-400">
                        {" "}
                        رمز تان را فراموش کرده اید ؟
                      </p>
                    </div>
                  </div>
                  <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
