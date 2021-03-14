import React, { useState, useEffect } from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { createFolder, deleteItem } from "./fileOps";

function FilesViewer({ files, navSelectedFolder }) {
  const [filesData, setFilesData] = useState({});
  var data_file = {};
  var data_navfolder = {};
  useEffect(() => {
    const setInnitialState = () => {
      console.log("setfilsdata");
      setFilesData(files);
    };
    setInnitialState();
  }, [files]);
  useEffect(() => {
    const menu = document.querySelector(".menu");
    let menuVisible = false;

    const toggleMenu = (command) => {
      //console.log("in toggle..", menu, command);
      menu.style.display = command === "show" ? "block" : "none";
      menuVisible = !menuVisible;
    };

    const setPosition = ({ top, left }) => {
      menu.style.left = `${left}px`;
      menu.style.top = `${top}px`;
      toggleMenu("show");
    };

    window.addEventListener("click", (e) => {
      console.log("window click..");
      if (menuVisible) toggleMenu("hide");
    });

    document
      .getElementById("fileExp_items_cont")
      .addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const origin = {
          left: e.pageX,
          top: e.pageY,
        };
        setPosition(origin);
        return false;
      });

    Array.from(document.getElementsByClassName("f_card")).forEach(function (
      element
    ) {
      element.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        data_file = JSON?.parse(this?.getAttribute("data-file"));
        data_navfolder = JSON?.parse(this?.getAttribute("data-navfolder"));
        console.log("in fcard rigthclick...", data_file, data_navfolder);
        const origin = {
          left: e.pageX,
          top: e.pageY,
        };
        setPosition(origin);
        return false;
      });
    });
  });

  const handleContextMenuClick = (e, type) => {
    console.log("in context clicked..", navSelectedFolder);
    if (navSelectedFolder.group === "" || navSelectedFolder.folderName === "") {
      alert("Choose any folder from navigation pane to create folder.");
      return;
    }
    switch (type) {
      case "create folder":
        console.log("create clicked..");
        var temp = createFolder(navSelectedFolder);
        console.log("tetmp....", temp);
        setFilesData({ isSelected: true, data: temp });
        break;
      case "delete folder":
        console.log("delete clicked..");
        var temp = deleteItem(data_file, data_navfolder);
        setFilesData({ isSelected: true, data: temp });
        console.log(temp);
        break;
    }
  };
  return (
    <div className="fileExp_items_cont" id="fileExp_items_cont">
      <div className="file_items">
        <div className="file_cards" id="file_cards">
          {filesData.data?.map((file) => {
            return (
              <div
                className="f_card"
                key={file.folderName}
                data-file={JSON.stringify(file)}
                data-navfolder={JSON.stringify(navSelectedFolder)}
              >
                <BsFillFolderFill size={70} style={{ fill: "#6495ed" }} />
                <p style={{ textAlign: "center" }}>{file.folderName}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="menu">
        <ul className="menu-options">
          <li
            className="menu-option"
            onClick={(e) => handleContextMenuClick(e, "create folder")}
          >
            Create Folder
          </li>
          <li
            className="menu-option"
            onClick={(e) => handleContextMenuClick(e, "delete folder")}
          >
            Delete Folder
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilesViewer;
