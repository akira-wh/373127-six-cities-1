import React from 'react';

/**
 * Представление Header.
 *
 * @function Header
 * @param {object} props — данные компонента
 * @return {object}
 */
const Header = (props) => {
  const isRenderedOnMainPage = props.isRenderedOnMainPage || false;
  const isUserAuthorized = Boolean(props.userLogin);
  const userLogin = props.userLogin;

  const logoLinkSetting = {
    className: isRenderedOnMainPage ? `header__logo-link  header__logo-link--active` : `header__logo-link`,
    href: isRenderedOnMainPage ? null : `main.html`
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__left">
            <a {...logoLinkSetting}>
              <img className="header__logo"
                src="img/logo.svg"
                width="81" height="41"
                alt="6 cities logo"/>
            </a>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item  user">
                <a className="header__nav-link  header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper  user__avatar-wrapper"></div>

                  {
                    isUserAuthorized ?
                      <span className="header__user-name  user__name">{userLogin}</span> :
                      <span className="header__login">Sign in</span>
                  }

                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );

};

export default Header;
