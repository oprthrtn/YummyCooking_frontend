import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function CreateRecipePage() {
    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Title" placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="Description" placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCookTime">
                        <Form.Label>CookTime</Form.Label>
                        <Form.Control type="CookTime" placeholder="Enter CookTime" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDirection">
                        <Form.Label>Direction</Form.Label>
                        <Form.Control type="Direction" placeholder="Enter Direction" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImageURL">
                        <Form.Label>ImageURL</Form.Label>
                        <Form.Control type="ImageURL" placeholder="Enter ImageURL" />
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