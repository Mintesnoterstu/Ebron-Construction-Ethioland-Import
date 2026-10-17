import { AboutPage } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("about");
}

export default function Page() {
  return <AboutPage />;
}
