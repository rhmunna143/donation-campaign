
import { Pie, PieChart, Cell, Label, LabelList } from "recharts";

const PaiChart = ({ maxLength, length }) => {
    // Calculate the percentage of length and maxLength with one decimal place
    const lengthPercentage = ((length / maxLength) * 100).toFixed(1);
    const maxLengthPercentage = (100 - lengthPercentage).toFixed(1);

    // Data for the Pie Chart
    const data = [
        { name: "Length", value: parseFloat(lengthPercentage) },
        { name: "MaxLength", value: parseFloat(maxLengthPercentage) },
    ];

    // Define custom colors for the Pie segments
    const colors = ["#0088FE", "#FF8042"];

    return (
        <div>
            <PieChart width={750} height={300}>
                <Pie
                    data={data}
                    dataKey="value"
                    cx={150}
                    cy={150}
                    outerRadius={100}
                    fill="#8884d8"
                    labelLine={false} // Disable the label line connecting to the center
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                    <LabelList
                        data={data}
                        position="inside"
                        content={({ value, name }) => `${name}: ${value.toFixed(1)}%`}
                        fill="#FFFFFF"
                        fontSize={16}
                    />
                </Pie>
            </PieChart>
        </div>
    );
};

export default PaiChart;