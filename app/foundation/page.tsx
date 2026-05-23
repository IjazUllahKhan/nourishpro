import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { siteData } from "@/data/siteData";

const category = siteData.categories.find((c) => c.id === "foundation")!;

export default function FoundationPage() {
  return (
    <CategoryPageTemplate
      title={category.title}
      description={category.description}
      image={category.image}
    />
  );
}