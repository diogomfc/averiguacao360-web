import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

import { getProfile, GetProfileResponse } from '@/api/get-profile'
import { updateProfile } from '@/api/update-profile'

import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const storeProfileSchema = z.object({
  nome: z.string(),
  telefone: z.string(),
})

export type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  // Obtemos os dados do perfil do usuário através do hook useQuery
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  // Inicializamos o formulário com os dados do perfil do usuário
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      nome: profile?.nome ?? '',
      telefone: profile?.telefone ?? '',
    },
  })

  // Atualiza o cache do perfil do usuário
  function updateProfileCache({ nome, telefone }: StoreProfileSchema) {
    const cachedProfile = queryClient.getQueryData<GetProfileResponse>([
      'profile',
    ])

    if (cachedProfile) {
      queryClient.setQueryData<GetProfileResponse>(['profile'], {
        ...cachedProfile,
        nome,
        telefone,
      })
    }

    return { cachedProfile }
  }

  // Atualiza o perfil do usuário em tempo real (Interface Otimista)
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate: ({ nome, telefone }) => {
      const { cachedProfile } = updateProfileCache({ nome, telefone })
      return { previousProfile: cachedProfile }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateProfileCache(context.previousProfile)
      }
    },
  })

  // Atualiza o perfil do usuário no banco de dados
  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        nome: data.nome,
        telefone: data.telefone,
      })
      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao atualizar perfil!')
    }
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Perfil do usuário</DialogTitle>
        <DialogDescription>
          Faça alterações em seu perfil aqui. Clique em salvar quando terminar.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="nome">
              Nome
            </Label>
            <Input
              className="col-span-3"
              id="nome"
              placeholder="Enter your name"
              {...register('nome')}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="telefone">
              telefone
            </Label>
            <Input
              className="col-span-3"
              id="telefone"
              placeholder="Enter your telephone"
              {...register('telefone')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
