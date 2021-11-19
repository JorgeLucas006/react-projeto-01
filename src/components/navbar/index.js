import React from "react";
import "./style.css";
import { useRef } from "react";

const Navbar = () => {
  const list = useRef(null);
  const button = useRef(null);

  const onClick = () => {
    const span = list.current; // corresponding DOM node
    const btn = button.current; // corresponding DOM node
    var css = span.className === "navbar-list active" ? "none" : "active";
    var cssBtn = btn.className === "active" ? "" : "active";
    span.className = "navbar-list " + css;
    btn.className = cssBtn;

  };

  return (
    <nav>
      <div>
        <span className="navbar-title">
          <a to="/">AniCloud</a>
        </span>
        <ul className="navbar-list" ref={list}>
          <a to="/animes">
            <li>Animes</li>
          </a>
          <a to="/mangas">
            <li>Mangás</li>
          </a>
          <a to="/noticias">
            <li>Notícias</li>
          </a>
          <a to="/login">
            <li className="hidden">Entrar</li>
          </a>
        </ul>
        <span>
          <a to="/login">Entrar</a>
        </span>
        <button onClick={onClick}>
          <span id="hamburguer" ref={button}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
