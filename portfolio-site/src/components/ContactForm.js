import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const ContactForm = (props) => {
    console.log('contact page here!!!!', props);
    return (
        <div>
            Here is my conact form please feel free to get in touch if you have any questions about the work you see here
        </div>
    )
};

export default ContactForm;