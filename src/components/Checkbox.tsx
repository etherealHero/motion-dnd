import React from "react"

type Props = {
  checked?: boolean
  onChange?: () => void
  id: string
  color: string
}

const Checkbox = ({ checked, onChange, id, color }: Props) => {
  const colorVariants: { [index: string]: any } = {
    ["accent"]: `
      after:peer-checked:bg-accent-dark-checkbox
      after:border-accent-dark-checkbox`,
    ["secondary"]: `
      after:peer-checked:bg-secondary-base
      after:border-secondary-base`,
  }

  return (
    <>
      <input
        id={id}
        className="peer hidden"
        type="checkbox"
        name="checkbox"
        // checked={checked}
      />
      <label
        htmlFor={id}
        className={`
          w-6 h-6 p-8 shrink-0 
          flex items-center justify-center 
          
          transition-colors
          duration-150
          peer-checked:stroke-white
          
          cursor-pointer
          relative
          
          after:content[''] after:absolute
          after:top-1/2 after:left-1/2
          after:-translate-x-1/2 after:-translate-y-1/2
          after:w-6 after:h-6 
          after:rounded-full after:border-2 
          after:transition-colors
          after:duration-150

          ${colorVariants[color]}
        `}
      >
        <svg
          className="
            absolute left-1/2 top-1/2 z-10
            -translate-x-1/2
            -translate-y-1/2
            "
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </>
  )
}

export default Checkbox
