import Image from 'next/image'
import Tile from "./components/tiles"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tile></Tile>
    </main>
  )
}
