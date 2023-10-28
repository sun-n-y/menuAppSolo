import SingleMenuItem from './SingleMenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div className="menuItems">
      {menuItems.map((menuItem) => {
        return <SingleMenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
