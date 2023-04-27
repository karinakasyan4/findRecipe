function MyComponent ({label, image, calories,ingredients,totalNutrients}){
    return(<div className="card">
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container-recipe">
            <img src={image} alt='eat' className="tasty"/>
            <ul className="list">
                {ingredients.map((ingredient, id) => (
                    <li key={id}>{ingredient}</li>
                ))
                }
            </ul>
            <div className="container">
                <p>{calories.toFixed()}calories</p>
                
            </div>
        </div>
    </div>
    )
}

export default MyComponent;