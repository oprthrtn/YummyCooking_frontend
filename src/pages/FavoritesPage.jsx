import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { getFavoritesRecipesThunkCreator } from '../store/reducer';
import { connect } from 'react-redux';
import RecipeCard from '../components/RecipeCard';

function FavoritesPage(props) {
    useEffect(() => {
        props.getFavoritesRecipesThunkCreator();
    }, [])

    return (
        <Container className="d-flex gap-4 flex-wrap">

            {props.state.recipes.map(recipe => {
                return (
                    <RecipeCard recipe={recipe} />
                )
            })}

        </Container>
    )
}

function mapStateToProps(state) {
    return { state: state.page }
}

const mapDispatchToProps = {
    getFavoritesRecipesThunkCreator
}

const FavoritesPageContainer = connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
export default FavoritesPageContainer;