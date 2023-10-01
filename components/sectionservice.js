import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaEnvira className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">معماری خیره‌کننده</p>
        <p className="text-gray-600">
        بیتارک، جایی که نوآوری با زیبایی همراه می‌شود. طراحی‌های ما فضاها را بازتعریف می‌کنند و محیط‌هایی جذاب ایجاد می‌کنند که الهام بخش هستند.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCodepen className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">تخصص و دقت در اجرا</p>
        <p className="text-gray-600">
        ما به هنر دقت اعتقاد داریم. هر پروژه شاهکار ما تضمین کننده تعهد ما به تخصص و دقت است، جایی که هر جزئیات یک داستان را تعریف می‌کند.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <AiOutlineSolution className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">راه‌حل‌های پایدار</p>
        <p className="text-gray-600">
        ما به معماری پایدار اختصاص داده‌ایم و ساختمان‌هایی طراحی می‌کنیم که به مسئولیت‌پذیری محیطی، کارآیی انرژی‌ای و زیبایی میانجی می‌کنند.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <RiUserFollowLine className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">رویکرد مشتری‌محور</p>
        <p className="text-gray-600">
        چشم‌انداز شما روند طراحی ما را مشترک می‌کند. ما به نزدیکی همکاری با شما برای تبدیل رویاهایتان به شگفتی‌های معماری اعتقاد داریم.
        </p>
      </div>
    </div>
  );
};
export default Service;
