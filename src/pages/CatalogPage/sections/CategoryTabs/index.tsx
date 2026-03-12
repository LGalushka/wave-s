import { Button } from "@/components/ui/Button";
import { selectSelectedCategory } from "@/features/catalog/catalogSelectors";
import { setCategory } from "@/features/catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import type { ProductCategory } from "@/types";

const tabs: { label: string; value: ProductCategory | "all" }[] = [
  { label: "Все оборудование", value: "all" },
  { label: "Мойки самообслуживания", value: "car-wash" },
  { label: "Доп. оборудование МСО", value: "mso-equipment" },
  { label: "Пылесосы самообслуживания", value: "vacuums" },
  { label: "Прочее оборудование", value: "other" },
];

export const CatalogTabs = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(selectSelectedCategory);

  return (
    <div className="flex gap-4 flex-wrap mb-8">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          variant={tab.value === selectedCategory ? "primary" : "outline"}
          onClick={() => dispatch(setCategory(tab.value))}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};
