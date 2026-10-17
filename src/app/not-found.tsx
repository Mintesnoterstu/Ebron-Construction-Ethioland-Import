import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("notFound");
}

export default function NotFound() {
  return <NotFoundPage />;
}
