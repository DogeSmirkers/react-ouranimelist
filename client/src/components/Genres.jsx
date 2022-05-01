import React from "react";

function convertObj (obj) {
  let list = "";
  for(let i=0; i< Object.keys(obj).length; i++) {
      if (i === 0 && i !== Object.keys(obj).length - 1) {
          list = obj[i].name + ", ";
      }
      else if (i !== Object.keys(obj).length - 1) {
          list += obj[i].name + ", ";
      }
      else {
          list += obj[i].name;
      }
  }
  list = list.trim();
  return list;
}

export default function Genres({ genres }) {
  return (
    <li>{convertObj(genres)}</li>
  );
}