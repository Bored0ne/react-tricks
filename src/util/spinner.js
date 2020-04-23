import React from 'react';
import ReactDOM from "react-dom";
import './spinner.css'

// very generic DIY spinner absolute positioned & flexed to the top.

const Spinner = ({...props}) => {
    return <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1" />
            <div className="sk-cube sk-cube2" />
            <div className="sk-cube sk-cube3" />
            <div className="sk-cube sk-cube4" />
            <div className="sk-cube sk-cube5" />
            <div className="sk-cube sk-cube6" />
            <div className="sk-cube sk-cube7" />
            <div className="sk-cube sk-cube8" />
            <div className="sk-cube sk-cube9" />
        </div>
    </div>;
};

function start(key = 'random') {
    let div = document.createElement('div');
    div.id = key;
    document.body.appendChild(div);
    ReactDOM.render(<Spinner/>, div);
}

function stop(key = 'random') {
    document.getElementById(key).remove();
}

export default {start, stop};
