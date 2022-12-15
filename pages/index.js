import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <img
        className={styles.imgProfile}
        src="/assets/Natalia.jpg"
        alt="Photo"
      />

      <h1>Natália G.</h1>

      <div className={styles.containerDescription}>
        <p>
          Baiana, formada em UX/UI Design na Cubos Academy, sou artesã nas horas
          vagas e gosto de usar minha criatividade e imaginação para desenvolver
          projetos e encantar. Sou mãe do Théo de 2 anos, tenho 29 anos. Gosto
          de trabalhar em equipe e incentivar meus colegas, mantendo a
          constância e qualidade no trabalho.
        </p>
      </div>

      <div className={styles.containerButtons}>
        <a
          className={styles.buttonBehance}
          href="https://www.behance.net/natliagonsalves"
          target="_blank"
        >
          Behance
        </a>
        <a
          className={styles.buttonLinkedIn}
          href="https://www.linkedin.com/in/nat%C3%A1lia-gonsalves-619682205/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className={styles.buttonWhatsapp}
          href="https://wa.me/5575999476441?text=Olá%20Tudo%20bem?%20Tenho%20interesse%20em%20seus%20serviços."
          target="_blank"
        >
          Whatsapp
        </a>
      </div>
      <footer>
        <img className={styles.iconEmail} src="/assets/email.svg" />
        <p>contato.nataliag@gmail.com</p>
      </footer>

      <style jsx>{`
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
