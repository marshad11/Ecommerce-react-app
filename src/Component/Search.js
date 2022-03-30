import React, { useState } from "react";
import datalist from "./item-data.json";
import ItemList from "./ItemList";

function Search() {
  const [searctText, setSearctText] = useState("");
  const [data, setData] = useState(datalist);

  const filterData = (e) => {
    let find = e.target.value;
    setSearctText(find);
    const newFilter = data.filter((item) => {
      return item.title.toLowerCase().includes(find.toLowerCase());
    });

    if (find === "") {
      setData(datalist);
    } else {
      setData(newFilter);
    }
  };

  var value = data.map((item) => {
    return <ItemList key={item.id} item={item} />;
  });

  return (
    <>
      <div className="container ">
        <div class="d-flex me-1 my-2 ">
          <input
            class="form-control me-2 my-5"
            type="text"
            value={searctText}
            onChange={filterData}
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button class="btn btn-outline-success" type="text" onClick={input}>
              Search
            </button> */}
        </div>
        <div className="clearboth"></div>
        <div className="text-center w-100 text-muted">
          {data.length === 0 && <span>No records found to display!</span>}
        </div>
        <div className="row m-2">{value}</div>
      </div>
    </>
  );
}

export default Search;
