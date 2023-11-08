import { Complete } from "@/components/complete";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function CompletePage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold my-4">Complete signup</h1>
      <Complete />
    </main>
  );
}
