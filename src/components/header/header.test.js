import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

describe(`Отрисовка представления Header`, () => {

  it(`Главная страница --> Ссылка логотипа неактивна.`, () => {
    const userLogin = `markwatney@arescrew.com`;
    const isRenderedOnMainPage = true;

    const view = renderer.create(
        <Header
          isRenderedOnMainPage={isRenderedOnMainPage}
          userLogin={userLogin}
        />
    ).toJSON();

    expect(view).toMatchSnapshot();
  });

  it(`Второстепенные страницы --> Ссылка логотипа активна.`, () => {
    const userLogin = `markwatney@arescrew.com`;

    const view = renderer.create(<Header userLogin={userLogin} />).toJSON();

    expect(view).toMatchSnapshot();
  });

  it(`Пользователь авторизирован (логин - непустая строка) --> Отображается логин.`, () => {
    const userLogin = `markwatney@arescrew.com`;

    const view = renderer.create(<Header userLogin={userLogin} />).toJSON();

    expect(view).toMatchSnapshot();
  });

  it(`Пользователь неавторизирован (логин - пустая строка) --> Отображается предложение авторизации.`, () => {
    const userLogin = ``;

    const view = renderer.create(<Header userLogin={userLogin} />).toJSON();

    expect(view).toMatchSnapshot();
  });
});
