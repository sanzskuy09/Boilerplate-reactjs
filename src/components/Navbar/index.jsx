import React from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Dashboard Monitoring",
    "group-1",
    null,
    [
      getItem(<Link to="/dashboard/overdue">Overdue</Link>, "overdue"),
      getItem(<Link to="/dashboard/move-to">Move To</Link>, "move-to"),
      getItem(
        <Link to="/dashboard/potensial-move-to">Potensial Move To</Link>,
        "potensial-move-to"
      ),
      getItem(<Link to="/dashboard/duedate">Duedate</Link>, "duedate"),
    ],
    "group"
  ),
  getItem(
    "Assignment",
    "group-2",
    null,
    [
      getItem(
        <Link to="/assignment/assignment-employee">Assignment Employee</Link>,
        "assignment-employee"
      ),
      getItem(
        <Link to="/assignment/assignment-coverage-area">
          Assignment Coverage Area
        </Link>,
        "assignment-coverage-area"
      ),
    ],
    "group"
  ),
  getItem(
    "Collection Activity",
    "group-3",
    null,
    [
      getItem(<Link to="/activity/visit">Visit</Link>, "visit"),
      getItem(<Link to="/activity/not-visit">Non Visit</Link>, "non-visit"),
    ],
    "group"
  ),
  getItem(
    "Document Management",
    "group-4",
    null,
    [
      getItem(
        <Link to="/document/warning-letter">Warning Letter</Link>,
        "warning-letter"
      ),
      getItem(
        <Link to="/document/reposition-letter">Reposition Letter</Link>,
        "reposition-letter"
      ),
      getItem(
        <Link to="/document/reposses-asset">Reposses Aset</Link>,
        "reposses-asset"
      ),
    ],
    "group"
  ),
];

const Navbar = () => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <div className=" h-screen">
      <Link to="/">
        <h2 className="mt-4 mb-8 text-center font-semibold text-2xl">
          Collection App
        </h2>
      </Link>

      <Menu
        // onClick={onClick}
        style={{
          width: 256,
        }}
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Navbar;
