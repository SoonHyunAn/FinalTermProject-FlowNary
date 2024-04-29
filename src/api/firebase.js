import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from 'firebase/database'; // 이 부분을 추가

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Firebase Realtime Database 초기화

export function login({ email, password }) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log('로그인 성공'))
    .catch((error) => console.error('로그인 실패:', error.message));
}

export function logout() {
  signOut(auth)
    .then(() => console.log('로그아웃 성공'))
    .catch((error) => console.error('로그아웃 실패:', error.message));
}

export { database };
// export function register({ email, password }) {
//   console.log('firebase:register():', email, password);
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(() => {logout()})
//     .catch(console.error);
// }

// export function onUserStateChanged(callback) {
//   onAuthStateChanged(auth, (user) => {
//     callback(user);
//   });
// }