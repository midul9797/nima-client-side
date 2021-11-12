import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialize = () => {
    return initializeApp(firebaseConfig)
}

export default initialize;