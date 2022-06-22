import CloseIcon from 'components/Icons/CloseIcon';
import Link from 'next/link';

const MobilMenu = ({ headerMenu, isMenuOpend, setIsMenuOpend }) => {
  return (
    <header className={` mobile-menu ${isMenuOpend && 'active'} `}>
      <div className="container">
        <div className="close-icon" onClick={() => setIsMenuOpend(false)}>
          <CloseIcon />
        </div>
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
                <a> Login</a>
              </Link>
            </li>
            <li className="button list-item ">
              <Link passHref href="/signup">
                <a> Sign up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default MobilMenu;
