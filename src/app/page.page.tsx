import { LandingPage } from "@/pages/LandingPage/ui/LandingPage";
import { fetchLandingPage } from "@/shared/sanity/fetch";

export default async function Home() {
  const sanityData = await fetchLandingPage();
  return <LandingPage sanityData={sanityData} />;
}
