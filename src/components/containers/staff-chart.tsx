"use client";
import numeral from "numeral";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "react-google-charts";

export const data = [
    ["Staff Type", "Number of Staff"],
    ["Doctors", 50],
    ["Nurses", 100],
    ["IT Operators", 15],
    ["Pharmacists", 10],
    ["Administrators", 4],
];

export const options = {
    // title: "Staff Distribution",
    colors: ["#4CAF50", "#34eb4f", "#94f2a1", "#08851a", "#04c920"],
};

export default function StaffChart() {


    return (
        <article className="border rounded-lg min-h-[300px] shadow p-8">
            <h3 className="text-xl">
                Staff Distribution
            </h3>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"500px"}
            />
        </article>
    );
}