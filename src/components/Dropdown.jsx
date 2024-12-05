import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export default function Dropdown({items, getSelected}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(items?.length>0?items[0]:[]);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (event) =>{
        const value = event.target.getAttribute('value');
        const key = event.target.getAttribute('index');
        setSelected(items[key]);
        getSelected(value);
        setIsOpen(!isOpen);
    }

  return (
    <div className="relative cursor-pointer">
      <div className="flex text-white bg-[#334eaa] hover:bg-[#334eaa] font-medium rounded-md overflow-hidden" onClick={handleClick}>
        <div className="px-3 py-1">
          <button className="flex items-center justify-center h-full" type="button">
            {selected?.label}
          </button>
        </div>
        <div className="">
          <span className="w-[30px] h-full flex items-center justify-center border-l-[1px] border-l-[#dcecff]">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="w-full z-10 absolute top-full right-0 bg-[#334eaa55] backdrop-blur divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            {
                items.map((item, index)=>(
                    <li key={index}>
                        <span className="block px-4 py-2 hover:bg-[#334eaa] hover:text-white" onClick={handleSelect} value={item.value} index={index}>
                            {item.label}
                        </span>
                    </li>
                ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};
