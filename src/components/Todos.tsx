import React, { useState } from "react"
import { Reorder } from "framer-motion"
import Todo from "./Todo"

const dataTodos = [
  {
    id: 1,
    color: "secondary",
    checked: false,
    title: "amet consectetur, adipisicing elit. Reiciendis perferendis tempore",
  },
  {
    id: 2,
    color: "accent",
    checked: true,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis perferendis tempore placeat eius excepturi porro optio ",
  },
  {
    id: 3,
    color: "secondary",
    checked: true,
    title: "amet consectetur, adipisicing elit. Reiciendis perferendis tempore",
  },
  {
    id: 4,
    color: "secondary",
    checked: false,
    title: "amet consectetur, adipisicing elit. Reiciendis perferendis tempore",
  },
  {
    id: 5,
    color: "accent",
    checked: true,
    title: "maxime commodi accusantium?",
  },
  {
    id: 6,
    color: "accent",
    checked: true,
    title: "maxime commodi accusantium?",
  },
  {
    id: 10,
    color: "secondary",
    checked: false,
    title: "Daily meeting with team",
  },
  { id: 20, color: "accent", checked: true, title: "Daily meeting with team" },
  {
    id: 30,
    color: "secondary",
    checked: true,
    title: "amet consectetur, adipisicing elit. Reiciendis perferendis tempore",
  },
  {
    id: 40,
    color: "secondary",
    checked: false,
    title: "maxime commodi accusantium?",
  },
  { id: 50, color: "accent", checked: true, title: "Daily meeting with team" },
  {
    id: 60,
    color: "accent",
    checked: true,
    title: "maxime commodi accusantium?",
  },
]

type Props = {}

const Todos = (props: Props) => {
  const [todos, setTodos] = useState(dataTodos)
  const [currentDrag, setCurrentDrag] = useState<HTMLLIElement | null>(null)

  return (
    <div className="container">
      <h5 className="font-semibold uppercase text-accent-light text-sm my-6 ">
        Today's tasks
      </h5>
      <ul className="h-full scrollbar-hide pb-4">
        <li className="bg-accent-dark-text/30 h-10 mb-2 rounded-3xl ">
          <a href="#" className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill=""
              className="fill-accent-light/70"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <h5 className="font-semibold text-md text-white/50">Add task</h5>
          </a>
        </li>
        <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
          {todos.map((todo) => {
            const { id } = todo
            return (
              <Todo
                key={id}
                todo={todo}
                currentDrag={currentDrag}
                setCurrentDrag={setCurrentDrag}
              />
            )
          })}
        </Reorder.Group>
      </ul>
    </div>
  )
}

export default Todos
