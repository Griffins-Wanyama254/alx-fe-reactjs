import { useState } from "react";
import { useRecipeStore } from "./store";

const AddRecipeForm = () => {
  const [name, setName] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addRecipe(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
