import NavItems from "./NavItems";
const NavBar = ({ handleItemClick, activeItem }) => {
  const utils = [
    {
      id: 0,
      text: "Course Overview",
      path: "/",
    },
    {
      id: 1,
      text: "Course Content",
      path: "/course-content",
    },
    {
      id: 2,
      text: "Student",
      path: "/Student",
    },

    {
      id: 3,
      text: "Assesment",
      path: "/assesment",
    },
    {
      id: 4,
      text: "forum",
      path: "/forum",
    },
  ];
  return (
    <ul className="navbar">
      {utils.map((item) => (
        <NavItems
          item={item}
          handleItemClick={handleItemClick}
          activeItem={activeItem}
          key={item.id}
        />
      ))}
    </ul>
  );
};
export default NavBar;
