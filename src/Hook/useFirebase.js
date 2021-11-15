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
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(()=> setIsLoading(false))
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
    const saveUser = (email) => {
        const user = { email};
        
        fetch('https://cryptic-plateau-56093.herokuapp.com/users', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    useEffect(()=> {
        fetch(`https://cryptic-plateau-56093.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
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
        setStatus,
        saveUser,
        admin, 
        isLoading,
        setIsLoading
    }
};

export default useFirebase;