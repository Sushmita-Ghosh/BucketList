import { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  status: string;
  categories: [
    {
      category_id: number;
      name: string;
      image_url: string;
      description: string;
    }
  ];
}

interface UseCategoriesResult {
  categories: Category;
  loading: boolean;
  error: string | null;
}

const useCategories = (): UseCategoriesResult => {
  const [categories, setCategories] = useState<Category>({} as Category);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/categories"
        );

        if (!response.status) {
          throw new Error("Failed to fetch categories");
        }

        setCategories(response.data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching categories:", error.message);
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
