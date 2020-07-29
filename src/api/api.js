import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

let instance = axios.create({
  withCredentials: true,
  baseUrl: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "714168d7-3207-4839-960a-cf0e6a7b2811",
  },
});


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(baseUrl + `follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  getProfile(userId) {
    console.warn("Use profileAPI object");
    return profileAPI.getProfile(userId);
  },
};


export const profileAPI = {
  getProfile(userId) {
    return instance.get(baseUrl + `profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(baseUrl + `profile/status/` + userId);
  },
  updateUserStatus(status) {
    return instance.put( baseUrl +`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(baseUrl + `auth/me`);
  },
  login(email, password,rememberMe = false) {
    return instance.post(baseUrl + `auth/login` ,{email, password,rememberMe});
  },
  logOut() {
    return instance.delete(baseUrl + `auth/login`);
  },
};
