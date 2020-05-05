import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";
import "./pokemon-list.css";
import Search from "./search/search";

export default function Pokemonlist() {
  const [pokemons, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(false);

  const [results, setResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(currentPage)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        setResult(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) return <h2>loading...It's still working</h2>;

  function gotoNextPage() {
    setCurrentPage(nextPage);
  }
  function gotoPrevPage() {
    setCurrentPage(prevPage);
  }

  function Searchpoke(e) {
    setSearch(e);
    console.log(search);
    const filtered = pokemons.filter((poke) =>
      poke.name.toLowerCase().includes(e.toLowerCase())
    );
    setResult(filtered);
  }

  return (
    <>
      <Search Searchpoke={(e) => Searchpoke(e.target.value)} />
      <div className="pokelist">
        {results.map((poke, index) => (
          <div key={index} className="poke">
            <img
              style={{ width: "150px" }}
              src={`https://pokeres.bastionbot.org/images/pokemon/${
                poke.url.split("/")[6]
              }.png`}
              alt="pokemon"
            />
            <h2 key={index}>{poke.name}</h2>
          </div>
        ))}
      </div>
      <Pagination
        gotoNextPage={nextPage ? gotoNextPage : null}
        gotoPrevPage={prevPage ? gotoPrevPage : null}
      />
    </>
  );
}
