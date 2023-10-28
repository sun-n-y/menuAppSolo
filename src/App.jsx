import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <>
      <main>
        <Title title={'our menu'} />
        <Menu menuItems={menuItems} />
      </main>
    </>
  );
}

export default App;
