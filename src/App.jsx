import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';
import Buttons from './Buttons';

const categories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const btnClick = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newMenu = menu.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <>
      <main>
        <Title title={'our menu'} />
        <Buttons buttons={categories} btnClick={btnClick} />
        <Menu menuItems={menuItems} />
      </main>
    </>
  );
}

export default App;
