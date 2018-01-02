import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const ProjTwo = (props) => {
    console.log(props);
    return(
        <div>
            This is my project {props.match.params.id ? props.match.params.id : 'project2'}
        </div>
    )
};

export default ProjTwo;