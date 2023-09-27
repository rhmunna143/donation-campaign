/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DonateCard = ({ donated }) => {
    const { category, title, card_bg_color, category_bg_color, text_color, image_link, id, price } = donated;
    const fixedPrice = price.toFixed(2)

    return (
        <div className="rounded-md flex gap-2" style={{ backgroundColor: card_bg_color }}>
            <div className="img">
                <img className="w-[220px] h-[200px]" src={image_link} alt="" />
            </div>

            <div className="p-4 flex flex-col justify-center lg:gap-1">
                <h6 className="max-w-fit p-1 px-2 text-sm font-normal rounded-md capitalize
            " style={{ backgroundColor: category_bg_color, color: text_color }}>{category}</h6>

                <h5 className="font-semibold text-xl my-2">{title}</h5>

                <p className="font-semibold" style={{ color: text_color }}>${fixedPrice}</p>

                <Link to={`/details/${id}`}>
                    <button className="mt-1 py-1 px-4 font-semibold rounded-md" style={{backgroundColor: text_color, color: "#FFFF"}}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default DonateCard;