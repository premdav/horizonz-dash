import React from 'react';
import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';

const Settings = () => {
    return (
        <Page name='settings'>
            <Welcome />
            <ConfirmButton />
        </Page>
        
    );
}

export default Settings;