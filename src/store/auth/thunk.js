import { checkingCredentials, login } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }
};

export const StartGoogleSignIn = ( ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
        dispatch( login() )

    }
}