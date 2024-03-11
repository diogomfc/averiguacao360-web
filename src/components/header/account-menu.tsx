import { useQuery } from '@tanstack/react-query'
import {
  Building,
  ChevronDownIcon,
  LogOut,
  Mail,
  User,
  UserRoundCog,
} from 'lucide-react'
import { destroyCookie } from 'nookies'
import { Link, useNavigate } from 'react-router-dom'

import { getProfile } from '@/api/get-profile'
import { env } from '@/env'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu-user'
import { Skeleton } from '../ui/skeleton'
import { StoreProfileDialog } from './store-profile-dialog'

export function AccountMenu() {
  const navigate = useNavigate()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  // Função para fazer o logout
  const signOut = async () => {
    destroyCookie(undefined, 'auth.token')
    navigate('/', { replace: true })
  }

  return (
    <Dialog>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" m-0 flex h-full w-full cursor-pointer rounded-none border-0 bg-transparent  p-0 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
              {/* Perfil */}
              <div className="group flex cursor-pointer items-center gap-3 rounded-3xl border border-transparent bg-[#22385B] pr-3 transition-colors duration-300 hover:border-l-0  hover:border-[#51A6E3]/20">
                {isLoadingProfile ? (
                  <>
                    <div>
                      <Skeleton className="h-8 w-8 rounded-full bg-muted-foreground " />
                    </div>
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-32 bg-muted-foreground" />
                      <Skeleton className="h-2 w-24 bg-muted-foreground" />
                    </div>
                  </>
                ) : (
                  <>
                    <Avatar className=" border border-[#51A6E3]/10 bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20">
                      <AvatarImage
                        src={`${env.VITE_API_URL}/images/avatar/${profile?.avatar}`}
                        alt="Avatar"
                        className="h-full w-full rounded-full object-cover"
                      />
                      <AvatarFallback
                        title={profile?.nome}
                        className=" bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20"
                      >
                        <User
                          size={20}
                          className="text-[rgb(177,199,223)] group-hover:text-white"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ">
                      <span className="text-[rgb(177,199,223)] group-hover:text-white">
                        {profile?.nome}
                      </span>
                      <span className="flex text-xs font-normal text-muted-foreground">
                        {profile?.funcao}
                      </span>
                    </div>
                  </>
                )}

                <ChevronDownIcon
                  className="relative ml-1  h-3 w-3 transition duration-300 group-hover:text-[#20A6B9] group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="w-[250px]">
                <li className="">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col items-center  justify-center  bg-[#22385B] p-4 no-underline outline-none focus:shadow-md"
                      to="#"
                    >
                      <div className="flex flex-col items-center justify-center gap-4 ">
                        <Avatar className="h-[95px] w-[95px] border border-[#51A6E3]/10 bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20">
                          <AvatarImage
                            src={`${env.VITE_API_URL}/images/avatar/${profile?.avatar}`}
                            alt="Avatar"
                            className="h-full w-full rounded-full object-cover"
                          />
                          <AvatarFallback
                            title={profile?.nome}
                            className=" bg-[#1D3150] p-1 group-hover:border-[#51A6E3]/20"
                          >
                            <User
                              size={40}
                              className="text-[rgb(177,199,223)]"
                              strokeWidth={1}
                            />
                            {/* {usuario?.nome.charAt(0).toUpperCase()} */}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center justify-center text-[rgb(177,199,223)]">
                          <span className="text-center text-xs font-light">
                            {profile?.nome}
                          </span>
                          <span className="text-xs font-normal text-muted-foreground">
                            {profile?.funcao}
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
                      <span className="text-xs ">{profile?.email}</span>
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

                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 transition-colors duration-300 hover:bg-transparent hover:text-primary"
                    >
                      <UserRoundCog size={14} />
                      <span className="text-xs ">Editar Perfil</span>
                    </Button>
                  </DialogTrigger>

                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 transition-colors duration-300 hover:bg-transparent hover:text-red-500"
                    onClick={signOut}
                  >
                    <LogOut size={14} />
                    <span className="text-xs ">Sair</span>
                  </Button>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
