import React from "react";
import userPhoto from "../../assets/img/pinkman.jpg";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
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
          {user.followed ? (
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
