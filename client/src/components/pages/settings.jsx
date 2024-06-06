import { useTheme } from "./../../helpers/dark-mode"
import { FaUserEdit } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button, Input, Typography } from "@material-tailwind/react";
import { SettingsImage } from "../../assets";

const Settings = () => {

  const { darkMode } = useTheme(); 

  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[70vh]">
      <div className={darkMode 
        ? "bg-white col-span-2 row-span-3 shadow-md rounded-md p-4" 
        : "bg-transparent col-span-2 row-span-3 border-[1px] p-4 border-gray-800 rounded-md text-gray-200"}
      >

        <h2 className="text-2xl font-semibold">Xush kelibsiz <span className="text-sky-500">Muhammadamin!</span></h2>
        <p className="my-4">Bu sahifada siz shaxsiy ma'lumotlaringizni o'rgartirish imkoniyatiga egasiz</p>
        <div className="flex items-center justify-start gap-4 mt-2">
          <FaUserEdit className="text-sky-500 text-xl"/>
          <p className="text-[14px]">Mamatxanov Muhammadamin</p>
        </div>
        
        <div className="flex items-center justify-start gap-4 mt-2">
          <FaMapLocationDot className="text-sky-500 text-xl"/>
          <p className="text-[14px]">Namangan, Chorsu</p>
        </div>
        <div className="flex items-center justify-start gap-4 mt-2">
          <MdEmail className="text-sky-500 text-xl"/>
          <p className="text-[14px]">example@gmail.com</p>
        </div>
        </div>
      <div className={darkMode 
        ? "bg-white col-span-3 row-span-6 flex items-center shadow-md rounded-md p-8" 
        : "bg-transparent col-span-3 row-span-6 flex items-center border-[1px] border-gray-800 rounded-md p-8 text-gray-200"}
        >
          <form className="mt-8 mb-4 w-80 h-full max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h3">Ma'lumotlaringizni o'zgatiring</Typography>
            <Typography variant="h6" className="-mb-3">
              Ism Familyangiz
            </Typography>
            <Input
              size="lg"
              placeholder="F.I.O"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-200 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" className="-mb-3">
              Manzilingiz
            </Typography>
            <Input
              size="lg"
              placeholder="Uzbekistan, Toshkent"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6"  className="-mb-3">
              Pochta manzilingiz
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button className="rounded-full w-40 bg-sky-500" loading={false}>
                Save
            </Button>
             </div> 
          </form>
          <div>
            <img src={SettingsImage} alt="settings image" className="w-full h-full object-cover"/>
          </div>

      </div>
    </div>
  )
}

export default Settings