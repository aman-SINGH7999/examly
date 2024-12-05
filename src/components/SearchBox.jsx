import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearchBox({getSearchText}) {
    const [input, setInput] = useState("");
    const clickHandler = () => {
        getSearchText(input);
    }
    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }
  return (
    <>
        <div className="relative w-full rounded-md overflow-hidden border-[1px] border-[#334eaa] flex">
            <div className=''>
                <input
                type="search"
                id="search-dropdown"
                className="block px-3 py-1 w-full text-[#334eaa] bg-gray-50 focus:border-none focus:outline-none"
                placeholder="Search..."
                value={input}
                onChange={onChangeHandler}
                required
                />
            </div>
            <div className='w-[30px] min-w-[30px] flex justify-center items-center text-white bg-[#334eaa] active:bg-[#F18B36]'>
                <button type="submit" className="h-full w-full flex justify-center items-center" onClick={clickHandler}>
                    <IoSearch />
                </button>
            </div>
        </div>
    </>
  )
}
