import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function RecipeCard(props) {
    const navigate = useNavigate();
    const recipe = props.recipe;

    return (
        <Card style={{ width: '18rem' }} onClick={() => { navigate(`/recipePage/${recipe.ID}`) }}>
            <Card.Img variant="top" src={recipe.ImageURL} />
            <Card.Body>
                <Card.Title>{recipe.Title}</Card.Title>
                <Card.Text>
                    {recipe.Description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;