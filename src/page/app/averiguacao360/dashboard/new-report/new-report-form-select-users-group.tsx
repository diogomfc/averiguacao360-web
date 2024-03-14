import { useQuery } from '@tanstack/react-query'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import { getAllUsersProfile } from '@/api/get-all-users'
import { FormCheckBox } from '@/components/form-checkbox'

export function NewReportFormSelectUsersGroup() {
  const [isScrollable, setIsScrollable] = useState(false)

  const { data: profileAllUsers, isLoading: isLoadingProfileAllUsers } =
    useQuery({
      queryKey: ['profileAllUsers'],
      queryFn: getAllUsersProfile,
      staleTime: Infinity,
    })

  useEffect(() => {
    const container = document.getElementById('scroll-container')

    const checkScroll = () => {
      if (container) {
        setIsScrollable(
          container.scrollHeight - container.scrollTop > container.clientHeight,
        )
      }
    }

    if (container) {
      container.addEventListener('scroll', checkScroll)
    }
    checkScroll() // Verifique a rolagem inicial

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  return (
    <div className="rounded-lg border border-blue-100 p-4 shadow-input-form ">
      <div className="">
        <div className="pb-4">
          <h1 className="text-base font-medium text-blue-950">
            Grupo encarregado da averiguação
          </h1>
          <span className="text-xs text-muted-foreground">
            Identifique os analistas autorizados para administrar o relatório
          </span>
        </div>

        <div
          id="scroll-container"
          className="max-h-[300px] space-y-2 overflow-y-auto"
        >
          {isLoadingProfileAllUsers && (
            <div className="flex h-32 w-full items-center justify-center">
              <BeatLoader color="#BDD7F1" />
            </div>
          )}
          {profileAllUsers?.map((user) => (
            <FormCheckBox
              key={user.id}
              forName="usuarios_permitidos"
              users={user}
            />
          ))}
        </div>
        <div className="flex h-2 w-full items-center justify-center text-blue-200 ">
          {isScrollable && <ArrowDown className="animate-bounce" size={20} />}
        </div>
      </div>
    </div>
  )
}
