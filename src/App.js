import './App.css';
import { api } from './API/api';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    async function getRecipes() {
      const recipes = await api.GetRecipes();
      console.log(recipes);
    }

    getRecipes();
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
