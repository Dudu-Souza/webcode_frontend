import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>WebCode</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="WebCode" key="title" />
        <meta 
          name="description" 
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!" 
        />
      </Head>
      <main></main>
    </>
  );
};

export default HomeNoAuth;