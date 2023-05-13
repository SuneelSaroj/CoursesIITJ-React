import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const Semester1 = () => {
  const [sheetData, setSheetData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  function filterData(data, searchTerm) {
    return data.filter((row) =>
      row[0].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  useEffect(() => {
    const apiKey = "AIzaSyDR8u53Gl44gyLerE_FydLxeZkUaeukgQo";
    const sheetUrl =
      "https://docs.google.com/spreadsheets/d/15YJId4wJ4EFRB_TZvOD4mE45j0cJCLB7kEXH2P6QQ-w/edit?usp=sharing";
    const sheetId = sheetUrl.match(/[-\w]{25,}/);
    const range = "Semester_1!A2:BE200";
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setSheetData(data.values))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filtered = filterData(sheetData, searchTerm);
      setFilteredData(filtered);
      setShowFilteredData(true);
    } else {
      setShowFilteredData(false);
    }
  }, [sheetData, searchTerm]);
  return (
    <div>
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="panelsStayOpen-headingOne"
          style={{ margin: "0" }}
        >
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <h5>Semester 1</h5>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
          style={{ paddingTop: "10px"}}
        >
          <div>
            <div>
              <input
                style={{ padding: "10px", marginLeft: "50%", width: "40%", border:"none", border:"2px solid black", borderRadius:"8px" }}
                type="search"
                placeholder="Search Courses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="accordion-body" style={{ maxHeight:"50vh", overflowX:"auto"}}>
            {showFilteredData
              ? filteredData.map((row, i) => <ListItem data={row} />)
              : sheetData.map((row, index) => <ListItem data={row} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semester1;
