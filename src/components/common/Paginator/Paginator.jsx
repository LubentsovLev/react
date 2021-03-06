import React, {useState} from 'react';
import s from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {
  let pagesCount = Math.ceil(totalItemsCount  / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;




  return ( 
    <div className={s.inner}>
      <div className={s.pagin}>
        <div className={s.btn}>
        { portionNumber > 1 &&
        <button className={s.btn__prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
        </div>
        {pages
        .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
        .map((p) => {
          return (
            <span
            key={p}
              onClick={() => {
                onPageChanged(p);
              }}
              className={ cn ({
                [s.selectedPage]: currentPage === p
            }, s.pageNumber)
              }
            >
              {p}
            </span>
          );
        })}
        <div className={s.btn}>
            { portionCount > portionNumber &&
            <button className={s.btn__next} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
            

      </div>
    </div>
  )
}

export default Paginator
