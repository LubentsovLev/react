import React, { useEffect } from "react";
import userPhoto from "../../assets/img/pinkman.jpg";
import s from "./Users.module.css";
import { NavLink, Redirect } from "react-router-dom";
import Preloader from "../common/preloader/preloader";

let User = ({
  user,
  followingInProgress,
  unfollow,
  follow,
  isFetching,
  isAuth,
}) => {
  useEffect(() => {}, [isAuth]);
  return (
    <div key={user.id}>
      <div className={s.item}>
        <div className={s.icon__inner}>
          <div className={s.img__inner}>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt=""
              />
            </NavLink>
          </div>
          {isAuth ? (
            user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
                className={s.follow}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
                className={s.follow}
              >
                Follow
              </button>
            )
          ) : (
            <NavLink to={"/profile/" + user.id}>
            <button
              className={s.follow}
            >
              Follow
            </button>
            </NavLink>
          )}
        </div>
        <div className={s.main__inner}>
          <div className={s.about__inner}>
            <h1 className={s.name}>{user.name}</h1>
            <p className={s.descr}>{user.status}</p>
          </div>
          <div className={s.loc__inner}>
            <span className={s.country}>{"user.lacation.city"}</span>
            <span className={s.sity}>{"user.lacation.country"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
