import firebase from "firebase/app";

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (err) {
                commit('setError', err);
                throw err;
            }
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);

                const uid = await dispatch('getUid');

                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 100000,
                    name
                });

            } catch (err) {
                commit('setError', err);
                throw err;
            }
        },
        async logout() {
            await firebase.auth().signOut();
        },
        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    },
}