/* eslint-disable react/no-unescaped-entities */
import React, { FC, Fragment, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navList } from "@/helpers/constant";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/Store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LandingNavResponsive: FC = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>("Accueil");
  const navState = useSelector((state: RootState) => state.nav.navState);
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <Fragment>
      <div className="bg-[#41404034] w-full h-full fixed md:flex hidden"></div>
      <div
        className={`landing-nav-respons container h-full w-full mx-auto flex z-50 items-center md:justify-end ${
          navState ? "slide-in" : "slide-out"
        }`}
      >
        {" "}
        <div className="flex flex-col w-screen md:w-[50%] bg-[#f8f9fa] h-screen px-10 justify-start py-5">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-5 items-center md:items-start md:px-4">
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
          <div className="button flex flex-col gap-5 mt-10 items-center md:items-start">
            <Link href="/login">
              <Button
                variant="ghost"
                className="font-semibold md:bg-white md:rounded-full"
              >
                Se connecter
              </Button>
            </Link>
            <div>
              <Button className="rounded-full">S'inscrire</Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingNavResponsive;
