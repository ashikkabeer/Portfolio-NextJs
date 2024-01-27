import Image from "next/image";
import { SpotlightPreview } from "@/components/Spotlight";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:align-middle">
      <SpotlightPreview/>
    </main>
  );
}
