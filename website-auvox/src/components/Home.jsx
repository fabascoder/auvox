import React from "react";
import "../styles/home.css";
import computer from "../assets/computer.png";
import configuracao from "../assets/configuracao.png";
import celular from "../assets/celular.png";
import setaDireita from "../assets/setaDireita.png";

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
          <h2>
            Onde a inivação tem <br /> valor de <span>ouro</span>
          </h2>
          <div className="container-btn">
            <button className="button">
              <span className="button-content">Conheça nossas soluções</span>
            </button>
          </div>

          <div className="container-card-small">
            <div className="card">
              <div className="card-inner">
                
                <div className="card-front">
                  <img className="img-computer" src={computer} alt="" />
                  <p className="text-card-small">Criação de sistemas</p>
                </div>
                
                 <div className="card-back">
                  <img className="img-computer" src={setaDireita} alt="" />
                  <div className="text-card-small">SAIBA MAIS</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                
                <div className="card-front">
                  <img className="img-computer" src={configuracao} alt="" />
                  <p className="text-card-small">Criação de sistemas</p>
                </div>
                
                <div className="card-back">
                  <img className="img-computer" src={setaDireita} alt="" />
                  <div className="text-card-small">SAIBA MAIS</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                
                <div className="card-front">
                  <img className="img-computer" src={celular} alt="" />
                  <p className="text-card-small">Criação de sistemas</p>
                </div>
                
                 <div className="card-back">
                  <img className="img-computer" src={setaDireita} alt="" />
                  <div className="text-card-small">SAIBA MAIS</div>
                </div>
              </div>
            </div>

            {/* <div className="card-small-1">
              <div className="flex-card-small">
                <div className="img-small-1">
                  <img className="img-computer" src={computer} alt="" />
                </div>
                <div>
                  <p className="text-card-small">Criação de sistemas</p>
                </div>
              </div>
            </div> */}

            {/* <div className="card-small-1">
              <div className="flex-card-small">
                <div className="img-small-1">
                  <img className="img-computer" src={configuracao} alt="" />
                </div>
                <div>
                  <p className="text-card-small">Criação de sistemas</p>
                </div>
              </div>
            </div>

            <div className="card-small-1">
              <div className="flex-card-small">
                <div className="img-small-1">
                  <img className="img-computer" src={celular} alt="" />
                </div>
                <div>
                  <p className="text-card-small">Criação de sistemas</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
