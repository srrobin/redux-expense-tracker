import React from 'react';
import { Button } from 'react-bootstrap';

const ExpenseList = () => {
    return (
        <div className='expense_area'>
            <ul>
                <li className='display_flex'> 
                    <div className='title'>earned this month</div>
                    <div className='amount_action display_flex'>
                        <div className='amount'>tk. 1000</div>
                        <div className='action display_flex'>
                        <Button variant="success" size="sm">
                        Edit
                        </Button>
                        <Button variant="danger" size="sm">
                        delete
                        </Button>
                        </div>
                    </div>
                </li>
                <li className='display_flex'> 
                    <div className='title'>earned this month</div>
                    <div className='amount_action display_flex'>
                        <div className='amount'>tk. 1000</div>
                        <div className='action display_flex'>
                        <Button variant="success" size="sm">
                        Edit
                        </Button>
                        <Button variant="danger" size="sm">
                        delete
                        </Button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ExpenseList;