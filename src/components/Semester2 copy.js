import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const Semester2 = () => {
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
    const range = "Semester_2!A2:BE200";
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
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo" style={{ margin: "0" }}>
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <h5>Semester 2</h5>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
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

export default Semester2;
