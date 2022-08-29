import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from "./examples/chapter5/Menu";
import "./examples/chapter5/menu.css"
import StarRating from "./examples/chapter6/StarRating";
import ColorApp from "./examples/chapter6/ColorApp";
import Forms from "./examples/chapter6/Forms";
const data = [
    {
        name: "Baked Salmon",
        ingredients: [
            { name: "Salmon", amount: 1, measurement: "l lb" },
            { name: "Pine Nuts", amount: 1, measurement: "cup" },
            { name: "Butter Lettuce", amount: 2, measurement: "cups" },
            { name: "Yellow Squash", amount: 1, measurement: "med" },
            { name: "Olive Oil", amount: 0.5, measurement: "cup" },
            { name: "Garlic", amount: 3, measurement: "cloves" },
        ],
        steps: [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
        ],
    },
    {
        name: "Fish Tacos",
        ingredients: [
            { name: "Whitefish", amount: 1, measurement: "l lb" },
            { name: "Cheese", amount: 1, measurement: "cup" },
            { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
            { name: "Tomatoes", amount: 2, measurement: "large" },
            { name: "Tortillas", amount: 3, measurement: "med" },
        ],
        steps: [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese",
        ],
    },
];
// <Menu recipes={data}/>
ReactDOM.render(
  <React.StrictMode>
      <Forms/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
