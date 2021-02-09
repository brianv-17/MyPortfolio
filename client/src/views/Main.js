import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import Example from '../components/Example';
import Summary from '../components/Summary';
import Monster from '../components/Monster';
export default () => {
    return (
        <div>
            <Example/>
            <Summary/>
            <Monster/>
            <ContactForm/>
        </div>
    )
}



