// import React, { useState, useEffect } from "react";
// import * as s from "./Sidebar.styles";
// import "../../../src/index.css";

// const Sidebar = (props) => {
//   const {
//     SidebarHeader = {
//       fullName: "",
//       shortName: "",
//     },
//     sideItems = [],
//     fonts = {
//       header: "",
//       menu: "",
//     },
//   } = props;

//   // State
//   const [selected, setSelectedMenuItem] = useState(sideItems[0].name);
//   const [isSidebarOpen, setSidebarState] = useState(true);
//   const [head, setHead] = useState(SidebarHeader.fullName);
//   const [subMenusStates, setSubMenusStates] = useState({});

//   const hasSubMenus = !!sideItems[0].subMenuItems.length;
//   // Effects
//   //Update of header state
//   useEffect(() => {
//     isSidebarOpen
//       ? setTimeout(() => setHead(SidebarHeader.fullName), 200)
//       : setHead(SidebarHeader.shortName);
//   }, [isSidebarOpen, SidebarHeader]);

//   // Update of sidebar state
//   useEffect(() => {
//     const updateWindowWidth = () => {
//       if (window.innerWidth < 1280) setSidebarState(false);
//       else setSidebarState(true);
//     };
//     window.addEventListener("resize", updateWindowWidth);
//     return () => window.addEventListener("resize", updateWindowWidth);
//   }, [isSidebarOpen]);

//   const isItemSelected = selected === sideItems[0].name;
//   // const subMenus = sideItems[0].subMenuItems.map((subMenuItem, subMenuItemIndex) => {
//   //   return(
//   //     <s.subMenuItem key = {subMenuItemIndex} > {subMenuItem.name} </s.subMenuItem>
//   //   )
//   // });

//   const handleMenuItemClick = (name, index) => {
//     console.log("index", index);
//     setSelectedMenuItem(name);
//   };

//   return (
//     <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
//       <s.SidebarHeader font={fonts.header}>{head}</s.SidebarHeader>
//       <s.MenuItemContainer
//         font={fonts.menu}
//         isSidebarOpen={isSidebarOpen}
//         selected={isItemSelected}
//         onClick={() => handleMenuItemClick(sideItems[0].name)}
//       >
//         {/* <s.Text isSidebarOpen = {isSidebarOpen}>{sideItems[0].name}</s.Text> */}
//         {isSidebarOpen ? (
//           <s.DropdownIcon isSidebarOpen={isSidebarOpen}>
//             <div class="dropdown">
//               <button
//                 class="btn btn-light override btn-lg  dropdown-toggle"
//                 type="button"
//                 id="dropdownMenuButton1"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <s.Icon src={sideItems[0].icon} /> Users List
//               </button>
//               <ul
//                 class="dropdown-menu overridedropdown-menu"
//                 aria-labelledby="dropdownMenuButton1"
//               >
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     User 1
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     User 2
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     User 3
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </s.DropdownIcon>
//         ) : (
//           <s.DropdownIcon>
//             <div class="dropdown">
//               <button
//                 class="btn btn-light override1 btn-lg  dropdown-toggle"
//                 type="button"
//                 id="dropdownMenuButton1"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <s.Icon src={sideItems[0].icon} />
//               </button>
//               <ul
//                 class="dropdown-menu overridedropdown-menu"
//                 aria-labelledby="dropdownMenuButton1"
//               >
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     User 1
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     User 2
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     User 3
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </s.DropdownIcon>
//         )}
//       </s.MenuItemContainer>
//       {/* <s.subMenuContainer isSidebarOpen = {isSidebarOpen}>{subMenus}</s.subMenuContainer> */}

//       <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
//         <s.Toggler />
//       </s.TogglerContainer>
//     </s.SidebarContainer>
//   );
// };

// export default Sidebar;
