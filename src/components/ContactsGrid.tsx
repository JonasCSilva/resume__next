import styles from '../styles/ContactsGrid.module.scss'

export const ContactsGrid = () => (
  <div className={styles.contactsGrid}>
    <div className={styles.gridItem}>
      <h3>E-mail</h3>
      <h4>jonas_costa_silva@outlook.com</h4>
    </div>
    <div className={styles.gridItem}>
      <h3>Telefone</h3>
      <h4>(47) 99952-3329</h4>
    </div>
    <div className={styles.gridItem}>
      <h3>Endereço</h3>
      <h4>Joinville, Santa Catarina, Brasil</h4>
    </div>
  </div>
)
