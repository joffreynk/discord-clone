import { ModeToggle } from "@/components/mode-switcher";
import { UserButton } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex justify-between">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
      {children}
    </div>
  );
}
