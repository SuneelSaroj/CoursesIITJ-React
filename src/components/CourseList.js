import React from "react";
import "./CourseList.css";
import Semester1 from "./Semester1";
import Semester2 from "./Semester2";
const CourseList = () => {
  
  return (
    <div>
      <div class="text-center">
        <h2>First Year B.Tech. Courses Applicable from A.Y. 2019-20</h2>
      </div>
      <div class="accordion col-sm-7 offset-sm-2" id="accordionPanelsStayOpenExample">
      <Semester1/>
      <Semester2/>
     </div>

    </div>
  );
};

export default CourseList;
