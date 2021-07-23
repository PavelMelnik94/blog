import React from "react";
import { Navigation } from "../../Navigation/Navigation";

export default function ArticleMenu() {
  return (
    <nav className="navigation-main-post">
      {Navigation.map((menuItem) => (
        <span key={menuItem.name} className="navbar-item">
          <a href={menuItem.url}>{menuItem.name}</a>
        </span>
      ))}
    </nav>
  );
}
