import ArrowDownIcon from 'components/Icons/ArrowDownIcon';
import useGetWidth from 'hooks/useGetWidth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from '../../../../public/assets/images/Logo.png';
import MobilMenu from './MobilMenu';

const headerMenu = [
  {
    title: 'Home',
    url: '/home'
  },
  {
    title: 'About Us',
    url: '/about'
  },
  {
    title: 'News',
    url: '/news'
  },
  {
    title: 'Contact Us',
    url: '/contact'
  }
];

const Header = () => {
  const { locale, locales, asPath } = useRouter();
  const [scrollDirection, setScrollDirection] = useState('');
  const [isShrunk, setShrunk] = useState(false);
  const [isMenuOpend, setIsMenuOpend] = useState(false);
  const size = useGetWidth();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      if (
        !isShrunk &&
        (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120)
      ) {
        setShrunk(true);
      }

      if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
        setShrunk(false);
      }
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection, isShrunk]);
  return (
    <>
      <header
        className={` header-wrapper 
        ${scrollDirection === 'up' && isShrunk && 'scroll-up '} 
        ${isShrunk && 'fixed'}
    `}
      >
        <div className="container">
          <div className="logo">
            <Link passHref href="/">
              <Image src={Logo} alt="Link Development Logo" width="158" height="88" />
            </Link>
          </div>
          {size.width >= 993 && (
            <>
              <ul className="menu-links">
                {headerMenu.map(singlMenu => (
                  <li className="list-item" key={singlMenu.title}>
                    <Link href={singlMenu.url}>{singlMenu.title}</Link>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <ul className="actions-wrapper">
                  <li className="list-item">
                    <Link passHref href="/login">
                      Login
                    </Link>
                  </li>
                  <li className="button list-item ">
                    <Link passHref href="/signup">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
          {size.width <= 992 && (
            <div className="menu-mobile" onClick={() => setIsMenuOpend(true)}>
              Menu
            </div>
          )}
          <div className="language-wrapper ">
            <b>{locale === 'en' ? 'En' : 'ع'}</b> <ArrowDownIcon />
            <div className="triangle"></div>
            <ul>
              {locales?.map(singleLocale => (
                <li key={singleLocale} className="list-item">
                  <Link passHref href={asPath} locale={singleLocale}>
                    <span className={`${singleLocale == locale && 'active'} `}>
                      {singleLocale === 'en' ? 'En' : 'ع'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      {size.width <= 992 && (
        <MobilMenu
          headerMenu={headerMenu}
          isMenuOpend={isMenuOpend}
          setIsMenuOpend={setIsMenuOpend}
        />
      )}
    </>
  );
};
export default Header;
