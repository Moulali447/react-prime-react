// src/components/Header.tsx
import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Styles.css";
const Header: React.FC = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Products",
      icon: "pi pi-list",
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
    },
  ];
  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    />
  );

  const end = (
    <div
      style={{
        backgroundColor: "var(--pink-600)",
        color: "var(--pink-50)",
      }}
      className="flex align-items-center gap-2"
    >
      <InputText placeholder="Search" type="text" className="p-inputtext-sm" />
      <Button
        label="Login"
        icon="pi pi-user"
        severity="secondary"
        size="small"
      />
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-5 header-bg-color">
      <Menubar
        model={items}
        start={start}
        end={end}
        className="shadow-2 text-white header-bg-color px-4"
        pt={{
          menuitem: {
            className: "text-white hover:text-yellow-300",
          },
        }}
      />
    </div>
  );
};

export default Header;
