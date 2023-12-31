import { Navs } from "./Navs";
import { Myfooter } from "./footer";
import './custom.css'
export const CommingSoon = () => {


  return (
    <>
      <Navs />

        <div className="container mx-auto flex flex-col items-center justify-center h-screen">

            <div className="loader"></div>
            <p className="text-3xl mt-4 font-semibold text-gray-800">Coming Soon</p>
            <p className="text-gray-600">We're working on something awesome for you. Stay tuned!</p>
        </div>
      <Myfooter />
    </>
  );
};
