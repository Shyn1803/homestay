import Image from 'components/Image';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className='container'>
        <div className='logo-wrapper'>
          <Image source='/assets/homepage/Logo.svg' alt='Logo' />
        </div>
        <div className='menu-wrapper'>
          <div className='navbar' role='navigation'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  HOME
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  SEARCH
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  ABOUT
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  CONTACT
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  LOGIN/REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
