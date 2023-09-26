import DonateCard from "../../components/DonateCard/DonateCard";

const Donation = () => {
    const donated = JSON.parse(localStorage.getItem("donated"))

    return (
        <div className="max-w-6xl mx-auto mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 p-4 lg:p-0">
            {donated?.map(item => <DonateCard key={item.id} donated={item}></DonateCard>)}
        </div>
    );
};

export default Donation;