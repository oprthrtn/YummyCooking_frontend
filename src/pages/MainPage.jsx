import Container from 'react-bootstrap/Container';
import RecipeCard from '../components/RecipeCard';

function MainPage() {
    return (
        <Container className="d-flex gap-4 flex-wrap">
            <RecipeCard/>
        </Container>
    )
}

export default MainPage;