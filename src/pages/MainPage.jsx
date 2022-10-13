import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import {getRecipesThunkCreator} from '../store/reducer';

function MainPage(props) {

    useEffect(() => {
        props.getRecipesThunkCreator();
    }, [])

    return (
        <Container className="d-flex gap-4 flex-wrap">

            {props.state.recipes.map(recipe => {
                return(
                    <RecipeCard recipe={recipe}/>
                )
            })}
            
        </Container>
    )
}

function mapStateToProps(state) {
    return { state: state.page }
}

const mapDispatchToProps = {
    getRecipesThunkCreator
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default MainPageContainer;
