import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';
firebase.auth().useDeviceLanguage();