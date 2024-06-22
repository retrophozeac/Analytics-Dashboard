import { Link } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem,SelectGroup,SelectLabel } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react";

import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import axios from "axios";

function App() {
  const [timespan, setTimespan] = useState("7")
  // const handleTimespanChange = (value:any) => {
  //   setTimespan(value)
  // }
  const [data,setData] = useState({
    totalRevenue: 0,
    revenueChange: 0,
    totalProfit: 0,
    customersChange: 0,
    totalOrders: 0,
    conversionRateChange: 0,
    ProductData: [ 
      {name: 'Fashion accessories', count: 0},
      {name: 'Health and beauty', count: 0},
      {name: 'Electronic accessories', count: 0},
      {name: 'Sports and travel', count: 0},
      {name: 'Food and beverages', count: 0},
      {name: 'Home and lifestyle', count: 0}
    ],
    DateData: [
      {
        id: "Desktop",
        data: [
          {x: '1', y: 0},
{x: '1', y: 0},
{x: '2', y: 0},
{x: '3', y: 0},
{x: '4', y: 0},
{x: '5', y: 0},
{x: '6', y: 0}
        ],
      }
    ],
    CityData: 
    [
      {id: 'Yangon', value: 1},
      {id: 'Naypyitaw', value: 1}, 
      {id: 'Mandalay', value: 1}
    ],
    customerSatisfaction: [
      { date: "2023-01-01", value: 4 },
      { date: "2023-02-01", value: 4.2 },
      { date: "2023-03-01", value: 4.4 },
      { date: "2023-04-01", value: 4.6 },
      { date: "2023-05-01", value: 4.8 },
      { date: "2023-06-01", value: 5 },
    ],
  })
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Make GET request using Axios
  //       console.log("pull")
  //       const response = await axios.get('http://127.0.0.1:8787/7'); // Replace with your actual API endpoint
  //       setData(response.data); // Set response data to state variable
  //       console.log("pull")
  //       // console.log(response.data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
    
  // }, []);
  useEffect(() => {
axios.get(`https://backend.gauravmasand447.workers.dev/${timespan}`)
        .then(response => {
            setData(response.data);
            console.log(timespan);
        })
}, [timespan])
  return (
  <>
  <Router>
    <div className="grid min-h-screen w-full grid-cols-[240px_1fr] overflow-hidden">
      <div className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex h-16 items-center px-6">
          <Link to="#" className="flex items-center gap-2 font-semibold" >
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Acme Analytics</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="grid gap-2 text-sm font-medium">
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                
              >
                <BarChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
               
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col">
        <header className="flex h-16 items-center border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
            <Select value={timespan} onValueChange={setTimespan}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timespan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Timespan</SelectLabel>
                  <SelectItem value="7">Last Week</SelectItem>
                  <SelectItem value="14">Last 2 Weeks</SelectItem>
                  <SelectItem value="30">Last Month</SelectItem>
                  <SelectItem value="100">Full</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Revenue</CardTitle>
                <DollarSignIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${data.totalRevenue.toLocaleString()}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">+15% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Profit</CardTitle>
                <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${data.totalProfit.toLocaleString()}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">+20% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Orders</CardTitle>
                <ShoppingCartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{data.totalOrders}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +16% from last month
                </p>
              </CardContent>
            </Card>

          </div>


          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

            <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Revenue by Product</CardTitle>
                <BarChartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <BarChart data={data.ProductData} className="aspect-[16/9]" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Revenue by Date</CardTitle>
                <LineChartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <LineChart data={data.DateData} className="aspect-[16/9]" />
              </CardContent>
            </Card>

          </div>



          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Top Performing Cities</CardTitle>
                <PieChartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <PieChart data={data.CityData} className="aspect-square" />
              </CardContent>
            </Card>


            {/* <Card>
              <CardHeader className="flex items-center justify-between pb-4">
                <CardTitle className="text-lg font-semibold">Customer Satisfaction</CardTitle>
                <StarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <LineChart data={data.customerSatisfaction} className="aspect-[16/9]" />
              </CardContent>
            </Card> */}
          </div>
        </main>
      </div>
    </div>
        
    </Router>
    </>
  )
}

export default App

function BarChart({ data, ...props }: { data: any; [key: string]: any }) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 60, left: 70 }}
        padding={0.3}
        colors={["#8b5cf6"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: -20
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }: any) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}



function LineChart({ data, ...props }: { data: any; [key: string]: any }) {
  // Check if data is provided and is an array
  if (!Array.isArray(data)) {
    console.error("Data should be an array of series objects.");
    return null;
  }

  // Check if each series has an id and data array
  for (const series of data) {
    if (typeof series.id === "undefined" || !Array.isArray(series.data)) {
      console.error("Each series should have an id and a data array.");
      return null;
    }
  }

  return (
    <div {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          tickRotation: -20
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}


// function LineChart({ data, ...props }: { data: any; [key: string]: any }) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={data}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }



function PieChart({ data, ...props }: { data: any; [key: string]: any }) {
  return (
    <div {...props}>
      <ResponsivePie
        data={data}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb", "#e11d48", "#fbbf24", "#10b981", "#8b5cf6"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LineChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}




// function PercentIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="19" x2="5" y1="5" y2="19" />
//       <circle cx="6.5" cy="6.5" r="2.5" />
//       <circle cx="17.5" cy="17.5" r="2.5" />
//     </svg>
//   )
// }

function PieChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}




// function StarIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   )
// }


function BarChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function DollarSignIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function Package2Icon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
function SettingsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingCartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}