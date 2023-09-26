import { useState } from "react";
import "./banner.css"

const Banner = ({handleSearchClick}) => {
    const [value, setValue] = useState("")

    const handleSearchInput = (event) => {
        const inputValue = event.target.value;

        setValue(inputValue)
    }
    

    return (
        <div className="flex flex-col justify-center items-center gap-10 pt-14 banner-bg h-[500px] p-10 md:p-0 w-full">
            <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
            <div className="form-control">
                <div className="input-group items-center">
                    <input onChange={handleSearchInput} type="text" placeholder="Search here…" name="search" id="search-1" className="input w-[250px] md:w-[280px] h-[50px] input-bordered rounded-md border-r-0" />
                    <button onClick={() => handleSearchClick(value)} className="btn border-none bg-[#FF444A] text-white rounded-md py-0 hover:bg-black capitalize font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;