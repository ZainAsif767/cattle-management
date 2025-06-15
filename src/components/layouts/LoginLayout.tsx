import { ModeToggle } from "../mode-toggle";
import { Card } from "../ui/card";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh bg-background">
      <div className="absolute top-4 right-10">
        <ModeToggle />
      </div>
      <div className="w-full flex h-svh flex-col items-center justify-center">
        <Card className="w-full max-w-md p-6">{children}</Card>
      </div>
    </div>
  );
}
