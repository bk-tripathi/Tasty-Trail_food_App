import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealsItem/MealItem";


const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
 useEffect(() => {
  const fetchMeals = async () =>{
    const response = await fetch('https://tastytrail-6524b-default-rtdb.firebaseio.com/meals.json');
    const responseData = await response.json();

    const loadedMeals = [];

    for (const key in responseData){
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }
    setMeals(loadedMeals);
    setIsLoading(false);
  };

  fetchMeals();
 }, [])
  if(isLoading){
    return(
      <section className={classes.MealsLoading}>
        <p>Loading</p>
      </section>
    )
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
