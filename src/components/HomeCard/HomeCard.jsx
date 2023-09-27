import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const { category, title, card_bg_color, category_bg_color, text_color, image_link, id } = data;

    return (
        <Link to={`/details/${id}`}>
            <div className="rounded-md max-w-fit  mx-auto flex flex-col justify-center" style={{ backgroundColor: card_bg_color }}>
                <div className="img rounded-t-md">
                    <img className="rounded-t-md h-48" src={image_link} alt="" />
                </div>

                <div className="p-4">
                    <h6 className="max-w-fit p-1 px-2 text-sm font-normal rounded-md capitalize
            " style={{ backgroundColor: category_bg_color, color: text_color }}>{category}</h6>

                    <h5 className="font-semibold my-2" style={{ color: text_color }}>{title}</h5>
                </div>
            </div>
        </Link>
    );
};

export default HomeCard;