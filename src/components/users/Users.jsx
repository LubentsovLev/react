import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/formsControls/Pagintor/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalItemsCount ,
  pageSize,
  users,
  onPageChanged,
  followingInProgress,
  unfollow,
  follow,
  isAuth,
  ...props
}) => {
  
  let pagesCount = Math.ceil(totalItemsCount  / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div className={s.container}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount ={totalItemsCount }
        pageSize={pageSize}
      />

     {
       users.map((u) =>
       
        <User
          user={u}
          key={u.id}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
          isAuth={isAuth}
        />) 
     }
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount ={totalItemsCount }
        pageSize={pageSize}
      />
    </div>
  );
};
export default Users;
