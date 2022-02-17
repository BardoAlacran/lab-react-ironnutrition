import React from "react";
import { useState } from "react";
function AddFood ({onAdd}){
    const [food, setFood] = useState({
        name:'',
        calories: 0,
        image: '',
        quantity: 0,
    })
    const handleFood = e => {
        e.persist();    
        setFood(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(food);
        setFood({
            name:'',
        calories: 0,
        image: '',
        quantity: 0,
        })
    }


    
    return(
        <div>
            <h4>Add Food</h4>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                type="text"
                name="name"
                value={food.name}
                onChange={handleFood}
                placeholder="name"

                />
                <label>Calories</label>
                <input 
                type="number"
                name="calories"
                value={food.calories}
                onChange={handleFood}
                placeholder='calories'

                />

                <label>Image</label>
                <input 
                type="text"
                name="image"
                value={food.image}
                onChange={handleFood}
                placeholder='image'

                />

                <label>Quantity</label>
                <input 
                type="number"
                name="quantity"
                value={food.quantity}
                onChange={handleFood}
                placeholder='quantity'

                />
                
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddFood;