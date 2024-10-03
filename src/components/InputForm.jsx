import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTransAsync, editTransAsync } from '../features/transactions/transactionsSlice';

const InputForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        type:"",
        amount:""
    })
  

    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch();
    const {isLoading, isError} = useSelector((state) => state.trans)
    const {editing} = useSelector((state) => state.trans)
    useEffect(() => {
       const {id} = editing || {};
       if(id){
        setEditMode(true);
        setFormData(editing);
       }else{
        setEditMode(false);
        // resetForm();
       }
    },[editing]) 
    const handleChange = (e) => {
      const {name,value} = e.target;
      setFormData({
        ...formData,
        // [name]: value
        [name]: name === "amount" ? parseFloat(value) : value
      })

    }
    const resetForm = () => {
        setFormData({
            name: "",
            type: "",
            amount: ""
        });
    };
    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(addTransAsync(formData)).then(() => {
        resetForm();
    }); 
    }
    const handleUpdate = (e) => {
       const {id} = editing || {}
       e.preventDefault();
       dispatch(editTransAsync({
        id:id,
        data: {
            name:formData.name,
            amount:formData.amount,
            type:formData.type,
        }
       })).then(() => {
        resetForm();
        setEditMode(false);
    });
    }
    const handleCancel = () => {
        setEditMode(false);
    }

    return (
        <div>
            <Form onSubmit={ editMode ? handleUpdate : handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                    Note
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                    type="text" 
                    placeholder="My Salary" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange} 
                    />
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                    Type
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        inline
                        type="radio"
                        variant="secondary"
                        label="Income"
                        name="type"
                        value="income"
                        onChange={handleChange} 
                        checked={formData.type === "income"}
                        />
                        <Form.Check
                        inline
                        type="radio"
                        variant="secondary"
                        label="Expense"
                        name="type"
                        value="expense"
                        onChange={handleChange} 
                        checked={formData.type === "expense"}
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                    Amount
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                    type="number" 
                    placeholder="tk. 3000"
                    name = "amount"
                    value={formData.amount}
                    onChange={handleChange} 
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <div className="d-grid gap-2">
                    <Button disabled={isLoading} variant="secondary" type="submit">  {editMode ? 'Update Transaction' : 'Add Transaction'}</Button>

                    <Button style={{ display: editMode ? 'block': 'none'}}  variant="danger" 
                    type="submit"
                    onClick={handleCancel}
                    > 
                    Cancel
                    </Button>

                    </div>
                </Form.Group>
                {!isLoading && isError && ( 
                    <p style={{color: "red"}}> There was an error occured</p>
                )}
            </Form>
        </div>
    );
};

export default InputForm;