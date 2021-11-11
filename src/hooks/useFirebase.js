import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;