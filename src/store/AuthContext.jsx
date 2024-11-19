import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase/BaseConfig.js';
import { createContext } from 'react';
import  { firebaseSignUp }  from '../firebase/services/AuthService.js';
import  { firebaseSignIn}  from '../firebase/services/AuthService.js';
import  {firebaseSignOut}  from '../firebase/services/AuthService.js';

export const AuthContext = createContext({
    user: firebaseAuth.currentUser,
    loading: false,
    signIn: () => {},
    signUp: () => {},
    signOut: () => {},
});

const  AuthProvider  = ({ children }) => {

    const [currentUser,  setCurrentUser] =  useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthLoading,  setIsAuthLoading] =  useState(true);
    const  navigate  =  useNavigate();

    //Sign up
    // const signUp = (creds) => {
    //     setIsLoading(true);
    //     firebaseSignUp(creds)
    //         .then(async signUpResult => {
    //             const { user } = signUpResult; //object destructuring
    //             if (user) { setCurrentUser(user);
    //             //redirect the user on the targeted route
    //             navigate('/', { replace:  true }); }
    //         else {
    //                 alert("User not found.")
    //             }
    //             setIsLoading(false);
    //         })
    //         .catch(error  => {
    //             //check for error
    //             if (error.code  ===  'auth/email-already-in-use') {
    //                 console.log("email-already-in-use")
    //             } else if (error.code  ===  'auth/too-many-requests') {
    //                 alert("Too many requests, please try again after a while.")
    //             }
    //             // you can check for more error like email not valid or something
    //             setIsLoading(false);
    //         });
    // }
    const signUp = async ({ email, password }) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            setCurrentUser(result.user); // Update user context
            navigate('/', { replace: true }); // Redirect to Home page
            console.log('Sign-up successful:', result.user);
        } catch (error) {
            console.error('Error during sign-up:', error.message);
            alert(`Sign-up failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };


    //Sign in
    const  signIn = async (creds,  onSuccess) => {
        setIsLoading(true);
        firebaseSignIn(creds)
            .then(signInResult  => {
                const { user } =  signInResult;
                if  (user) {
                    setCurrentUser(user);
                    //redirect user to targeted route
                    navigate('/', { replace:  true });
                }
                else {
                    //do something
                }
                setIsLoading(false);
            })
            .catch(error  => {
                if  (error.code  ===  'auth/wrong-password') {
                    //show error
                } else  if  (error.code  ===  'auth/too-many-requests') {
                    //show error
                }
                setIsLoading(false);
            });
    }

    //Sign out
    const signOut = async () => {
        setIsLoading(true);
        try {
            await firebaseSignOut();
            setCurrentUser(null);
            navigate('/signup', { replace:  true });
        } catch  (error) {
            setIsLoading(false);
            //show error alert
        }
    }
    //create Auth Values
    const authValues = {
        user: currentUser,
        loading: isLoading,
        signIn,
        signUp,
        signOut,
    }

    useEffect(() => {
        //onAuthStateChanged check if the user is still logged in or not
        const  unsubscribe  =  onAuthStateChanged(firebaseAuth,  user  => {
            setCurrentUser(user);
            setIsAuthLoading(false);
        });
        return  unsubscribe;
    },  []);

    return (
        <AuthContext.Provider value={{ currentUser, signUp, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;