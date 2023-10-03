import { ICategory } from "@/interfaces";

export async function getCategoryDetailOf(key: string): Promise<ICategory> {
  const response = await fetch(`http://localhost:3000/api/category/${key}`);

  if (!response.ok) {
    throw new Error("something went to wrong");
  }

  return response.json();
}
