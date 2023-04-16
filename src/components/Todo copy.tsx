import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Reorder,
  useDragControls,
} from "framer-motion"
import React, { useRef, useState } from "react"
import Checkbox from "./Checkbox"

type Props = {
  id: number
  color: string
  title: string
  checked?: boolean
  todo: any
}

const Todo = ({ todo, id, color, checked, title }: Props) => {
  const motionX = useMotionValue(0)
  const scale = useMotionValue(1)
  const [x, setX] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const leftBreak = useTransform(motionX, (x) => (x < -50 ? -70 : 0))
  const reorderFactor = 0.95

  useMotionValueEvent(scale, "animationComplete", () => {
    if (scale.get() != 1.05) return
  })

  const controls = useDragControls()

  return (
    <Reorder.Item
      key={id}
      value={todo}
      dragListener={false}
      dragControls={controls}
      drag="y"
      as="li"
      className="border border-red-500 mb-1.5"
    >
      <motion.div
        ref={ref}
        className="bg-accent-dark rounded-3xl pr-5 flex gap-x-0 items-center relative"
        drag="x"
        style={{
          x: motionX,
          scale,
          position: "relative",
          left: leftBreak,
          transition: "left 0.2s ease",
        }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{ left: 0.6, right: 0.1 }}
        dragSnapToOrigin
        whileHover={{ scale: reorderFactor }}
        onDragStart={(event, info) =>
          console.log((event.target as HTMLDivElement).classList.add("active"))
        }
        onDragEnd={(event, info) =>
          console.log(
            (event.target as HTMLDivElement).classList.remove("active")
          )
        }
        transition={{ duration: 0.1 }}
        onPointerDown={function (e) {
          setTimeout(() => {
            if (!ref.current) return
            // const styles = ref.current.getAttribute("style")

            // if (styles && !styles.includes(`scale(${reorderFactor})`)) return

            if (!ref.current.classList.contains("active")) return
            alert(1000)
            controls.start(e, { snapToCursor: false })
          }, 800)
        }}
      >
        <Checkbox id={String(id)} color={color} />
        <p className="py-5">{title}</p>
      </motion.div>
    </Reorder.Item>
  )
}

export default Todo
