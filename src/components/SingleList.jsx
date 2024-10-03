import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTransAsync, editActive } from '../features/transactions/transactionsSlice';
import numberWithCommas from '../utils/numberWithComma';

const SingleList = ({item}) => {
    const {id,name,amount,type} = item || {};
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(editActive(item));
    }
    const handleDelete = () => {
        dispatch(deleteTransAsync(id));
    }
    return (
        <>
                <li className='display_flex'  style={{ backgroundColor: type === 'income' ? '#9ae108' : '#dee2e6' }}> 
                <div className='title'>{name}</div>
                <div className='amount_action display_flex'>
                    <div className='amount'>tk. {numberWithCommas(amount)}</div>
                    <div className='action display_flex'>

                    <Button 
                    variant="success"
                    size="sm"
                    onClick={handleEdit}
                    >
                    Edit
                    </Button>
                    
                    <Button 
                    variant="danger" 
                    size="sm"
                    onClick={handleDelete}
                    >
                    delete
                    </Button>

                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleList;