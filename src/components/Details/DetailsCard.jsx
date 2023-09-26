import "./details.css"

const DetailsCard = ({ detailsCard }) => {
    const { title, text_color, image_link, id, description, price, card_bg_color } = detailsCard;

    const handleDonate = () => {
        const storedCard = JSON.parse(localStorage.getItem("donated")) || [];

        const isExist = storedCard.find(card => id == card.id);

        if (isExist) {
            alert("Already exists");
            return;
        }

        storedCard.push(detailsCard);
        localStorage.setItem("donated", JSON.stringify(storedCard));
    }  



    return (
        <div>
            <div className="img-container">
                <div className="img relative">
                    <img className="w-full" src={image_link} alt="" />

                    <div className="donate-bg w-full p-5 absolute bottom-[1px]">
                        <button onClick={handleDonate} style={{ backgroundColor: text_color, color: card_bg_color }} className="btn border-none capitalize hover:bg-sky-700 hover:text-black">Donate ${price}</button>
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