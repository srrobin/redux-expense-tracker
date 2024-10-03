import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../utils/numberWithComma';

const Blance = () => {
    const {transactions} = useSelector(state => state.trans)
    const calculate = (transactions) => {
         let income = 0;
         transactions.forEach(trans => {
            const {type,amount} = trans;
            if(type === "income"){
                 income +=amount;
            }else{
                income -= amount
            }
         });
         return income;
    }
    return (
        <div className='balance_area'>
            <h5>  current blance </h5>
            {transactions.length > 0 ? 
            <div className='balance'> tk. {numberWithCommas(calculate(transactions))}</div> : 
            <div className='balance'> tk.00</div>
            }
        </div>
    );
};

export default Blance;