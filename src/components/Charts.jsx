import { useState } from 'react'
import Chart from 'react-apexcharts'

const Charts = () => {

    // bar graph static data
    const barGraphData = [
        {month: "Jan", height: "1"},
        {month: "Feb", height: "3"},
        {month: "Mar", height: "4"},
        {month: "Apr", height: "2"},
        {month: "May", height: "5"},
        {month: "Jun", height: "1"},
        {month: "Jul", height: "3"},
        {month: "Aug", height: "1"},
        {month: "Sep", height: "4"},
        {month: "Oct", height: "2"},
        {month: "Nov", height: "4"},
        {month: "Dec", height: "3"},
    ]

    // state for current month in chart
    const [currentMonth, setCurrentMonth] = useState(barGraphData[0].month);

  return (
    <div className="lg:flex lg:h-[400px] w-full lg:space-x-6 space-y-6 lg:space-y-0 my-5">
        <div className="lg:w-2/3 w-full lg:h-full h-[400px] bg-white rounded-xl p-5">
            <div className="flex h-1/5">
                <div>
                    <h2 className="font-extrabold text-xl">
                        Overview
                    </h2>
                    <h6 className="text-sm text-gray-500">
                        Monthly Earning
                    </h6>
                </div>
                <select className="ml-auto self-start bg-gray-100/50 text-sm p-1 rounded-lg text-gray-500 focus:outline-none">
                    <option>
                        Quaterly
                    </option>
                    <option>
                        Monthly
                    </option>
                    <option>
                        Weekly
                    </option>
                </select>
            </div>
            {/* Graph */}
            <div className="h-4/5 flex md:space-x-3 space-x-2 overflow-x-scroll sm:overflow-hidden">
                {barGraphData.map((data) => (
                    <div key={data.month} className="flex h-full items-center flex-col w-1/12">
                        <button className={(currentMonth === data.month ? 'bg-blue-600 ': 'bg-blue-200 ') +  `h-${data.height}/5 w-full mt-auto py-3 my-3 rounded-xl`} 
                            onClick={() => (setCurrentMonth(data.month))}
                        />
                        <div>{data.month}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-white lg:w-1/3 w-full lg:h-full h-[400px] p-5 rounded-xl overflow-hidden">
            <h2 className='font-extrabold text-xl'>
                Customers
            </h2>
            <h6 className='text-sm text-gray-500'>
                Customers that buy products
            </h6>
            {/* Chart */}
            <Chart 
                options={{}} 
                series={ [44, 55, 41, 17, 15]} 
                type="donut" width="340"
            />
        </div>
    </div>
  )
}

export default Charts