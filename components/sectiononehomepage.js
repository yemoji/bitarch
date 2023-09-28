import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/5.jpg";
import Image2 from "../public/6.jpg";
import Image3 from "../public/7.jpg";
import Image4 from "../public/8.jpg";
import Image5 from "../public/9.jpg";
const Contents = () => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image src={Image1} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        {/* <p className="text-3xl font-light text-gray-600">
        من فکر نمی‌کنم که معماری فقط سرپناه باشد، یا این که در مورد یک محوطه بسیار ساده باشد. باید بتواند شما را هیجان زده کند، آرامتان کند، شما را به فکر وادار کند.
        </p>
        <p className="text-xl text-gray-500">زاحا حدید</p> */}
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">
          درباره‌ی گروه طراحی معماری بیتارچ
          </p>
          <p className="text-xl font-light text-gray-500">
          بیتا زارع، فارغ التحصیل فوق لیسانس معماری از دانشکده معماری دانشگاه شهید بهشتی، در سال 1393 گروه معماری کارند را تاسیس کرد. حاصل این دوره فعالیت، طراحی پروژه های معماری با کاربری‌های مختلف در مقیاسهای کوچک و بزرگ و کسب جوایز متعدد داخلی و خارجی بوده است. این گروه امیدوار است از طریق مطالعه و بررسی معماری گذشته ایران و تاکید بر معماری زمین مدار و مرتبط با مکان، به بیانی معاصر برای معماری خود دست یابد.
          </p>
          <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            درباره ما
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Image src={Image3} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image4} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image5} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
