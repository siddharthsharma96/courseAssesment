const ListItems = ({ e }) => {
  return (
    <li className="listitem">
      <img src="/utils/edit.jpeg" alt="a" />
      <img src={e.image} alt="a" />
      <div className="listCont">
        <h4>{e.content1}</h4>
        <span>{e.content2}</span>
      </div>
      <button className="itemBtn">{e.btncontent}</button>
      <img src="/utils/threedots.jpeg" alt="a" />
    </li>
  );
};
export default ListItems;
