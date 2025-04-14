import React, {useState} from "react";  

const exampleFoods = [
  {id:1, name: '된장찌개'},
  {id:2, name: '김치찜'}
];

function FoodList() {

  const [Foods, setFoods] = useState(exampleFoods);

  return (
    <div>
      <h2> 음식목록 </h2>

      <ul>
        {Foods.map(food => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default FoodList;