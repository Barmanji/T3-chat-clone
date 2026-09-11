import { requireAuth } from '@/modules/authentication/actions'
import React from 'react'
import RootLayoutClient from './layout-client'

const Layout = async({children}:{children:React.ReactNode}) => {
  const session = await requireAuth();

  const user = session?.user ? {
    ...session.user,
    image: session.user.image ?? null,
  } : null;

  return (
    <RootLayoutClient user={user}>
      {children}
    </RootLayoutClient>
  )
}

export default Layout
