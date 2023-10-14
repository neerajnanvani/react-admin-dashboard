
import { FaMagnifyingGlass } from "react-icons/fa6";

const ProductsTable = () => {

    const randomTableData = [
        {title: "Abstract 3d", subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit", stock: "100", price: "45.1", sales: "40"},
        {title: "Random Ways", subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ", stock: "50", price: "21.2", sales: "10"},
        {title: "Development", subtitle: "ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit", stock: "30", price: "65", sales: "1"},
        {title: "React and tailwind", subtitle: "sit amet consectetur adipisicing", stock: "45", price: "26.5", sales: "32"},
        {title: "Admin Dashboard", subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", stock: "34", price: "50.6", sales: "40"},
        {title: "Css Spscific", subtitle: "ipsum dolor sit amet consectetur adipisicing elit. ", stock: "10", price: "300", sales: "15"},
        {title: "Charts", subtitle: "ipsum dolor sit amet consectetur adip", stock: "40", price: "200", sales: "10"},
    ]
  return (
    <div className="bg-white rounded-xl py-5">
        <div className="md:flex space-y-3 px-5 md:space-y-0">
            <h2 className="font-extrabold text-xl grow">
                Products Sell 
            </h2>
            <div className="ml-auto flex bg-gray-100/50 rounded-md mx-5 text-gray-400 px-2">
                <FaMagnifyingGlass className="self-center" />
                <input className="px-2 p-1 pl-2 focus:outline-none bg-gray-100/50" placeholder="Search" />
            </div>
            <select className="ml-auto self-start bg-gray-100/50 text-sm p-1 rounded-lg text-gray-500 focus:outline-none">
                    <option>
                        Last 30 days
                    </option>
                    <option>
                        Last 12 Months
                    </option>
                    <option>
                        Last 2 years
                    </option>
                </select>
        </div>
        <table className="table-fixed w-full mt-5">
            <thead className="border-b border-gray-200">
                <tr className=" text-gray-500 text-sm ">
                    <td className="md:w-2/3 w-2/5 py-3 pl-5 ">Products Name</td>
                    <td className="text-center">Stock</td>
                    <td className="text-center">Price </td>
                    <td className="pr-5 text-center">Total Sales</td>
                </tr>
            </thead>
            <tbody>
                {randomTableData.map((data, index) => (
                    <tr className="" key={data.title}>
                    <td className="pl-5 py-4">
                        <div className="flex">
                            <img src={`https://source.unsplash.com/random/100x60/?img=${index + 1}`}  className="w-20 h-12 rounded-md md:block hidden"/>
                            <div className="ml-5">
                                <h3 className="font-extrabold text-base">
                                    {data.title}
                                </h3>
                                <span className="text-xs text-gray-300">
                                    {data.subtitle}
                                </span>
                            </div>
                        </div>
                    </td>
                    <td className="text-center">{data.stock} in stock</td>
                    <td className="font-bold text-center">$ {data.price}</td>
                    <td className="pr-5 text-center">{data.sales}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductsTable