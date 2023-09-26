import { useEffect, useState } from "react";
import DonateCard from "../../components/DonateCard/DonateCard";

const Donation = () => {
    const primaryDonated = JSON.parse(localStorage.getItem("donated"));
    const [isShowAll, setIsShowAll] = useState(false);
    const [donated, setDonated] = useState([]);
    const hiddenClass = isShowAll && "hidden";


    useEffect(() => {
        const sliced = primaryDonated.slice(0, 4);
        setDonated(sliced);
    }, []);

    const handleShowAll = () => {
        const length = primaryDonated.length;
        setIsShowAll(true);

        if (length > 4) {
            setDonated(primaryDonated);
        }
    };

    return (
        <section className="max-w-6xl mx-auto mt-5 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 lg:p-0">
                {donated.map((item) => (
                    <DonateCard key={item.id} donated={item} />
                ))}
            </div>

            <div className="mt-8 text-center">
                {!isShowAll ? (
                    <button
                        onClick={handleShowAll}
                        className="bg-green-700 text-white py-1 px-4 rounded-md hover:bg-black"
                    >
                        See All
                    </button>
                ) : ""}
            </div>
        </section>
    );
};

export default Donation;