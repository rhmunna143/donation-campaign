import "./banner.css"

const Banner = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-10 pt-14 banner-bg h-[85vh] p-10 md:p-0 w-full">
            <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
            <div className="form-control">
                <div className="input-group items-center">
                    <input type="text" placeholder="Search here…" className="input w-[250px] md:w-[280px] h-[46px] input-bordered rounded-md border-r-0" />
                    <button className="btn bg-[#FF444A] text-white rounded-md py-0 hover:bg-black capitalize font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;