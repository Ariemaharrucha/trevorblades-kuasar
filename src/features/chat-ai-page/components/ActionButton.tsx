import React from 'react'

type ActionButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
  }

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
    className="w-full bg-violet-500 hover:bg-violet-600 text-sm md:text-base font-semibold text-wrap py-3 rounded-lg text-white"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
  )
}
