import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ padding: "0px", width: "100vw", background:"#47476b"}}
    >
      <div className="container-fluid" >
        <img
          src="http://academics.iitj.ac.in/wp-content/uploads/2022/03/edited_logoslogan_eng_hindi-copy.png"
          style={{ margin: "0 auto", maxWidth: "100%",minHeight:"80px",maxHeight:"150px" }}
          alt="Indian Institute of Technology Jodhpur"
        ></img>
      </div>
    </nav>
    // <nav>
    //   <ul className="menus">
    //     {menuItems.map((menu, index) => {
    //       const depthLevel = 0;
    //       return (
    //         <MenuItems
    //           items={menu}
    //           key={index}
    //           depthLevel={depthLevel}
    //         />
    //       );
    //     })}
    //   </ul>
    // </nav>
  );
};

export default Navbar;
