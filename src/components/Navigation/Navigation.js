import Link from 'next/link';
import styles from './Navigation.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const navBar = [
  { name: 'Home', pathname: '/' },
  { name: 'Posts', pathname: '/posts' },
  { name: 'Create post', pathname: '/create_post' },
  { name: 'Products', pathname: '/products' },
];

function Navigation() {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul>
        {navBar.map((elem) => (
          <li
            key={elem.name}
            className={classNames({
              [styles.active]: pathname === elem.pathname,
            })}>
            <Link href={elem.pathname}>{elem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
