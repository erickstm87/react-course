import React from 'react';

const Action = (props) => (
    <div>
    <button onClick={props.handleOptions} disabled={!props.hasOptions}>
        What should i do?
    </button>
    </div>
)
export default Action;