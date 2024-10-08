import { User } from "next-auth";
import React from "react";
import Image from "next/image";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Props extends AvatarProps {
  user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user, ...props }: Props) => {
  return (
    <div>
      <Avatar {...props}>
        {user.image ? (
          <div className='relative aspect-square h-full w-full'>
            <Image
              fill
              src={user.image}
              alt='profile picture'
              referrerPolicy='no-referrer'
            />
          </div>
        ) : (
          <AvatarFallback>
            <span className='sr-only'>{user?.name}</span>
            <Icons.user className='h-4 w-4' />
          </AvatarFallback>
        )}
      </Avatar>
    </div>
  );
};

export default UserAvatar;
