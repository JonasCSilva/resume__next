import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jonas Costa Silva</h1>

        <div style={{ height: "3rem" }} />

        <div className={styles.contactGrid}>
          <div className={styles.gridItem}>
            <h3>E-mail</h3>
            <div style={{ width: "10px", display: "inline-block" }} />
            <h4>email@jonascsilva.com</h4>
          </div>
          <div className={styles.gridItem}>
            <h3>Telefone</h3>
            <div style={{ width: "10px", display: "inline-block" }} />
            <h4>(47) 99952-3329</h4>
          </div>
          <div className={styles.gridItem}>
            <h3>Endereço</h3>
            <div style={{ width: "10px", display: "inline-block" }} />
            <h4>Joinville, Santa Catarina, Brasil</h4>
          </div>
        </div>

        <div style={{ height: "3rem" }} />

        <div className={styles.sectionsGrid}>
          <h2>FORMAÇÃO</h2>
          <div />
          <h2>LINKS</h2>
          <div />
          <h2>COMPETÊNCIAS</h2>
          <div />
          <h2>IDIOMAS</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5>Inglês</h5>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  justifyItems: "center",
                  alignItems: "center",
                  width: "7rem",
                }}
              >
                <figure className={styles.circleFilled} />
                <figure className={styles.circleFilled} />
                <figure className={styles.circleFilled} />
                <figure className={styles.circleEmpty} />
                <figure className={styles.circleEmpty} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
