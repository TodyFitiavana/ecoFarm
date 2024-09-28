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
import { useDispatch } from "react-redux";
import { toogleNav } from "@/lib/redux/slices/navSlices";
import LandingNavResponsive from "./LandingNavResponsive";

const LandingNav: FC = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>("Accueil");
  const dispatch = useDispatch();
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
            className="object-cover w-[35px]"
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
      <div className="lg:hidden flex">
        <LandingNavResponsive />
      </div>
    </nav>
  );
};

export default LandingNav;
