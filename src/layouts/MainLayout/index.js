import { Outlet, Link } from "react-router-dom";
import { Menu } from "antd";
import { useState } from "react";

const MainLayout = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
    },
    {
      label: <Link to="/contact">Contact</Link>,
      key: "contact",
    },
    {
      label: <Link to="/questions">Game</Link>,
      key: "game",
    },
    {
      label: <Link to="/ranking">Ranking</Link>,
      key: "ranking",
    },
  ];
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />

      {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
      <Outlet />
    </div>
  );
};
export default MainLayout;
