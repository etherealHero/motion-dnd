import React, { MetaHTMLAttributes, useEffect, useRef, useState } from "react"
import Categories from "./components/Categories"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"

function App() {
  const [addTodo, setAddTodo] = useState(false)
  const ref = useRef<HTMLTextAreaElement>(null)
  const [todo, setTodo] = useState("")

  useEffect(() => {
    if (!addTodo) return
    ref?.current?.focus()
  }, [addTodo])

  if (addTodo)
    return (
      <>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center h-screen bg-accent-dark"
        >
          <textarea
            name=""
            id=""
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Enter new task"
            className="placeholder:text-gray-400 text-3xl 
              font-semibold bg-transparent outline-none 
               h-10 resize-none"
            onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              const elem = e.target as HTMLTextAreaElement
              elem.style.height = "1px"
              elem.style.height = elem.scrollHeight + "px"
            }}
            ref={ref}
          />
        </form>
        <a
          href="#"
          className="w-16 h-16 flex justify-center items-center 
           fixed top-14 right-8 rounded-full text-accent-dark-text
           font-medium text-5xl border-2 border-accent-dark-text/60
           shadow-lg shadow-white/10
             "
          onClick={() => {
            setAddTodo(false)
            setTodo("")
          }}
        >
          &times;
        </a>
        <a
          href="#"
          className="px-10 py-4 flex justify-center items-center gap-x-4 
          bg-secondary-base fixed bottom-12 right-8 rounded-full
            shadow-lg shadow-secondary-base/40"
          onClick={() => {
            setAddTodo(false)
            setTodo("")
          }}
        >
          <span>New task</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="relative top-[1px]"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </>
    )

  return (
    <>
      {/*<Navbar />*/}
      <div className="bg-accent-base h-full pt-4 ">
        <div className="max-w-lg mx-auto">
          <h1 className="container text-4xl font-bold mb-12 hidden">
            What'up, Olivia!
          </h1>
          <Categories />
          <Todos />
        </div>
      </div>
      {/* <a
        href="#"
        className="w-16 h-16 flex justify-center items-center 
          bg-secondary-base fixed bottom-8 right-8 rounded-full
            shadow-lg shadow-secondary-base/50"
        onClick={() => setAddTodo(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="currentColor"
          className=""
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </a> */}
    </>
  )
}

export default App
