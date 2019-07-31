import React, {Component} from "react"
import Choise from "./Choise"

class SortMenu extends Component {

    
    render() {
        return (
            <div className="SortMenu">
                <h1>Поиск по названию</h1>
                <input></input>
                <button type="button" id="startSearch">Искать</button>
                <h1>Поиск по тегу</h1>
                <Choise name = "Техника"></Choise>
                <Choise name = "Аксессуары"></Choise>
                <Choise name = "Материалы"></Choise>
                <Choise name = "Мебель"></Choise>
                <Choise name = "Освещение"></Choise>
                <h5>igor.kozitskij@gmail.com</h5>
            </div>
        )    
    }
}

export default SortMenu