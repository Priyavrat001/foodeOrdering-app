import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import {CircleUserRound, Menu} from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import MobileLinks from "./MobileLinks";

const MobileNav = () => {
    const {isAuthenticated, loginWithRedirect, user} = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated?<span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-orange-500"/>
                        {user?.email}

                    </span>:
                    
                    <span>Welcome to FoodOrdering.net!</span>
                    }
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4 items-center">
                    {isAuthenticated?<MobileLinks/>:
                    <Button className="flex-1 font-bold bg-orange-500" onClick={()=> loginWithRedirect()}>
                        Login
                    </Button>
                    
                    }
                    
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav