import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <img className="imgProfile" src="/assets/Natalia.jpg" alt="Photo" />

      <h1>Natália G.</h1>

      <div className="containerDescription">
        <p>
          Baiana, formada em UX/UI Design na Cubos Academy, sou artesã nas horas
          vagas e gosto de usar minha criatividade e imaginação para desenvolver
          projetos e encantar. Sou mãe do Théo de 2 anos, tenho 29 anos. Gosto
          de trabalhar em equipe e incentivar meus colegas, mantendo a
          constância e qualidade no trabalho.
        </p>
      </div>

      <div className="containerButtons">
        <a
          className="buttonBehance"
          href="https://www.behance.net/natliagonsalves"
          target="_blank"
        >
          Behance
        </a>
        <a
          className="buttonLinkedIn"
          href="https://www.linkedin.com/in/nat%C3%A1lia-gonsalves-619682205/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="buttonWhatsapp"
          href="https://wa.me/5575999476441?text=Olá%20Tudo%20bem?%20Tenho%20interesse%20em%20seus%20serviços."
          target="_blank"
        >
          Whatsapp
        </a>
      </div>
      <footer>
        <img className="iconEmail" src="/assets/email.svg" />
        <p>contato.nataliag@gmail.com</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .imgProfile {
          width: 160px;
          height: 160px;
          border-radius: 100%;
          border: 1px solid #000;
        }

        .containerDescription {
          width: 50%;
        }

        .iconEmail {
          width: 35px;
          height: 35px;
        }

        .buttonLinkedIn {
          width: 200px;
          height: 70px;
          cursor: pointer;
          background-color: #0e76a8;
          border: none;
          border-radius: 10px;
          font-size: 20px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-decoration: none;
          align-items: center;
          text-align: center;
        }

        .buttonLinkedIn:hover {
          color: #0e76a8;
          background: #fff;
          border: 1px solid #0e76a8;
        }

        .buttonBehance {
          width: 200px;
          height: 70px;
          cursor: pointer;
          background-color: #053eff;
          border: none;
          border-radius: 10px;
          font-size: 20px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-decoration: none;
          align-items: center;
          text-align: center;
        }

        .buttonBehance:hover {
          color: #053eff;
          background: #fff;
          border: 1px solid #053eff;
        }

        .buttonWhatsapp {
          width: 200px;
          height: 70px;
          cursor: pointer;
          background-color: #44ad3a;
          border: none;
          border-radius: 10px;
          font-size: 20px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-decoration: none;
          align-items: center;
          text-align: center;
        }

        .buttonWhatsapp:hover {
          color: #44ad3a;
          background: #fff;
          border: 1px solid #44ad3a;
        }

        .containerButtons {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 800px;
          height: 100px;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
