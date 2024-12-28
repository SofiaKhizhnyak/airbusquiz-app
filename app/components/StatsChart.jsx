"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

function StatsChart({ progressData }) {
  // Custom dot according to the score
  const renderCustomDot = (props) => {
    const { cx, cy, value } = props; // cx and cy are dot coordinates. value is the score
    let fillColor = "#3bc942"; // Default color is green

    if (value < 50) fillColor = "red";
    else if (value < 75) fillColor = "orange";

    // Render the dot with the custom color based on the score, with no border around the dot and a radius of 3 px
    return <circle cx={cx} cy={cy} r={3} fill={fillColor} stroke="none" />;
  };
  const formatDate = (timestamp) => {
    if (!timestamp) return "Invalid Date";

    let date;

    if (timestamp.toDate) {
      date = timestamp.toDate(); // Firestore Timestamp
    } else if (typeof timestamp === "string" || typeof timestamp === "number") {
      date = new Date(timestamp); // Handle ISO strings or milliseconds
    } else if (timestamp instanceof Date) {
      date = timestamp; // Already a Date object
    } else {
      return "Invalid Date";
    }

    // Format date to "DD-MM"
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based

    return `${day}-${month}`;
  };

  return (
    <div className="bg-slate-100/20 shadow flex w-full flex-col gap-3 rounded-[5px] p-2 text-slate-900 ">
      <div className="w-full h-[200px] lg:h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={progressData}
            margin={{ top: 5, left: 0, right: 5, bottom: 0 }}
          >
            {/* Line for Progress */}
            <Line
              type="monotone"
              dataKey="progress" // Bind to the `progress` field in data
              stroke="#231b42"
              strokeWidth={0.2}
              dot={renderCustomDot}
            />

            {/* X Axis for Date */}
            <XAxis
              dataKey="timestamp"
              tickFormatter={formatDate}
              tickLine={false}
              axisLine={true}
              stroke="#1d1c27"
              fontSize={10}
              padding={{ left: 5, right: 5 }}
            />

            {/* Y Axis for Progress */}
            <YAxis
              tickLine={false}
              axisLine={true}
              stroke="#1d1c27"
              fontSize={10}
              padding={{ top: 5, bottom: 5 }}
            />

            {/* Grid */}
            {/*  <CartesianGrid strokeDasharray="3 3" className="opacity-50" /> */}

            {/* Tooltip */}
            {/* <Tooltip
              formatter={(value) => [`${value}%`, "Progress"]}
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StatsChart;
