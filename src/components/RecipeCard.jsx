import Card from 'react-bootstrap/Card';
import { useNavigate  } from "react-router-dom";

function RecipeCard(props) {
    const navigate = useNavigate();

    console.log(props)
    return (
        <Card style={{ width: '18rem' }} onClick={() => {navigate(`/recipePage/${props.recipeId}`)}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;