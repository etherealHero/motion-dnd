import React from "react"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div
      className="container flex justify-between 
      items-center pt-6 fixed z-10 bg-accent-base pb-4
      after:content[''] after:absolute after:w-full
      after:left-0 after:right-0 after:bottom-1
      after:translate-y-full after:h-5
      after:bg-gradient-to-b after:from-accent-base after:to-white/0"
    >
      <a href="#" className="-ml-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          className="rotate-90 fill-accent-light"
          viewBox="0 0 16 16"
        >
          <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
        </svg>
      </a>
      <div className="flex justify-center items-center gap-x-2 -mr-3">
        <a href="#" className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="fill-accent-light"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
        <a href="#" className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="fill-accent-light"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Navbar
