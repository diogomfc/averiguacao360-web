import {
  Building,
  ChevronDownIcon,
  Mail,
  User,
  UserRoundCog,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu-user'

export function AccountMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" m-0 flex h-full w-full cursor-pointer rounded-none border-0 bg-transparent  p-0 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            {/* Perfil */}
            <div className="group flex cursor-pointer items-center gap-3 rounded-3xl border border-transparent bg-[#22385B] pr-3 transition-colors duration-300 hover:border-l-0  hover:border-[#51A6E3]/20 hover:text-white">
              <Avatar className=" border border-[#51A6E3]/10 bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20">
                <AvatarImage
                  src="https://media.licdn.com/dms/image/C4E03AQHle4csx8JFHA/profile-displayphoto-shrink_200_200/0/1651785432781?e=1715212800&v=beta&t=ZxV1hCCgG8vRDWtTKIT2dPUo7V4jV-KqB5X7N3CjaXY"
                  alt="Avatar"
                  className="h-full w-full rounded-full object-cover"
                />
                <AvatarFallback
                  title="Diogo Silva"
                  className="border border-[#51A6E3]/20 bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20"
                >
                  <User size={20} />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
                <span>Diogo Silva</span>
                <span className="flex text-xs font-normal text-muted-foreground">
                  Analista
                </span>
              </div>
              <ChevronDownIcon
                className="relative ml-1  h-3 w-3 transition duration-300 group-hover:text-[#20A6B9] group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1  md:w-[200px] lg:w-[365px] lg:grid-cols-[1fr_1fr]">
              <li className="">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col items-center  justify-center rounded-md bg-[#22385B] p-4 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 ">
                      <Avatar className="h-[95px] w-[95px] border border-[#51A6E3]/10 bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20">
                        <AvatarImage
                          src="https://media.licdn.com/dms/image/C4E03AQHle4csx8JFHA/profile-displayphoto-shrink_200_200/0/1651785432781?e=1715212800&v=beta&t=ZxV1hCCgG8vRDWtTKIT2dPUo7V4jV-KqB5X7N3CjaXY"
                          alt="Avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                        <AvatarFallback
                          title="Diogo Silva"
                          className="border border-[#51A6E3]/10 bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20"
                        >
                          <User
                            size={40}
                            color="rgb(32 166 185 / 0.8)"
                            strokeWidth={1}
                          />
                          {/* {usuario?.nome.charAt(0).toUpperCase()} */}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center justify-center text-[rgb(177,199,223)]">
                        <span className="text-xs font-light">Diogo Silva</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          Analista
                        </span>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="py-4">
                <Button
                  variant="ghost"
                  className="cursor-default hover:bg-transparent"
                >
                  <div className="flex items-center gap-1">
                    <Mail size={14} />
                    <span className="text-xs ">diogomfc@hotmail.com</span>
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="cursor-default hover:bg-transparent"
                >
                  <div className="flex items-center gap-1">
                    <Building size={14} />
                    <span className="text-xs ">GPS Pamcary</span>
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="hover:text-lightMode-colors-blue-300 flex items-center gap-1 transition-colors duration-300 hover:bg-transparent"
                >
                  <UserRoundCog size={14} />
                  <span className="text-xs ">Editar Perfil</span>
                </Button>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
