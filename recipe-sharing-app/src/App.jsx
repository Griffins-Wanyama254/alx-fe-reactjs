import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
