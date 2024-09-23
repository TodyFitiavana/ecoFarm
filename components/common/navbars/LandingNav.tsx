/* eslint-disable @next/next/no-img-element */
"use client";

import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navList } from "@/helpers/constant";
import { Button } from "@/components/ui/button";

const LandingNav: FC = (): JSX.Element => {
  return (
    <nav>
      <div className="container mx-auto py-5 px-10 flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover" />

        {/* Menu items */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-7">
            {navList.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.url as string} legacyBehavior passHref>
                  <NavigationMenuLink>{item.label}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Se connecter</Button>
      </div>
    </nav>
  );
};

export default LandingNav;
