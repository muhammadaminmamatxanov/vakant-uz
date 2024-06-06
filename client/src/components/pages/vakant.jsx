import React, { useCallback, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { useTheme } from "../../helpers/dark-mode"

const Vakant = ({ item }) => {
  const [more, setMore] = useState(false);

  const { darkMode } = useTheme();

  const handleMoreDescription = useCallback(() => {
    setMore(more => !more);
  }, [more])

  return (
      <div className={darkMode ? "bg-white shadow-lg rounded-lg h-a p-4" : "bg-slate-900 shadow-lg rounded-lg h-a text-white p-4 border-[1px] border-gray-700"}>
        <p className="text-slate-400">{item.createdAt}</p>
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-start gap-2 my-2 text-cyan-500">
            <h5 className="flex items-center gap-2">
              <FaMapLocationDot />
              {item.location}
            </h5>
            <p className="flex items-center gap-2">
              <FaTelegram /> <span>{item.tgLink}</span>
            </p>
            <p className="flex items-center gap-2">
              <BsFillTelephoneInboundFill /> <span>{item.phoneNumber}</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 my-2 text-cyan-500">
            <h5 className="flex items-center gap-2">
              <FaUsers />
              {item.gender}
            </h5>
            <p className="flex items-center gap-2">
              <IoTimeOutline />
              <span>Ish vaqtlari: {item.workTime} </span>
            </p>
            <p className="flex items-center gap-2">
              <FaPersonWalkingLuggage />
              <span>Yosh chegarasi:{item.age}</span>
            </p>
          </div>
        </div>
        <p className="text-slate-500 my-4">
          Ish haqi: <span className="text-orange-600">"Oylik"</span>{" "}
          <span className="text-sky-600">{item.salt}</span>
        </p>
          {more 
            ? <p className="text-slate-600">
            {item.description}
            <span className="text-cyan-600 cursor-pointer" 
              onClick={handleMoreDescription}>  qisqa</span>
            </p>
            : <p className="text-slate-600">
              {item.description.slice(0, 150)}
              <span className="text-cyan-600 cursor-pointer" 
                onClick={handleMoreDescription}>...Ko'proq</span>
            </p>
          }
        
        <p className="">{item.skills}</p>
      </div>
  );
};

export default Vakant;
