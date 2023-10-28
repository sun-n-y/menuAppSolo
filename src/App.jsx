import { useState } from 'react';
import menu from './data';
import Title from './Title';

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <>
      <main>
        <Title title={'our menu'} />
      </main>
    </>
  );
}

export default App;
