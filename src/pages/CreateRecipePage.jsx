import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { api } from '../API/api';
import { useRef } from 'react';

function CreateRecipePage() {

    const titleRef = useRef();
    const describtionRef = useRef();
    const cookTimeRef = useRef();
    const derectionRef = useRef();
    const imageURLRef = useRef();

    function submitHandle(e) {
        e.preventDefault();
        const body = {
            title: titleRef.current.value,
            description: describtionRef.current.value,
            cookTime: cookTimeRef.current.value,
            direction: derectionRef.current.value,
            imageURL: imageURLRef.current.value,
        }

        api.PostRecipe(body);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={submitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Title" placeholder="Enter Title" ref={titleRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="Description" placeholder="Enter Description" ref={describtionRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCookTime">
                        <Form.Label>CookTime</Form.Label>
                        <Form.Control type="CookTime" placeholder="Enter CookTime" ref={cookTimeRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDirection">
                        <Form.Label>Direction</Form.Label>
                        <Form.Control type="Direction" placeholder="Enter Direction" ref={derectionRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImageURL">
                        <Form.Label>ImageURL</Form.Label>
                        <Form.Control type="ImageURL" placeholder="Enter ImageURL" ref={imageURLRef}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateRecipePage;