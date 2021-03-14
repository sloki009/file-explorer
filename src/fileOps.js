import { STRUCTURE, STRUCTURE as structure } from "./config";

export function createFolder(data) {
  let child = structure[0].root?.find((item) => {
    return item.groupName === data.group;
  });

  let folderToBeCreated = child.children?.find((item) => {
    return item.folder === data.folderName;
  });
  folderToBeCreated.children?.push(
    getNewFolderObj(folderToBeCreated.children.length + 1)
  );
  console.log(folderToBeCreated, folderToBeCreated.children);
  console.log("structure after foldercreate.....", STRUCTURE);
  return folderToBeCreated.children;
}

function getNewFolderObj(count) {
  let temp = {
    isFolder: true,
    folderName: `New Folder(${count})`,
  };
  return temp;
}

export function deleteItem(delItem, data) {
  let child = structure[0].root?.find((item) => {
    return item.groupName === data.group;
  });
  let folder = child.children?.find((item) => {
    return item.folder === data.folderName;
  });
  let finalRes = folder.children?.filter(
    (item) => item.folderName !== delItem.folderName
  );
  folder.children = finalRes;
  return folder.children;
}
