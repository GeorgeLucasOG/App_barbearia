"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import SideMenu from "./sidemenu";


const Header = () => {

    const { data, status} = useSession();
    
    const handleLogoutClick = () => signOut();

    const handleLoginClick = () =>signIn("google");

    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Link href="/">
                    <Image src="/logo.png" alt="FSW Barbar" height={22} width={ 120 }   />
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} size={"icon"}>
                            <MenuIcon size={16}/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}

export default Header;