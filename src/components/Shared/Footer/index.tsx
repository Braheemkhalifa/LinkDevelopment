import FacrbookIcon from 'components/Icons/FacrbookIcon';
import InstagramIcon from 'components/Icons/InstagramIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/assets/images/Logo.png';
import AppStore from '../../../../public/assets/images/AppStore.jpeg';
import GoogleStore from '../../../../public/assets/images/GoogleStore.jpeg';
import { useState } from 'react';
import useGetWidth from 'hooks/useGetWidth';

const footerMenu = [
  {
    id: 0,
    title: 'Company',
    menuItems: [
      {
        title: 'About',
        url: '/about'
      },
      {
        title: 'Careers',
        url: '/careers'
      },
      {
        title: 'Mobile',
        url: '/mobile'
      }
    ]
  },
  {
    id: 1,
    title: 'Contact',
    menuItems: [
      {
        title: 'Help/FAQ',
        url: '/help'
      },
      {
        title: 'Press',
        url: '/press'
      },
      {
        title: 'Affilates',
        url: '/affilates'
      }
    ]
  },
  {
    id: 2,
    title: 'Media',
    menuItems: [
      {
        title: 'News',
        url: '/news'
      },
      {
        title: 'Photo',
        url: '/photo'
      },
      {
        title: 'Video',
        url: '/video'
      }
    ]
  }
];

const socialList = [
  {
    icon: <FacrbookIcon />,
    url: 'https://www.facebook.com/'
  },
  {
    icon: <TwitterIcon />,
    url: 'https://www.twitter.com/'
  },
  {
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/'
  }
];

const appsList = [
  {
    img: GoogleStore,
    url: 'https://play.google.com/'
  },
  {
    img: AppStore,
    url: 'https://www.apple.com/eg-ar/app-store/'
  }
];
const Footer = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(null);
  const size = useGetWidth();

  const handleOnActiveMenu = singlMenuId => {
    setIsActiveMenu(singlMenuId);
    if (isActiveMenu != singlMenuId) {
      setIsActiveMenu(singlMenuId);
    } else {
      setIsActiveMenu(null);
    }
  };
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="about">
            <Image src={Logo} alt="Link Development Logo" width="158" height="88" />
            <p className="description">
              We make technology produce productive, adaptable and sustainable business experiences.
            </p>
          </div>
          {footerMenu.map(singlMenu => (
            <div key={singlMenu.title} className="menu">
              <h3 className="menu-title" onClick={() => handleOnActiveMenu(singlMenu.id)}>
                {singlMenu.title}{' '}
                <span className="icon">{isActiveMenu === singlMenu.id ? '-' : '+'}</span>
              </h3>
              {(isActiveMenu === singlMenu.id || size.width >= 993) && (
                <ul className="menu-links">
                  {singlMenu.menuItems.map(singlMenu => (
                    <li key={singlMenu.title}>
                      <Link href={singlMenu.url}>{singlMenu.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="contact">
            <div className="social-links">
              {socialList.map(social => (
                <div key={social.url} className="social">
                  <Link passHref href={social.url}>
                    <div>{social.icon}</div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="discover-apps">
              <h3 className="title">Discover our app</h3>
              <div className="apps-links">
                {appsList.map(app => (
                  <div key={app.url} className="app">
                    <Link passHref href={app.url}>
                      <Image src={app.img} width="848" height="252" alt={app.url} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copytights"> All rights reserved@Linkdevelopment.com </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
