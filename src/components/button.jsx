import React from 'react'
import { clx } from '../utils/clx'

export default function Button({
      variant = 'primary',
      onclick,
      classname,
      children
}) {
      const classes = clx(
            "px-10 py-3 rounded-xl w-fit font-medium font-dmsans cursor-pointer",
            variant === 'primary' &&
            'bg-purple text-primary hover:bg-purple/70',
            variant === 'outline' &&
            'bg-transparent text-primary border-2 border-purple hover:bg-purple/10', 
            classname
      )
      return (
            <div className={classes} onClick={onclick}>
                  {children}
            </div>
      )
}