import { useState } from 'react'

export default function d4({ d4Count }) {
  const d4 = [1, 2, 3, 4]

  const rng = () => {
    return Math.floor(Math.random() * 4)
  }

  return <div>d4</div>
}
