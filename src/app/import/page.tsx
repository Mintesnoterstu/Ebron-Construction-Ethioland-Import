import { ImportPage } from "@/components/pages/ImportPage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("import");
}

export default function Page() {
  return <ImportPage />;
}
