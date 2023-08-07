import React from "react";
import { useFlashCards } from "../hooks/useFlashCards";

export const CategoryFilter: React.FC = () => {
  const { setCategory } = useFlashCards();

  const handleCategoryChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    if (target.value) setCategory(target.value);
  };

  return (
    <select onChange={handleCategoryChange} className="filter">
      <option value="">Todas</option>
      <option value="Ciências">Ciências</option>
      <option value="Matemática">Matemática</option>
      <option value="Geografia">Geografia</option>
      <option value="História">História</option>
    </select>
  );
};
