import { useEffect, useState } from "react";
import initialize from '../Firebase/firebase.init'
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
initialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');
    const auth = getAuth();
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const userName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const loginWithEmail = () => {

        return signInWithEmailAndPassword(auth, email, password)

    }   
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        setUser, 
        email,
        password,
        error,
        setError,
        loginWithEmail,
        handleEmail,
        handleName,
        handlePassword,
        logOut,
        userName, 
        auth,
        status, 
        setStatus
    }
};

export default useFirebase;