import ListItems from "./ListItems";

const ListContainer = () => {
  const utils = [
    {
      id: 0,
      image: "/utils/video.jpeg",
      content1: "Chapter 1: Electric Charges and Fields - Introduction",
      content2:
        "Electrostatics deals deals with the study of forces, Fields and potentials arising from static Charges",
      btncontent: "Watch Video",
    },
    {
      id: 1,
      image: "/utils/edit.jpeg",
      content1: "Chapter 2: Electric Charges and Fields - Introduction",
      content2:
        "Electrostatics deals deals with the study of forces, Fields and potentials arising from static Charges",
      btncontent: "View Document",
    },
    {
      id: 2,
      image: "/utils/edit.jpeg",
      content1: "Chapter 3: Electric Charges and Fields - Introduction",
      content2:
        "Electrostatics deals deals with the study of forces, Fields and potentials arising from static Charges",
      btncontent: "View Document",
    },
    {
      id: 3,
      image: "/utils/edit.jpeg",
      content1: "Chapter 4: Electric Charges and Fields - Introduction",
      content2:
        "Electrostatics deals deals with the study of forces, Fields and potentials arising from static Charges",
      btncontent: "View Document",
    },
  ];
  return (
    <ul className="listContainer">
      {utils.map((e) => (
        <ListItems key={e.id} e={e} />
      ))}
    </ul>
  );
};
export default ListContainer;
