import { HomePage } from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("home");
}

export default function Page() {
  return <HomePage />;
}
