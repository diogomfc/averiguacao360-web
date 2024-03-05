import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps & {
  children: React.ReactNode
}

export function NavItemSheet({ children, ...props }: NavLinkProps) {
  const pathname = useLocation()

  return (
    <Link
      {...props}
      data-active={pathname === props.to}
      className="flex items-center  bg-white py-2 pl-6 pr-1 text-sm font-normal text-muted-foreground  hover:bg-slate-100 data-[active=true]:bg-slate-100  data-[active=true]:font-semibold data-[active=true]:text-[#042F6C]"
    >
      {children}
    </Link>
  )
}
