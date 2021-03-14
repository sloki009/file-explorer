import React, { useState, useEffect } from "react";
import Navpane from "./NavPane";
import FilesViewer from "./FilesViewer";

function FileExplorer() {
  const [files, setFiles] = useState({ isSelected: false, data: [] });
  const [navSelectedFolder, setNavSelectedFolder] = useState({
    group: "",
    folderName: "",
  });

  const handleSetFiles = (data) => {
    setFiles({ isSelected: true, data: data });
  };
  const handleNavFolder = (folderName) => {
    setNavSelectedFolder(folderName);
  };
  return (
    <div className="container">
      <div className="fileExplorer_container">
        <div className="fileExp">
          <Navpane
            handleSetFiles={handleSetFiles}
            handleNavFolder={handleNavFolder}
          />
          <FilesViewer files={files} navSelectedFolder={navSelectedFolder} />
        </div>
      </div>
    </div>
  );
}

export default FileExplorer;
