import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { convertTo12Hour } from "../utils/dateUtils";

export default function TemperatureChart({ hourlyData, time }) {

    const chartData = time.slice(0, 24).map((time, index) => ({
        hour: new Date(time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }),
        Temperature: hourlyData[index]
    }));


    return (
        <ResponsiveContainer width="100%" height="300">
            <LineChart data={chartData}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Temperature" />
            </LineChart>
        </ResponsiveContainer>
    )
}