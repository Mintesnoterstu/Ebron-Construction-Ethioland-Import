import { ContactPage } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("contact");
}

export default function Page() {
  return <ContactPage />;
}
