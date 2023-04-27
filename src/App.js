import './App.css';
import MyComponent from './MyComponent';
import video from './lemon-on-fish.mp4';
import imageSearch from './search.png';
import { useEffect, useState } from 'react';

function App() {

const MY_ID = '0ea5be2b';
const MY_KEY = 'cb3ed48d479d161845e14dd4ec45ee52';

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes]= useState([]);
const [wordSubmitted, setWordSubmitted] = useState('shrimp');

useEffect(()=> {
  getRecipe()
}, [wordSubmitted])

const getRecipe = async () =>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  // console.log(data.hits);
  setMyRecipes(data.hits);
}

const myRecipeSearch = (e) => {
  // console.log(e.target.value)
  setMySearch(e.target.value)

}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
      </div>
      <div className='container'>
        <button>
          <img src={imageSearch} className='icons' alt='food'/>
        </button>
      </div>
      <div className='recipeCards'>
        {myRecipes.map((element,id)=> (
          <MyComponent key={id}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


