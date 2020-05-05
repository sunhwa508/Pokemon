import React from "react";
import "./pagination.css";
export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <>
      {gotoPrevPage && <button onClick={gotoPrevPage}>PREV</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>NEXT</button>}
    </>
  );
}
