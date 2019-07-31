import React, {Component} from "react"

class Topper extends Component {

    
    render() {
        return (
            <div className="Topper">
                <h1>Интернет магазин (test)</h1>
                <button type="button" id="support">Помощь</button>
                <button type="button" id="lang">Язык</button>
                <button type="button" id="curr">Валюта</button>
            </div>
        )    
    }
}

export default Topper