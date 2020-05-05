import React from "react";
import "../pokemon-list.css";
export default function Search({ Searchpoke }) {
  return (
    <input
      type="text"
      placeholder="폭히몬을 입력하시오"
      onChange={Searchpoke}
    />
  );
}
