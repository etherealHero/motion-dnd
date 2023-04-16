import { useMotionValue, useTransform, Reorder, motion } from "framer-motion"
import React, { Dispatch, SetStateAction, useRef, useState } from "react"
import Checkbox from "./Checkbox"

type Props = {
  todo: {
    id: number
    color: string
    title: string
    checked?: boolean
  }
  currentDrag: HTMLLIElement | null
  setCurrentDrag: Dispatch<SetStateAction<HTMLLIElement | null>>
}

const Todo = ({ todo, currentDrag, setCurrentDrag }: Props) => {
  const reorderProgressPercent = useMotionValue<number>(100)
  const [isReorder, setIsReorder] = useState<boolean>(false)
  const [currentDragCandidate, setCurrentDragCandidate] =
    useState<boolean>(false)
  const ref = useRef(null)
  const progressRef = useRef(null)
  const motionX = useMotionValue(0)
  const leftBreak = useTransform(motionX, (x) => (x < -50 ? -70 : 0))

  return (
    <Reorder.Item
      whileHover={{ scale: isReorder === true ? 1.08 : 1 }}
      transition={{ duration: 0.3, type: "spring" }}
      as="li"
      value={todo}
      className={`bg-accent-dark rounded-3xl mb-1.5 pr-5 flex gap-x-0 items-center relative ${
        isReorder === true ? "shadow-[0_0_18px_-5px_rgba(155,155,155,0.6)]" : ""
      }`}
      style={{
        x: motionX,
        left: leftBreak,
        transition: "left 0.2s ease",
        touchAction: "none",
      }}
      drag={isReorder ? "y" : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={{ left: 0.6, right: 0.1 }}
      dragSnapToOrigin
      ref={ref}
      onTouchMove={(e) => {
        if (!currentDrag) return

        const coord = currentDrag.getBoundingClientRect()

        if (
          !(
            e.touches[0].clientY > coord.top &&
            e.touches[0].clientY < coord.bottom &&
            e.touches[0].clientX > coord.left &&
            e.touches[0].clientX < coord.right
          ) ||
          motionX.get() < -50
        ) {
          setCurrentDrag(null)
          setCurrentDragCandidate(false)
        }
      }}
      onTouchStart={(e) => {
        if (!e.target) return
        setCurrentDrag(e.target as HTMLLIElement)
        setCurrentDragCandidate(true)
      }}
      onTouchEnd={() => {
        setCurrentDragCandidate(false)
      }}
      onDragEnd={() => setIsReorder(false)}
    >
      <motion.div
        animate={{
          width: currentDragCandidate ? "100%" : "0%",
        }}
        ref={progressRef}
        onAnimationComplete={() => {
          if (!progressRef.current) return
          const styles = (progressRef.current as HTMLDivElement).getAttribute(
            "style"
          )
          if (!styles) return
          if (!styles.includes("100%")) return
          motionX.set(0)
          setIsReorder(true)
        }}
        transition={{ duration: 0.6, ease: "linear" }}
        className="absolute bottom-0 left-0 h-5bg-transparent"
        style={{
          width: reorderProgressPercent + "%",
          backgroundColor: isReorder === true ? "green" : "white",
        }}
      />
      <Checkbox id={String(todo.id)} color={todo.color} />
      <p className="py-5">{todo.title}</p>
    </Reorder.Item>
  )
}

export default Todo
