import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableSkeleton() {
  return (
    <Table>
      <TableHeader className="bg-blue-50/50">
        <TableRow className=" text-xs hover:bg-transparent">
          <TableHead className="flex items-center justify-end">
            <Skeleton className="h-2 w-4" />
          </TableHead>
          <TableHead className="pl-0">
            <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
          </TableHead>
          <TableHead className="w-[80px] ">
            <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
          </TableHead>
          <TableHead className="w-[80px] ">
            <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
          </TableHead>
          <TableHead className="w-[80px] ">
            <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
          </TableHead>
          <TableHead className="w-[80px] ">
            <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" ">
        {Array.from({ length: 4 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-2 w-1/4 sm:w-1/3 md:w-1/2 lg:w-[80px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
