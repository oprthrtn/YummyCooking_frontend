import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { api } from '../API/api';
import { useRef } from 'react';

function AuthPage() {
    const passRef = useRef();
    const usernameRef = useRef();

    function submitHandle(e) {
        e.preventDefault();
        api.Auth(usernameRef.current.value, passRef.current.value);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={submitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" ref={usernameRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passRef} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AuthPage;