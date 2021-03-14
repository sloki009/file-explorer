import { MdWifiTethering, MdDesktopWindows } from "react-icons/md";
import {
  BsClock,
  BsCloudDownload,
  BsImage,
  BsHouseDoor,
  BsMusicNoteBeamed,
  BsFilm,
  BsFolder,
  BsCloud,
  BsFileEarmarkText,
} from "react-icons/bs";
import { RiAppStoreLine } from "react-icons/ri";

export const STRUCTURE = [
  {
    root: [
      {
        groupName: "Favourites",
        children: [
          {
            id: "navFavouritesFolder:1",
            group: "Favourites",
            folder: "AirDrop",
            icon: <MdWifiTethering size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:2",
            group: "Favourites",
            folder: "Recents",
            icon: <BsClock size={20} style={{ color: "#6495ed" }} />,
            children: [
              {
                isFolder: true,
                folderName: "Music",
              },
              {
                isFolder: true,
                folderName: "Videos",
              },
              {
                isFolder: true,
                folderName: "Pictures",
              },
              {
                isFolder: true,
                folderName: "Movies",
              },
              {
                isFolder: true,
                folderName: "Documents",
              },
              {
                isFolder: true,
                folderName: "Public",
              },
            ],
          },
          {
            id: "navFavouritesFolder:3",
            group: "Favourites",
            folder: "Applications",
            icon: <RiAppStoreLine size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:4",
            group: "Favourites",
            folder: "Downloads",
            icon: <BsCloudDownload size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:5",
            group: "Favourites",
            folder: "Pictures",
            icon: <BsImage size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:6",
            group: "Favourites",
            folder: "Kirananto",
            icon: <BsHouseDoor size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:7",
            group: "Favourites",
            folder: "Music",
            icon: <BsMusicNoteBeamed size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:8",
            group: "Favourites",
            folder: "Movies",
            icon: <BsFilm size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "navFavouritesFolder:9",
            group: "Favourites",
            folder: "Creative Cloud Files",
            icon: <BsFolder size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
        ],
      },

      {
        groupName: "iCloud",
        children: [
          {
            id: "naviCloudFolder:1",
            group: "iCloud",
            folder: "iCloud Drive",
            icon: <BsCloud size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "naviCloudFolder:2",
            group: "iCloud",
            folder: "Documents",
            icon: <BsFileEarmarkText size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
          {
            id: "naviCloudFolder:3",
            group: "iCloud",
            folder: "Desktop",
            icon: <MdDesktopWindows size={20} style={{ color: "#6495ed" }} />,
            children: [],
          },
        ],
      },
    ],
  },
];
