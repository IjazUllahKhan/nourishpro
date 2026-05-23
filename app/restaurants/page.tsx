import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { siteData } from "@/data/siteData";

const category = siteData.categories.find((c) => c.id === "restaurants")!;

export default function RestaurantsPage() {
  return (
    <CategoryPageTemplate
      title={category.title}
      description={category.description}
      image={category.image}
    />
  );
}