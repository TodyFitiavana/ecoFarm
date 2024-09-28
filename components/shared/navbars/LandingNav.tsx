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

const LandingNav: FC = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>("Accueil");
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <nav className="w-full overflow-hidden">
      <div className="container mx-auto py-5 px-10 flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover" />

        {/* Menu items */}
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
        <div className="button flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Se connecter</Button>
          </Link>
          <Link href="/signup/send-email">
            <Button className="rounded-full">S'inscrire</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
