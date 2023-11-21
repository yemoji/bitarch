import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
// import Logo from "../public/logo.png";
const footer = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-16">
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2 pr-2">
                <p className="text-gray-500">آدرس</p>
                <p className="text-gray-600 font-medium">
                  تهران ولنجک، خیابان ولنجک، ساختمان هوما
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2 pr-2 pr-2">
                <p className="text-gray-500">شماره تماس</p>
                <p className="text-gray-600 font-medium">
                <a href="tel:+982126805093">۰۲۱-۲۶۸۰۵۰۹۳</a> - <a href="tel:+982126805504">۰۲۱-۲۶۸۰۵۵۰۴</a>
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2 pr-2">
                <p className="text-gray-500">ساعات کاری</p>
                <p className="text-gray-600 font-medium">
                  شنبه تا پنج‌شنبه - از ساعت ۹:۰۰ الی ۱۶:۰۰
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-500">
                DriverUP has provided car services in Oakland area since 2005.
                What started as a small company has grown into a premier
                limousine and private transportation company.
              </p>
            </div> */}
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">خدمات ما</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleLeft className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">طراحی داخلی</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleLeft className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">طراحی دکوراسیون</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleLeft className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">طراحی نما</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleLeft className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">طراحی نقشه</p>
                </div>
                {/* <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Nationwide Transportation</p>
                </div> */}
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">بیتا آرک</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500 pr-2">
                  تهران ولنجک، خیابان ولنجک، ساختمان هوما
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500 pr-2"><a href="tel:+982126805093">۰۲۱-۲۶۸۰۵۰۹۳</a></p>
                </div>
                {/* <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(0481) 123 987 2412</p>
                </div> */}
                {/* <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> contact@autoride.com</p>
                </div> */}
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500 pr-2">شنبه تا پنج‌شنبه - از ساعت ۹:۰۰ الی ۱۶:۰۰</p>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="py-8 container mx-auto flex flex-row justify-between">
        <p className="mx-6 text-gray-500">کلیه حقوق مادی و معنوی این سایت متعلق به بیتا آرک است.</p>
        <div className="mx-6 flex flex-row">
          <FaFacebook className="w-5 h-5 mx-2 text-gray-500" />
          <FaInstagram className="w-5 h-5 mx-2 text-gray-500" />
          <FaWhatsapp className="w-5 h-5 mx-2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default footer;
