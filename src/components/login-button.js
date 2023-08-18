// src/components/login-button.js

import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick={()=>loginWithRedirect()} className={props.looks}>Ingresar</button>
    );
};

export default LoginButton;
