import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './Components/FoodBox';
import AddFood from './Components/AddFood';
import Search from './Components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [todaysFood, setTodaysFood] = useState([]);
  const mappedFood = [...food];


  const handleOnAdd = addedFood => {
    console.log('addedFood:',addedFood)
    setFood([...food, {
      name: addedFood.name,
      calories: addedFood.calories,
      image: addedFood.image,
      quantity: addedFood.quantity
    }])
  }

  const handleOnFilter = (input) => {
    const filteredFood = food.filter(food => food.name.includes(input))
    setFood(filteredFood)
    if (input === ""){
      setFood(foods)
    }
  }

  const handleonAddTodaysFood = (addFood) => {
    console.log('app.jsx addfood:', addFood)
    setTodaysFood([...todaysFood, addFood])
  }

console.log('todaysFood:',todaysFood)
  console.log('app jsx food:',food)
  return (
    <div className="App">
      <AddFood onAdd={handleOnAdd} />
      <Search onFilter={handleOnFilter}/>
      {mappedFood.map((food, index) => {
        return <Foodbox onAdd={handleonAddTodaysFood} key={index}
        name={food.name}
        calories={food.calories}
        image={food.image}
        quantity={food.quantity}
        />
      })}    
      <div>
        {todaysFood.map((tfood, index) => {
          return (
            <aside key={index}>
              <p>{tfood.name}</p>
              <p>{tfood.calories}</p>
            </aside>
          )
        })}
      </div>
    </div>
  );
}

export default App;
