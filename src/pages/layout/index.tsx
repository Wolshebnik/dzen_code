import { Outlet } from 'react-router-dom';

import { Header } from 'components/header';
import { NavigationMenu } from 'components/navigation-menu';

import * as Styles from './styles';

export const Layout = () => {
  return (
    <>
      <Header />
      <Styles.WrapPage>
        <NavigationMenu />

        <Styles.WrapOutlet id="wrapper">
          <Outlet />
        </Styles.WrapOutlet>
      </Styles.WrapPage>
    </>
  );
};
