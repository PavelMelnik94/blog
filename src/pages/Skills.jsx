import React from "react";
import SoftSkills from "../components/Skills/SoftSkills";
import HardSkills from "../components/Skills/HardSkills";

export default function Skills() {
  return (
    <div className="post-content">
      <div className="post-content-meta"></div>

      <article className="article">
        <h1 className="article-header">Навыки и умения</h1>
        <div className="article-content">
          <span>
            Оценка ниже произведена лично мной. В силу совести, я не могу себя
            одекватно отценить и сказать что я в чем-то профессионал или
            наоборот.По большей части это касается раздела hard, прогресс-бар в
            котором ориентирован исключительно с позиции джуниора.{" "}
          </span>

          <div style={{ marginTop: "1rem" }}>
            <HardSkills />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <SoftSkills />
          </div>
        </div>
      </article>
    </div>
  );
}
