import React from 'react';  //adds reference to React libraries

const HeaderBar = function (props) {
    return (
        <div className="header-titles">
            <h1>Travel Image App</h1>
            <p>Using create-react-app</p>
        </div>
    );
}

export default HeaderBar;  //makes component available to other components