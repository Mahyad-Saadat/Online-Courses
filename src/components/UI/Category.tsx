import { useEffect, useState } from "react";
import styles from "../../components/styles/category.module.scss";
import CategoriesCard from "./CategoriesCard";

interface CategoryData {
  id: number;
  title: string;
  icon: string;
}

export default function Category() {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  async function fetchCategories() {
    const response = await fetch("http://localhost:3030/categories");
    const data: CategoryData[] = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.category}>
      <h2>دسته بندی ها</h2>
      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <CategoriesCard
            id={category.id}
            key={category.id}
            title={category.title}
            icon={`http://localhost:3030/images/${category.icon}`}
          />
        ))}
      </div>
    </div>
  );
}
