// src/App.js

import React from "react";
import PropTypes from "prop-types"

function Food({name, picture, rating }) {
  return (
    <div>
      <h2> I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
  
}

const foodILike =[
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  { 
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Doncasu',
     image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
     rating: 4.7,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 4.6,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;

}

function App() {
 console.log(foodILike.map(renderFood));
    return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))}
    </div>
  );
}
Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

 

export default App;
