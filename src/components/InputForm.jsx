import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const InputForm = () => {
    return (
        <div>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="My Salary" />
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                    Type
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        variant="secondary"
                        label="Income"
                        name="formHorizontalRadios"
                        />
                        <Form.Check
                        type="radio"
                        variant="secondary"
                        label="Expense"
                        name="formHorizontalRadios"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                    Amount
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="tk. 3000" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <div className="d-grid gap-2">
                    <Button variant="secondary" type="submit">Sign in</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
};

export default InputForm;