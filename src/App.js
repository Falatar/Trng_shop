import React from 'react';
import './App.css';
import './styles/style.css';
import Product from './components/Product'
import SortMenu from './components/SortMenu'
import Topper from './components/Topper'

function App() {

  let prod1 = {
    name: "автомобиль",
    description: "Описание...",
    price: "10000",
    tag: "Техника",
    imgUrl: 0
  };

  let prod2 = {
    name: "диван",
    description: "Описание...",
    price: "518",
    tag: "Мебель",
    imgUrl: 0
  };

  let prod3 = {
    name: "кавролин",
    description: "Описание...",
    price: "267",
    tag: "Материалы",
    imgUrl: 0
  };

  return (
    <div className="App">
      <Topper></Topper>
      <div className="workSpace">
        <SortMenu></SortMenu>
        <div id="content">
          <button type="button">Back</button>
          <Product product = {prod1}></Product>
          <Product product = {prod2}></Product>
          <Product product = {prod3}></Product>
          <button type="button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
