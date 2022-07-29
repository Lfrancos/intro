import { ActiveLink } from './ActiveLink'
import styles from './NavBar.module.scss';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {

  return (
    <nav className={styles.navBar}>
        {menuItems.map(item => <ActiveLink key={item.text} href={item.href} label={item.text} /> )}
    </nav>
  )
}
