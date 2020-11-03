import * as axios from "axios";
import { token } from "../redux/musicPage_reducer";
import store from "../redux/redux-store";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "32c312ed-08c9-4f97-86fe-0ce7144e486e",
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
    return instance.get(  `profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(  `profile/status/` + userId);
  },
  updateUserStatus(status) {
    return instance.put(  `profile/status`, { status: status });
  },
  saveProto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(  `profile/photo`, formData, {
      headers: {
        "Content-Type": "multioart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(  `profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get( `auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post( `auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logOut() {
    return instance.delete( `auth/login`);
  },
};
export const securityAPI = {
  getCaptcha() {
    return instance.get( `security/get-captcha-url`);
  },
};
export const musicAPI = {
   getSpotifyNewRel  () {
    return axios
      .get(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: { Authorization: `Bearer ${token}` },
        useDefaultXhrHeader: false,
      })
  },
  
}
export const pixelsAPI = {
  getPixelsAPI(pageSize = 12) {
    return axios.get(`https://api.pexels.com/v1/search?query=nature&per_page=${pageSize}`, {
      headers: {
        Authorization:
          "563492ad6f9170000100000196deef0c580e48f9bd5c0b0241af8a5c",
      },
    });
  },
   getPixelsAPINext (){
    return axios.get(store.getState().photosPage.pixelsNext, {
      headers: {
        Authorization: "563492ad6f9170000100000196deef0c580e48f9bd5c0b0241af8a5c",
      },
    });
  }
};

export const commentsAPI = {
  sendComment(comment) {
    return instance.put( `/profile/status`, { status: comment });
  },
};
