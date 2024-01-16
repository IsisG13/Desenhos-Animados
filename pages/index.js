import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch("/api/dados");
        const data = await response.json();
        console.log("Dados buscados:", data);
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDados();
  }, []);

  return (
    <div className={styles.body}>
      <Head>
        <title>Desenhos Animados</title>
        <meta name="description" content="Gerado pelo create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Conheça desenhos animados super legais!</h1>
      <div className={styles.App}>
        {dados.map((item) => (
          <div key={item.id}>
            <div className={styles.card}>
              <p className={styles.nome}>{item.nome}</p>
              <Image
                className={styles.imagem}
                width={50}
                height={50}
                src={item.imagem}
                alt={item.nome}
              />
              <a href={item.trailer}>Assista já</a>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
