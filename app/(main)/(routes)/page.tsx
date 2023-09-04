import { ModeToggle } from "@/components/mode-switcher";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className=" flex justify-between">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </main>
  )
}
