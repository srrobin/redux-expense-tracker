import React, { useEffect } from 'react';
import Loading from '../utils/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getTransAsync } from '../features/transactions/transactionsSlice';
import SingleList from './SingleList';

const ExpenseList = () => {
    const dispatch = useDispatch();
    const {transactions, isLoading, isError, error} = useSelector((state)=> state.trans);
    
    useEffect(() => {
       dispatch(getTransAsync());
    },[dispatch])

    let content;

    if(isLoading) content = <Loading/>
    if(!isLoading && isError) content = <>{error}</>
    if(!isLoading && !isError && transactions.length === 0) content = <> there area some error ...</>
    if(!isLoading && !isError && transactions.length > 0) content = 
    transactions?.map((item) => ( 
     <SingleList key={item.id} item={item}/>
    ));
    return (
        <div className='expense_area'>
            <ul>
               {content}
            </ul>
        </div>
    );
};

export default ExpenseList;