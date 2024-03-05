import { LogOut, MessageCircleMore } from 'lucide-react'

import { Separator } from '../ui/separator'
import { AccountMenu } from './account-menu'
import { HubMenuSheet } from './hub-menu-sheet'

export function Header() {
  return (
    <header className="fixed top-0 z-50 col-span-full flex h-[60px] w-full items-center border  border-transparent border-b-[#51A6E3] bg-[#1D3150] px-4 text-[rgb(177,199,223)] lg:h-[60px] lg:px-4">
      <div className="mr-auto flex flex-shrink-0 items-center gap-4">
        <>
          <div className="flex gap-2 pl-4">
            <HubMenuSheet />
            <img
              className="overflow-hidden"
              src="logo-pam-shub-header.svg"
              width={205}
              height={28}
              alt="logo"
            />
          </div>
          <Separator orientation="vertical" className="h-12 bg-[#51A6E3]/10" />
        </>
      </div>
      <div className="ml-auto flex items-center gap-3 pr-4 lg:gap-4">
        <AccountMenu />

        {/* Notificações */}
        <button className='relative box-border flex h-[40px] items-center gap-2 rounded border  border-transparent bg-[#22385B] px-3 transition-colors duration-300  before:absolute before:-right-1   before:-top-1 before:h-[10px] before:w-[10px] before:rounded-full before:border before:border-solid before:border-[#72d9fb] before:bg-[#51A6E3] before:content-[""] hover:border-[#51A6E3]/20   hover:text-white'>
          <MessageCircleMore size={24} strokeWidth={1.5} />
          <p className="text-grey-100 flex h-12 w-5 items-center justify-center text-base font-bold leading-none">
            10
          </p>
        </button>

        {/* logoff */}
        <button
          onClick={() => {}}
          className="relative flex h-[40px] w-[40px] items-center justify-center rounded border border-transparent bg-[#22385B] transition-colors duration-300 hover:border-[#51A6E3]/20  hover:text-white"
        >
          <LogOut size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  )
}
