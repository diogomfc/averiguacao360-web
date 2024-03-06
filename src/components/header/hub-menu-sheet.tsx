import { HelpCircle, LayoutGrid, Lock, Settings } from 'lucide-react'

import { NavItemSheet } from '@/components/navigation/nav-item-sheet'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet-hub-menu'

export function HubMenuSheet() {
  return (
    <>
      <div className="">
        {/* Logo */}
        <Sheet>
          {/* Header logo - Open */}
          <div className="flex items-center gap-2">
            <SheetTrigger asChild className="cursor-pointer">
              {/* Icon Open */}
              <div className=" flex  h-[40px] w-[40px] items-center justify-center rounded-sm border border-transparent bg-[#22385B] py-2 transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                <img
                  src="navigation/icons/icon-open-sheet.svg"
                  alt="icon-open-sheet"
                  width={16}
                  height={16}
                />
              </div>
            </SheetTrigger>
            {/* Logo */}
            {/* <div className="overflow-hidden ">
              <img
                src="/img/logo-pam-shub-header.svg"
                width={205}
                height={28}
                alt="logo"
              />
            </div> */}
          </div>
          <SheetContent side="left" className="w-[318px] p-0 no-underline ">
            <SheetHeader className="bg-[#1D3150]">
              {/* Header Logo - Close */}
              <div className="flex h-[60px] items-center gap-2 overflow-hidden pl-8">
                <SheetClose asChild className="cursor-pointer ">
                  <div className=" flex  h-[40px] w-[40px] items-center justify-center rounded-sm border border-transparent bg-[#22385B] py-2 transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                    <img
                      src="navigation/icons/icon-close-sheet.svg"
                      alt="icon-open-sheet"
                      width={16}
                      height={16}
                    />
                  </div>
                </SheetClose>
                {/* Logo */}
                <img
                  src="logo-pam-shub-header.svg"
                  width={205}
                  height={28}
                  alt="logo"
                />
              </div>
            </SheetHeader>
            <div className="grid pb-1 pt-2">
              <NavItemSheet to="/hub">
                <div className="flex items-center gap-2 hover:font-semibold">
                  <div className="flex items-center justify-center px-2">
                    <LayoutGrid size={24} strokeWidth={1.5} className="" />
                  </div>
                  <div>Smart Hub</div>
                </div>
              </NavItemSheet>
              <NavItemSheet to="/settings">
                <div className="flex items-center gap-2 hover:font-semibold">
                  <div className="flex items-center justify-center px-2 ">
                    <Settings size={24} strokeWidth={1.5} className="" />
                  </div>
                  <div>Configurações</div>
                </div>
              </NavItemSheet>
              <NavItemSheet to="/help">
                <div className="flex items-center gap-2 hover:font-semibold">
                  <div className="flex items-center justify-center px-2 ">
                    <HelpCircle size={24} strokeWidth={1.5} className="" />
                  </div>
                  <div>Ajuda</div>
                </div>
              </NavItemSheet>
            </div>
            <div className="grid w-full py-2 ">
              <div className="flex items-center gap-4 pb-2 pl-6">
                <div className="font-bold ">Aplicativos</div>
              </div>

              <div className="flex flex-col gap-1 ">
                <NavItemSheet to="/averiguacao360">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:bg-white ">
                      <img
                        src="navigation/icons/icon-link-averiguacao360.svg"
                        alt="icon-apps"
                        width={25}
                        height={25}
                        className="relative right-0.5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold ">
                        Averiguação360
                      </span>
                      <span className="text-[11.63px] font-normal text-muted-foreground">
                        Gestão inteligente de averiguação
                      </span>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet to="/#">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                      <img
                        src="navigation/icons/icon-link-seach-pro.svg"
                        alt="icon-apps"
                        width={22}
                        height={22}
                        className="left-0.4 relative top-0.5"
                      />
                    </div>

                    <div className="flex justify-between gap-1 ">
                      <div className="flex">
                        <div className="flex flex-col ">
                          <span className="text-xs font-semibold ">
                            SeachPro
                          </span>
                          <span className="w-[210px] text-[11.63px] font-normal text-muted-foreground">
                            Pesquisa Inteligente
                          </span>
                        </div>
                        <div className="flex items-center text-[#CFE5F6]">
                          <Lock size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet to="/#">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                      <img
                        src="navigation/icons/icon-link-carga-safe.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.5"
                      />
                    </div>
                    <div className="flex ">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold ">
                          CargaSafe
                        </span>
                        <span className="w-[210px] text-[11.63px] font-normal  text-muted-foreground">
                          Mapeamento Inteligente
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet to="/#">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                      <img
                        src="navigation/icons/icon-link-map-link.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.5"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold ">MapLink</span>
                        <span className="w-[210px] text-[11.63px] font-normal text-muted-foreground">
                          Integração Estratégica de Dados
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet to="/#">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                      <img
                        src="navigation/icons/icon-link-client-base2.svg"
                        alt="icon-apps"
                        width={23}
                        height={23}
                        className="left-0.4 relative"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold ">
                          ClientBase
                        </span>
                        <span className="w-[210px] text-[11.63px] font-normal text-muted-foreground">
                          Gestão de Clientes Simplificada
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet to="/#">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                      <img
                        src="navigation/icons/icon-link-safe-logix.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.5"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold ">
                          SafeLogix
                        </span>
                        <span className="w-[210px] text-[11.63px] font-normal text-muted-foreground">
                          Registro de Motoristas e Ajudantes
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet to="/#">
                  <div className="flex items-center gap-2">
                    <div className=" flex  h-9 w-9 items-center justify-center rounded-full border  border-blue-200 bg-[#CFE5F6] transition-colors  duration-300  hover:border-[#51A6E3]/20 hover:text-white ">
                      <img
                        src="navigation/icons/icon-link-cargo-guardian.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="left-0.4 relative"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold ">
                          CargoGuardian
                        </span>
                        <span className="w-[210px] text-[11.63px] font-normal text-muted-foreground">
                          Inteligência na Recuperação de Cargas
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
