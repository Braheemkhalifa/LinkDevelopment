import Footer from 'components/Shared/Footer';
import Header from 'components/Shared/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="body-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
