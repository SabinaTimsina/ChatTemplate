import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  // width: ${(p) => (p.isSidebarOpen ? "20%" : "5%")};
  max-width: 280px;
  width: 20%;
  min-width: 80px;
  position: relative;
  transition: 0.2s ease-in all;
  background-color: #d387ab;
  background-image: linear-gradient(315deg, #d387ab 0%, #b279a7 74%);
  
`;
// export const SidebarHeader = styled.h3`
//   padding: 20px;
//   text-aligh: center;
//   margin-bottom: 10px;
//   letter-spacing: 4px;
//   font-family: ${(p) => p.font};
// `;

// export const MenuItemContainer = styled.div`
// ${(p) =>
//   !p.isSidebarOpen &&
//   `
// ${p.selected && `background-color: rgba(255,255,255,0.6)`};`}

// padding:6px 20px;
// //color: ${(p) => (p.selected ? "rgba(255,255,255)" : "rgba(19,15,64)")};
// font-weight:600;
// font-family: ${(p) => p.font};
// cursor: pointer;

// &:hover{
//     color: rgba(255,255,255);
//     transition: .1s ease-in all;
// }

// &:after{
//     content: '',
//     border: 1px solid white,
// }

// position: relative //dropdown
// `;

// export const Text = styled.p`
//   display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
//   padding-left: 10px;
// `;
// export const Icon = styled.img`
//   ${(p) => p.isSidebarOpen && `transition: .2s ease-in padding-right`}
//   height: 31px;
//   width: 31px;
//   margin-right: ${(p) => (p.isSidebarOpen ? "20px" : "4px")};
// `;

// // Toggler
// export const TogglerContainer = styled.div`
//   position: absolute;
//   width: 30%;
//   bottom: 10%;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
// `;
// export const Toggler = styled.div`
//   height: 40px;
//   cursor: pointer;
//   position: relative; //horizontal lines

//   &:after {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0.25em;
//     height: 0.1em;
//     width: 100%;
//     background: #fff;
//     box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
//   }
// `;

// // Dropdown Icon
// export const DropdownIcon = styled.span`
//   position: absolute;
//   top: 1px;
//   // border: solid ${(p) =>
//     p.selected ? "rgba(255,255,255)" : "rgba(19,15,64)"};;
//   border-width: 0 1px 1px 0;
//   padding: 3px;
//   // transform: rotate(45deg);
//   right: 117px;
// `;

// // SubMenu
// export const subMenuContainer = styled.div`
//   font-size: 14px;
//   ${(p) => !p.isSidebarOpen && `text-align: center`};
//   ${(p) => p.isSidebarOpen && `padding-left: 20%`};
// `;
// export const subMenuItem = styled.div`
//   color: rgba(19, 15, 64);
//   cursor: pointer;
//   &:hover {
//     color: rgba(255, 255, 255);
//   }
// `;
// export const drpdwnOvr = styled.div`
//   inset: -3px auto auto 137px !important;
// `;
