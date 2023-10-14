import SingleCard from "./SingleCard"

import {FaSackDollar, FaBook } from "react-icons/fa6";

const CardGroup = () => {

  // All Cards properties
    const allCardsProperties = [
        {icon: FaSackDollar, color: "green", headline:"Earnings", amount: "123", isGain:true, gainOrLosspercentage: "45", timeline: "month" },
        {icon: FaBook, color: "purple", headline:"Orders", amount: "2.4", isGain:false, gainOrLosspercentage: "2", timeline: "month" },
        {icon: FaSackDollar, color: "blue", headline:"Balance", amount: "13", isGain:false, gainOrLosspercentage: "4", timeline: "month" },
        {icon: FaSackDollar, color: "red", headline:"Total Sales", amount: "12", isGain:true, gainOrLosspercentage: "5", timeline: "weekly" }
    ]

  return (
    <div className="my-10 grid lg:grid-cols-4 sm:grid-cols-2  lg:gap-10 gap-7">
        {allCardsProperties.map((card) => (
            <SingleCard key={card.headline} {...card}/>
        )) }
    </div>
  )
}

export default CardGroup