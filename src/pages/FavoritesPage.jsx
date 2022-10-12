import Container from 'react-bootstrap/Container';
import RecipeCard from '../components/RecipeCard';

function FavoritesPage() {
    return (
        <Container className="d-flex gap-4 flex-wrap">
            <RecipeCard recipeId='4'/>
        </Container>
    )
}

export default FavoritesPage;