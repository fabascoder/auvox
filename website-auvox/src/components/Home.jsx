import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section>
        <div className="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="content">
          <h2>Onde a inivação tem <br /> valor de <span>ouro</span></h2>
          <div className="container-btn">
            <button className="button">
                <span className="button-content">Conheça nossas soluções</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
