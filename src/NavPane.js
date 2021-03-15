import React, { useState, useEffect } from "react";
import { STRUCTURE } from "./config";
// import { MdWifiTethering } from "react-icons/md";

function NavPane({ handleSetFiles, handleNavFolder }) {
  const [structure, setStructure] = useState([]);
  const [navSelectedFolder, setNavSelectedFolder] = useState("");
  useEffect(() => {
    const setInitial = () => {
      setStructure(STRUCTURE[0].root);
    };
    setInitial();
  }, [STRUCTURE]);
  const handleNavFolderClick = (e, data) => {
    //e.preventDefault();
    console.log("nav clicked", e.target);
    document.querySelector(".nav_active")?.classList?.remove("nav_active");
    //e.target.className = "nav_active";
    e.target.setAttribute("class", "nav_active");
    handleNavFolder({ group: data.group, folderName: data.folder });
    handleSetFiles(data.children);
  };

  const getNavSelectedFolder = () => {
    return navSelectedFolder;
  };
  return (
    <div className="navpane">
      {structure?.map((item, index) => {
        return (
          <div key={item.groupName} className="nav_folder_group">
            <p className="nav_folder_name">{item.groupName}</p>
            <ul className="nav_folder_links">
              {item.children?.map((child) => {
                return (
                  <li
                    key={child.id}
                    onClick={(e) => handleNavFolderClick(e, child)}
                  >
                    {child.icon}
                    {/* <child.icon size={20} style={{ color: "#3c3cd6" }} /> */}
                    {child.folder}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default NavPane;
