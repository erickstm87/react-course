import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is to edit the expense {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;