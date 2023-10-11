import Cartao from "@/components/Cartao";
import EntradaNumerica from "@/components/EntradaNumerica";
import styles from '@/styles/Formulario.module.css'
import Link from 'next/link'
import { useState } from "react";
import Head from 'next/head'

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)

  return (
    <div className={styles.formulario}>
      <Head>
          <title>Monty Hall - Principal</title>
      </Head>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica texto="Quantidade de portas?" valor={qtdePortas} onChange={novaQuantidade => setQtdePortas(novaQuantidade)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link className={styles.link} href={`/jogo/${qtdePortas}`}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
    
  )
}
