import { useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
}

export default useFirebase;