import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return pageMetadata("projects");
}

export default function Page() {
  return <ProjectsPage />;
}
