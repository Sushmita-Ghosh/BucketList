import { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  category: {
    category_id: number;
    name: string;
    image_url: string;
    description: string;
  };
  status: string;
}

interface UseCategoriesResult {
  category: Category;
  loading: boolean;
  error: string | null;
}

const useCategory = (props: { categoryId: string }): UseCategoriesResult => {
  console.log(props.categoryId);
  const [category, setCategory] = useState<Category>({} as Category);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/categories/" + props.categoryId
        );

        if (!response.status) {
          throw new Error("Failed to fetch categories");
        }

        console.log(response.data);

        setCategory(response.data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching categories:", error.message);
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchCategory();
  }, []);

  return { category, loading, error };
};

export default useCategory;
