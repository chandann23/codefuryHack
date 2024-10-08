"use client"
import { type User } from 'next-auth'
import React from 'react'


import Link from 'next/link'
import { signOut } from 'next-auth/react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import UserAvatar from './UserAvatar'

type Props = {
  user: Pick<User, "name" | "image" | "email">
}

const UserAccountDropdown = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name ?? null, image: user.image ?? null }}
          className='h-8 w-8'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && (
              <p className='w-[200px] truncate text-sm text-muted-foreground'>
                {user.email}
              </p>
            )}
          </div>
        </div>
        <hr />

        <hr />
        <DropdownMenuItem
          className='cursor-pointer'
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            }).catch((error) => {
              console.error(error)
            })
          }}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountDropdown
