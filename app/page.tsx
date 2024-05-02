import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
}
