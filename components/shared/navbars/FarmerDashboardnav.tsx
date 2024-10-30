/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { farmerNavData } from "@/helpers/constant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const FarmerDashboardNav: FC = (): JSX.Element => {
  const pathName = usePathname();
  return (
    <div className="farmer-nav h-[calc(100vh-80px)] p-5 fixed mt-[77px] z-40">
      <nav className="w-[300px] h-full rounded-xl bg-white flex flex-col justify-between">
        <NavigationMenu className="ml-5 mr-5">
          <NavigationMenuList className="space-y-5">
            {farmerNavData.map((item, index) => (
              <NavigationMenuItem key={index} className="mt-5 flex flex-col">
                <NavigationMenuTrigger
                  className={cn(
                    "font-semibold text-[15px] uppercase text-start ml-5"
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className={cn(
                      "flex items-center gap-5  pl-10 cursor-pointer p-4",
                      pathName === item.urlPage
                        ? "border-primary text-primary bg-[#F3F9FA] p-4 rounded-lg"
                        : "text-[#494848]"
                    )}
                  >
                    <img
                      src={
                        pathName === item.urlPage
                          ? `${item.urlIconActive}`
                          : `${item.urlIcon}`
                      }
                      alt={item.label}
                      className="w-5 h-5 object-cover"
                    />
                    {item.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex justify-center">
          <Button variant="ghost" className="flex gap-5">
            <img src="/logout.svg" alt="logout" className="w-5 h-5" /> Se
            déconnecter
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default FarmerDashboardNav;
