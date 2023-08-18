// src/auth/auth0-provider-with-history.js

import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    //const history = useNavigate();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    //const appURL = process.env.REACT_APP_URL;



    return (
        <Auth0Provider
            domain={'dev-7fzxcbarf08zoaab.us.auth0.com'}
            clientId={'e1Lr5fXH5T4VrRoCEvg1CBHwRdSj0Qcs'}
            //onRedirectCallback={onRedirectCallback}
            //redirectUri={'https://fgq.netlify.app/dashboard'}
            redirectUri={'http://localhost:3000/dashboard'}
            useRefreshTokens
            cacheLocation='localstorage'
            audience={'https://fgq.server'}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
