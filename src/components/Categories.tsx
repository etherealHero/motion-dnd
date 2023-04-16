import React from "react"

const dataLists = [
  { id: 1, color: "secondary", title: "Business", tasks: 40, done: 60 },
  { id: 2, color: "accent", title: "Personal", tasks: 18, done: 40 },
  { id: 3, color: "secondary", title: "Travel", tasks: 6, done: 10 },
  { id: 4, color: "accent", title: "Meet", tasks: 10, done: 90 },
]

type Props = {}

const Categories = (props: Props) => {
  const colorVariants: { [index: string]: any } = {
    ["accent"]: `bg-blue-600 after:bg-blue-600`,
    ["secondary"]: `bg-secondary-base after:bg-secondary-base`,
  }

  return (
    <>
      <h5 className="container font-semibold uppercase text-accent-light text-sm">
        Categories
      </h5>
      <ul className="flex gap-x-4 overflow-x-scroll py-5 px-8 scrollbar-hide">
        {dataLists.map(({ id, color, title, tasks, done }) => (
          <li
            key={id}
            className="bg-accent-dark w-[208px] shrink-0 rounded-3xl h-[116px] 
              px-4 pt-6 pb-4 shadow-lg shadow-accent-dark/70"
          >
            <span className="text-accent-dark-text font-medium">
              {tasks} tasks
            </span>
            <h5 className="font-semibold text-2xl mb-4">{title}</h5>
            <div className="w-full bg-gray-600 rounded-full h-1">
              <div
                className={`
                  shadow-[0px_3px_14px_0px_rgba(255,255,255,0.5)]
                  h-1 rounded-full relative
                    after:content-[''] after:absolute
                    after:rounded-full after:h-2 after:w-1 
                    after:right-0 after:-top-1
                    ${colorVariants[color]}
                `}
                style={{ width: `${done}%` }}
              ></div>
            </div>
          </li>
        ))}
        <li
          // className=" w-[208px] shrink-0 rounded-3xl
          //     flex flex-col items-center justify-center gap-y-2"
          className=" w-[208px] shrink-0 rounded-3xl h-[116px]
              shadow-sm shadow-accent-dark-light/70
              bg-accent-dark-text/20
              flex flex-col items-center justify-center gap-y-2"
        >
          <a
            href="#"
            className="w-16 h-16 flex justify-center items-center 
          bg-accent-dark-text/30 rounded-full
            shadow-lg shadow-accent-base/20 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill=""
              className="fill-accent-dark/50"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </a>
          <h5 className="font-semibold text-md text-white/50">Add category</h5>
        </li>
      </ul>
    </>
  )
}

export default Categories
