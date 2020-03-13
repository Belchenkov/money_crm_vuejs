import firebase from "firebase/app";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info) {
            state.info = info;
        },
        clearInfo(state) {
            state.info = {};
        }
    },
    actions: {
        async fetchInfo({ dispatch, commit }) {
            try {
                const uid = await dispatch('getUid');
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
                console.log(info);
                commit('setInfo', info);
            } catch (err) {
                console.error(err);
            }
        }
    },
    getters: {
        info(state) {
            return state.info;
        }
    }
}