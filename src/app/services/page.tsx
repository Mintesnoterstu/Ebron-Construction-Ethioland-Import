import { ServicesPage } from "@/components/pages/ServicesPage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("services");
}

export default function Page() {
  return <ServicesPage />;
}
