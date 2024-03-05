import { Link, LinkProps, useLocation } from 'react-router-dom'

// export type NavLinkProps = LinkProps & {
//   children: React.ReactNode
// }

export type NavLinkProps = LinkProps

export function NavItemSheet(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center bg-white py-2 pl-6 pr-1 text-sm font-normal text-muted-foreground hover:bg-slate-100  hover:text-primary data-[current=true]:bg-slate-100  data-[current=true]:font-semibold data-[current=true]:text-primary"
      {...props}
    />
  )
}
