import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register the components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
const Dashboardchart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  // Define the options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sample Line Chart",
      },
    },
  };

  const labels = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];
  const data1 = [
    5, 3, 4, 7, 2, 6, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75,
    80, 85, 90,
  ]; // Sample data

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Customers",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: data1,
      },
    ],
  };

  // Define the options for the chart
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Customers Throughout the Day",
      },
    },
  };

  //--------------circle chart--------------

  const labels3 = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];
  const data3 = [
    5, 3, 4, 7, 2, 6, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75,
    80, 85, 90,
  ]; // Sample data

  // Define the data for the chart
  const chartData1 = {
    labels: labels3,
    datasets: [
      {
        label: "Number of Customers",
        data: data3,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Define the options for the chart
  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Customers Throughout the Day",
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Line data={data} options={options} />
          </div>
          <div className="col-4">
            {" "}
            <Line data={data} options={options} />
          </div>
          <div className="col-4">
            {" "}
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Line data={chartData} options={options2} />
          </div>
          <div className="col-4">
            <Line data={chartData} options={options2} />
          </div>
          <div className="col-4">
            <Line data={chartData} options={options2} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            {" "}
            <Line data={chartData1} options={options3} />
          </div>
          <div className="col-4">
            {" "}
            <Line data={chartData1} options={options3} />
          </div>
          <div className="col-4">
            {" "}
            <Line data={chartData1} options={options3} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboardchart;
