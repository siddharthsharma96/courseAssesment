import { NavLink } from "react-router-dom";
const NavItems = ({ item, handleItemClick, activeItem }) => {
  const handler = (index = 0) => {
    handleItemClick(index);
  };
  return (
    <li
      className={`navItem ${activeItem === item.id ? "actives" : ""}`}
      onClick={() => {
        handler(item.id);
      }}
      key={item.id}
    >
      <NavLink to={item.path}>{item.text}</NavLink>
    </li>
  );
};
export default NavItems;
