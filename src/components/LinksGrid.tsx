import styles from '../styles/LinksGrid.module.scss'
import { Link } from '../types'

type Props = {
  links: Link[]
}

export const LinksGrid = ({ links }: Props) => (
  <div className={styles.linksGrid}>
    {links.map(({ name, url }, index) => (
      <div key={index} className={styles.linkContainer}>
        <h3>{name}</h3>
        <a href={'https://' + url} target='_blank' rel='noreferrer'>
          {url}
        </a>
      </div>
    ))}
  </div>
)
