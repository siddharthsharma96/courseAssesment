const Header = () => {
  return (
    <div className="header">
      <img src="/utils/logo.jpeg" alt="a" />

      <div className="dropbtn">
        <select className="dropbtn" name="select">
          <option>En</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
