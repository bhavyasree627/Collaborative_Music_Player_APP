import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello welcome to React+Django</h1>
        )
    }
}

//adding the component to the templates>frontend>index.html file.
const appDiv = document.getElementById('app');
render(<App />,appDiv)

