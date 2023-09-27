"use client";

import { useState } from "react";
import { TabList, tabListMock } from "../tab";

export function Header() {
  const [isMenuShow, setMenuShow] = useState(false);

  return (
    <header>
      <div
        style={{
          position: "fixed",
          backgroundColor: "red",
          display: isMenuShow ? "flex" : "none",
          height: "100%",
        }}
      >
        <TabList tabList={tabListMock} />
      </div>
      <div>Nekuha</div>
      <div onClick={() => setMenuShow(true)}>메뉴</div>
    </header>
  );
}
