import React from "react";

function ConvertObj (obj) {
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

export default function Studios({ studios }) {
  return (
    <li>{ConvertObj(studios)}</li>
  );
}