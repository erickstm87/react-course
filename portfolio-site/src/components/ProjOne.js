import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const ProjOne = (props) => {
    console.log(props);
    return (
        <div>Here is my project: {props.match.params.id ? props.match.params.id : 'project1'}</div>        
    )
};

export default ProjOne;