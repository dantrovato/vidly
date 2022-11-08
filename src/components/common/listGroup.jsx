import React from "react";

// const ListGroup = ({
//   items,
//   textProperty,
//   valueProperty,
//   onItemSelect,
//   selectedItem,
// }) => {
//   return (
//     <ul className="list-group">
//       {items.map((item) => {
//         return (
//           <li
//             key={item[valueProperty]}
//             onClick={() => onItemSelect(item)}
//             className={
//               item === selectedItem
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//           >
//             {item[textProperty]}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id",
// };

const ListGroup = ({ items, textProperty, valueProperty, onGenreChange }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">Genres</li>
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            className="list-group-item"
            onClick={onGenreChange}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
