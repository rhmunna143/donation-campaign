import Chart from "react-google-charts";

export function App() {
    const primaryDonated = JSON.parse(localStorage.getItem("donated")) || [];

    const maxLength = 12;
    const length = primaryDonated?.length;

    // Percentage calculation
    const lengthPercentage = ((length / maxLength) * 100);
    const maxLengthPercentage = (((maxLength - length) / maxLength) * 100);

    // Data for the Pie Chart
    const data = [
        ["Donation", "Donation number"],
        ["Your Donation", lengthPercentage],
        ["Total Donation", maxLengthPercentage],
    ];

    const options = {
        // title: "Donation Statistics",
        legend: "none"
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />

            <div className="flex gap-5 w-fit mx-auto">
                <div className="flex items-center gap-2">
                    <div>Your Donation</div>
                    <div className="w-12 h-2 rounded-sm bg-[#3366cc]">
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div>Total Donation</div>
                    <div className="w-12 h-2 rounded-sm bg-[#dc3912]">
                    </div>
                </div>
            </div>
        </div>
    );
}