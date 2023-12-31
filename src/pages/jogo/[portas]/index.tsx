import styles from '../../../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from '@/functions/portas';
import Porta from '../../../components/Porta'; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PortaModel from '@/model/porta';
import Head from 'next/head';

export default function Home() {
  const router = useRouter()
  const [portas, setPortas] = useState([] as any)


  
  useEffect(() => {
    const portas = +(router.query.portas ?? 3)
    
    const temPresente = Math.floor(Math.random() * portas) + 1

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])


  function renderizarPortas() {
    return portas.map((porta: PortaModel) => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
      />
    })
  }

  return (
    <div id={styles.jogo}>
        <Head>
          <title>Monty Hall - Jogo</title>
        </Head>
        <div className={styles.portas}>
            {renderizarPortas()}
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar jogo</button>
            </Link>
        </div>
    </div>
    
  )
}
