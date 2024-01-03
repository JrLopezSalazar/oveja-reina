import React, { useState } from "react";
import { IconHome } from "./shared/Icons";

const NavBottom = () => {
    const [active, setActive] = useState(0);
    // const Menus = [
    //     { name: "Inicio", icon: "home", dis: "translate-x-0" },
    //     { name: "Menú", icon: "menu", dis: "translate-x-16" },
    //     { name: "Carrito", icon: "cart", dis: "translate-x-32" },
    //     { name: "Perfil", icon: "user", dis: "translate-x-48" },
    //     { name: "Favoritos", icon: "heart", dis: "translate-x-64" },
    //   ];

      const Menus = [
        { name: "Inicio", icon: "home-outline", dis: "translate-x-0" },
        { name: "Favoritos", icon: "heart-outline", dis: "translate-x-16" },
        { name: "Menú", icon: "menu-outline", dis: "translate-x-32" },
        { name: "Carrito", icon: "cart-outline", dis: "translate-x-48" },
        { name: "Perfil", icon: "person-outline", dis: "translate-x-64" },
      ];

  return (
    <div className="bg-[#F0743E] max-h-[4.4rem] px-6 rounded-t-xl md:hidden">
      <ul className="flex relative justify-between flex-wrap">
        <span
          className={`bg-[#AAD59E] duration-500  ${Menus[active].dis} border-4 border-gray-900 h-[68px] w-[68px] absolute
         -top-5 rounded-full`}
        >
          {/* <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span> */}
          {/* <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span> */}
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6 text-2xl"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-black"
                }`}
              >
                {/* <box-icon name={menu.icon}></box-icon> */}
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBottom