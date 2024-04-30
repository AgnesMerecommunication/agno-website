"use client"

import { useState, useEffect } from 'react'

type Props = {
    children: React.ReactNode;
  }

const Provider = ({children} : Props) => {

const [mounted,setMounted] = useState<boolean>(false);

useEffect (() => {
    setMounted(true);
},[]);

if(!mounted){
    return <>{children}</>;
}


  return (
    <div>
      {children}
    </div>
  )
}

export default Provider;