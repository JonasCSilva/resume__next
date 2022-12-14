import type { NextPage } from 'next'
import Head from 'next/head'

import { ContactsGrid } from '../components/ContactsGrid'
import { FormationGrid } from '../components/FormationGrid'
import { LinksGrid } from '../components/LinksGrid'
import { SkillsGrid } from '../components/SkillsGrid'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>jonas_costa_silva-resume</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>Jonas Costa Silva</h1>

          <ContactsGrid />

          <div className={styles.sectionsGrid}>
            <h2>FORMAÇÃO</h2>
            <FormationGrid />
            <h2>LINKS</h2>
            <LinksGrid
              links={[
                { name: 'GithHub', url: 'github.com/jonascsilva' },
                { name: 'LinkedIn', url: 'linkedin.com/in/jonascsilva' }
                /* { name: 'Site Pessoal', url: 'jonascsilva.com' } */
              ]}
            />
            <h2>COMPETÊNCIAS</h2>
            <SkillsGrid
              skills={[
                { name: 'HTML', skillLevel: 3 },
                { name: 'Next.js', skillLevel: 3 },
                { name: 'JavaScript', skillLevel: 3 },
                { name: 'Flutter', skillLevel: 2 },
                { name: 'CSS', skillLevel: 3 },
                { name: 'MySQL', skillLevel: 2 },
                { name: 'Electron', skillLevel: 2 },
                { name: 'Node.js', skillLevel: 3 },
                { name: 'Tauri', skillLevel: 3 },
                { name: 'React Native', skillLevel: 3 },
                { name: 'TypeScript', skillLevel: 4 },
                { name: 'React', skillLevel: 3 },
                { name: 'Angular', skillLevel: 1 }
              ]}
            />
            <h2>IDIOMAS</h2>
            <SkillsGrid skills={[{ name: 'Inglês', skillLevel: 3 }]} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
