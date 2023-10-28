import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';
import Buttons from './Buttons';

const categories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  return (
    <>
      <main>
        <Title title={'our menu'} />
        <Buttons buttons={categories} />
        <Menu menuItems={menuItems} />
      </main>
    </>
  );
}

export default App;
