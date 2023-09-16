"use client";

import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { useProModel } from "@/hooks/use-pro-model";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface NavbarProps {
  isPro: boolean;
}

const Navbar = ({ isPro }: NavbarProps) => {
  const proModal = useProModel();

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-blue-300",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        {isPro ? (
          <Button variant="premium" size="sm">
            Pro Member <Sparkles className="h-4 w-4 fill-white ml-2" />
          </Button>
        ) : (
          <Button variant="premium" size="sm" onClick={proModal.onOpen}>
            Upgrade <Sparkles className="h-4 w-4 fill-white ml-2" />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
