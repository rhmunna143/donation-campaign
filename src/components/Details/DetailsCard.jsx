/* eslint-disable react/prop-types */
import swal from "sweetalert";
import "./details.css"

const DetailsCard = ({ detailsCard }) => {
    const { title, text_color, image_link, id, description, price } = detailsCard;

    const handleDonate = () => {
        const storedCard = JSON.parse(localStorage.getItem("donated")) || [];

        const isExist = storedCard.find(card => id == card.id);

        if (isExist) {
            swal("Try Another.", "You have already donated in this campaign.", "error");
            return;
        }

        storedCard.push(detailsCard);
        localStorage.setItem("donated", JSON.stringify(storedCard));
        swal("Thank You.", "You have donated Successfully.", "success");
    }  



    return (
        <div>
            <div className="img-container">
                <div className="img relative">
                    <img className="w-full" src={image_link} alt="" />

                    <div className="donate-bg w-full p-5 absolute bottom-[1px]">
                        <button onClick={handleDonate} style={{ backgroundColor: text_color, color: "white" }} className="hover:bg-black btn border-none capitalize">Donate ${price}</button>
                    </div>
                </div>

                <div className="text-desc">
                    <h2 className="my-10 text-4xl font-bold">{title}</h2>

                    <p>{description}</p>
                </div>
            </div>
        </div >
    );
};

export default DetailsCard;