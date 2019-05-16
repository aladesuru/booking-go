import React from "react";

// import components
import List from "./List.js";
import NoRecordFound from "./NoRecordFound.js";

const ResultList = props => {
  console.log(props.data);
  let result = props.data;
  let list;
  if (result.length > 1) {
    list = <List data={result} />;
  } else {
    list = <NoRecordFound />;
  }

  return <div className="result-list">{list}</div>;
};

export default ResultList;
