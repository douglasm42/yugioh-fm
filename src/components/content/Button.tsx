import React, { MouseEventHandler } from 'react'
import { Color } from '../types';
import './Button.css'

interface ButtonProps {
  text?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: Color
  disabled?: boolean | undefined
}

export default function Button({ text, children, onClick, color='lblue', disabled=false }: ButtonProps) {
  return (
    <button className='button' onClick={onClick} data-color={color} disabled={disabled}>
      {text}{children}
    </button>
  )
}
