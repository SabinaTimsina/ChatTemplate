import React from "react";
import * as s from "./Sidebar.styles";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";

function Sidebar() {
  return (
    <s.SidebarContainer>
      <a
        href="/"
        className="d-flex align-items-center ps-3 pt-3 pb-3 mb-md-0 me-md-auto fs-5 text-white text-decoration-none "
      >
        CR {" "} -<span className="fs-5 d-none d-sm-inline"> {" "} Chat Room</span>
      </a>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li className="nav-item">
          <a href="#" className="nav-link align-middle">
            <AiOutlineHome />{" "}
            <span className="ms-1 d-none d-sm-inline">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            className="nav-link align-middle"
          >
            <AiOutlineTeam />{" "}
            <span className="ms-1 d-none d-sm-inline">User Lists</span>{" "}
          </a>
          <ul
            className="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <a href="#" className="nav-link">
                {" "}
                <span className="d-none d-sm-inline">User</span> 1{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                {" "}
                <span className="d-none d-sm-inline">User</span> 2{" "}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </s.SidebarContainer>
  );
}

export default Sidebar;
