/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { FC, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navList } from "@/helpers/constant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/Store";
import { toogleNav } from "@/lib/redux/slices/navSlices";

const LandingNav: FC = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>("Accueil");
  const dispatch = useDispatch();
  const navState = useSelector((state: RootState) => state.nav.navState);
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <nav className="w-full overflow-hidden fixed lg:relative top-0 z-50">
      <div className="container mx-auto py-5 px-10 flex items-center justify-between bg-white">
        {/* Logo */}

        <img src="/logo.svg" alt="logo" className="object-cover" />

        {/* Menu icons */}
        <div
          className="menu-icons lg:hidden"
          onClick={() => dispatch(toogleNav())}
        >
          <img
            src="icons/menu.svg"
            alt="menu"
            className="object-cover w-[40px]"
          />
        </div>

        {/* Menu items */}
        <div className="lg:flex hidden">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-7">
              {navList.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  onClick={() => handleClick(`${item.label}`)}
                >
                  <Link href={item.url as string} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "hover:text-primary hover:border-b hover:border-primary",
                        activeLink === `${item.label}` &&
                          "border-b border-primary text-primary"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="button lg:flex gap-4 hidden">
          <Button variant="ghost">Se connecter</Button>
          <Button className="rounded-full">S'inscrire</Button>
        </div>
      </div>

      {/* Navbar Responsive */}
      <div
        className={`landing-nav-respons container mx-auto py-5 px-10 justify-center flex flex-col fixed w-full bg-red-300 z-50 items-center ${
          navState ? "flex" : "hidden"
        }`}
      >
        {" "}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-7">
            {navList.map((item, index) => (
              <NavigationMenuItem
                key={index}
                onClick={() => handleClick(`${item.label}`)}
              >
                <Link href={item.url as string} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "hover:text-primary hover:border-b hover:border-primary",
                      activeLink === `${item.label}` &&
                        "border-b border-primary text-primary"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="button flex flex-col gap-4 justify-center items-center">
          <div>
            <Button variant="ghost">Se connecter</Button>
          </div>
          <div>
            <Button className="rounded-full">S'inscrire</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
