import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		users: [],
		currentUser: {},
	},
	mutations: {
		SET_USERS(state, users) {
			state.users = users;
		},
		LOGOUT_USER(state) {
			state.currentUser = {};
			window.localStorage.currentUser = JSON.stringify();
		},
		SET_CURRENT_USER(state, user) {
			state.currentUser = user;
			window.localStorage.currentUser = JSON.stringify(user);
		},
	},
	actions: {
		async loadUsers({ commit }) {
			let response = await Api().get("/users");
			let users = response.data.data;
			commit(
				"SET_USERS",
				users.map((u) => u.attributes)
			);
		},
		async loadCurrentUser({ commit }) {
			let user = JSON.parse(window.localStorage.currentUser);
			commit("SET_CURRENT_USER", user);
		},

		logoutUser({ commit }) {
			commit("LOGOUT_USER");
		},
		async loginUser({ commit }, loginInfo) {
			//Server Hookup
			try {
				let response = await Api().post("/sessions", loginInfo);
				// email: email,
				// password: password,
				let user = response.data.data.attributes;

				commit("SET_CURRENT_USER", user);
				return user;
			} catch {
				return { error: "Email/Password combination was incorrect." };
			}
		},
		async registerUser({ commit }, registrationInfo) {
			try {
				let response = await Api().post("/users", registrationInfo);
				let user = response.data.data.attributes;

				commit("SET_CURRENT_USER", user);
				return user;
			} catch {
				return { error: "Registration was not filled out correctly." };
			}
		},
	},
	modules: {},
});
