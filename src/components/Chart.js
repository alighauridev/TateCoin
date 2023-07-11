import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
    datasets: [
        {
            label: "# of Votes",
            data: [45, 15, 15, 25],
            backgroundColor: [
                "#FFD700", // Golden color
                "#f9778a",
                "#6f50fd",
                "#f3d667",
            ],
            borderWidth: 0,
        },
    ],
};

function Chart({ clasS }) {
    const options = {
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "#FFFFFF", // White color for labels
                    font: {
                        weight: "bold",
                    },
                },
            },
        },
    };

    return <Doughnut className={clasS} data={data} options={options} />;
}

export default Chart;
