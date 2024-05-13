import Link from 'next/link';
import styles from './Navigation.module.scss';
import { useRouter } from 'next/router';

const navBar = [
  { name: 'Home', pathname: '/' },
  { name: 'Posts', pathname: '/posts' },
  { name: 'Created post', pathname: '/created_post' },
];

function Navigation() {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul>
        {navBar.map((elem) => (
          <li
            key={elem.name}
            className={pathname === elem.pathname ? styles.active : ''}>
            <Link href={elem.pathname}>{elem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
