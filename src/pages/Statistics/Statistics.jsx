import PaiChart from "../../components/PiChart/PiChart";



const Statistics = () => {
    const maxLength = 12;

    const primaryDonated = JSON.parse(localStorage.getItem("donated"));
    const length = primaryDonated.length;



    return (
        <div className="max-w-6xl mx-auto">
            <PaiChart maxLength={maxLength} length={length}></PaiChart>
        </div>
    );
};

export default Statistics;