import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button 
            className='button button--link'
            onClick={props.handleDeleteOptions} disabled={props.options.length < 1}>Remove Options
        </button>     
        {props.options.length === 0 && <p>Please add an option to get started</p>}    
        {
           props.options.map((element) => 
            <Option 
                key={element} 
                optionText={element}
                handleDeleteOption={props.handleDeleteOption}
           />)
        }                     
    </div>
)

export default Options;