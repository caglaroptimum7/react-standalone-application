import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

const Application = document.getElementById('app');

const datasetToObject = (elem) => {
    let data = {};
    [].forEach.call(elem.attributes, function (attr) {
        if (/^data-/.test(attr.name)) {
            let camelCaseName = attr.name.substr(5).replace(/-(.)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
            data[camelCaseName] = attr.value;
        }
    });
    return data;
}


ReactDOM.render(<App args={datasetToObject(Application)}/>, Application);