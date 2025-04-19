import Chart from "react-apexcharts";
import AdminMenu from "./AdminMenu";
import OrderList from "./OrderList";

const AdminDashboard = () => {
  // Dữ liệu giả
  const sales = { totalSales: 10000 }; // Tổng doanh thu: $10,000
  const customers = new Array(150).fill({}); // 150 khách hàng
  const orders = { totalOrders: 200 }; // 200 đơn hàng
  const salesDetail = [
    { _id: "2023-01-01", totalSales: 1000 },
    { _id: "2023-01-02", totalSales: 1500 },
    { _id: "2023-01-03", totalSales: 2000 },
    { _id: "2023-01-04", totalSales: 1800 },
    { _id: "2023-01-05", totalSales: 2200 },
  ]; // Doanh thu theo ngày

  // Định dạng dữ liệu cho biểu đồ
  const formattedSalesDate = salesDetail.map((item) => ({
    x: item._id,
    y: item.totalSales,
  }));

  // Trạng thái biểu đồ với dữ liệu giả
  const state = {
    options: {
      chart: {
        type: "bar", // Loại biểu đồ là cột
      },
      tooltip: {
        theme: "dark",
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Sales Trend",
        align: "left",
      },
      grid: {
        borderColor: "#ccc",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: formattedSalesDate.map((item) => item.x), // Ngày
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "Sales",
        },
        min: 0,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
    series: [{ name: "Sales", data: formattedSalesDate.map((item) => item.y) }], // Giá trị doanh thu
  };

  return (
    <>
      <AdminMenu />
      <section className="xl:ml-[4rem] md:ml-[0rem]">
        <div className="w-[80%] flex justify-around flex-wrap">
          {/* Doanh thu */}
          <div className="rounded-lg bg-black p-5 w-[20rem] mt-5">
            <div className="font-bold rounded-full w-[3rem] bg-pink-500 text-center p-3">
              $
            </div>
            <p className="mt-5">Sales</p>
            <h1 className="text-xl font-bold">$ {sales.totalSales.toFixed(2)}</h1>
          </div>

          {/* Khách hàng */}
          <div className="rounded-lg bg-black p-5 w-[20rem] mt-5">
            <div className="font-bold rounded-full w-[3rem] bg-pink-500 text-center p-3">
              $
            </div>
            <p className="mt-5">Customers</p>
            <h1 className="text-xl font-bold">{customers.length}</h1>
          </div>

          {/* Đơn hàng */}
          <div className="rounded-lg bg-black p-5 w-[20rem] mt-5">
            <div className="font-bold rounded-full w-[3rem] bg-pink-500 text-center p-3">
              $
            </div>
            <p className="mt-5">All Orders</p>
            <h1 className="text-xl font-bold">{orders.totalOrders}</h1>
          </div>
        </div>

        {/* Biểu đồ */}
        <div className="ml-[10rem] mt-[4rem]">
          <Chart options={state.options} series={state.series} width="70%" />
        </div>

        {/* Danh sách đơn hàng */}
        <div className="mt-[4rem]">
          <OrderList />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;