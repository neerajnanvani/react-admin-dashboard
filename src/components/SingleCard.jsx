
import {FaArrowUp, FaArrowDown } from "react-icons/fa6";
import PropTypes from 'prop-types'; 

const SingleCard = ({icon:Icon, color, headline, amount, isGain, gainOrLosspercentage, timeline}) => {

    let bgColor = `bg-green-100`;
    let iconColor = `text-green-600`;

    switch(color) {
        case 'red':
            bgColor= "bg-red-100";
            iconColor="text-red-600";
            break;
        case 'purple':
            bgColor= "bg-purple-100";
            iconColor="text-purple-600";
            break;
        case 'blue':
            bgColor= "bg-blue-100";
            iconColor="text-blue-600";
            break;
    }



  return (
    <div className="flex min-h-[160px] bg-white rounded-lg items-center justify-center">
        <div className={`xl:w-[110px] xl:h-[110px] w-[80px] h-[80px] ${bgColor} rounded-full flex justify-center items-center mr-1`}>
           { <Icon className={`xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] ${iconColor}`}/> }
        </div>
        <div>
            <span className="text-sm text-gray-400">
                {headline}
            </span>
            <p className="text-2xl font-bold text-gray-800">
                ${amount}
            </p>
            <p className="flex text-xs">
                <span className={isGain ? 'text-green-600 ' : 'text-red-600 ' + " font-extrabold flex items-center mr-1"}> 
                    {isGain ?
                        <FaArrowUp className="w-3 h-3 mr-1"/> 
                        :
                        <FaArrowDown className="w-3 h-3 mr-1"/> 
                    } 
                    {gainOrLosspercentage}% 
                </span> 
                this {timeline}
            </p>
        </div>
    </div>
  )
}

SingleCard.propTypes = {
    color: PropTypes.string,
    headline: PropTypes.string,
    amount: PropTypes.string,
    isGain: PropTypes.bool,
    gainOrLosspercentage: PropTypes.string,
    timeline: PropTypes.string,
    icon: PropTypes.element,
}

export default SingleCard