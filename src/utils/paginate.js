import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // my vanilla js
  // console.log("my code :", items.slice(startIndex, startIndex + pageSize));

  // lodash: tiny bit less mathsy
  return _(items).slice(startIndex).take(pageSize).value();
}
