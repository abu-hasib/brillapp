import { SettingsForm } from "@/components/settings";

export default function SettingsPage() {
  return (
    <div className="h-screen flex flex-col items-center py-8 px-8">
      <h1 className="text-2xl font-semibold">Update your details</h1>
      <SettingsForm />
    </div>
  );
}
