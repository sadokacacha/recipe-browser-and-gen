// components/RecipeCard.tsx
interface RecipeCardProps {
    title: string;
    ingredients: string[];
    cookTime: string;
  }
  
  export default function RecipeCard({ title, ingredients, cookTime }: RecipeCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 
        transition-transform hover:scale-105">
        <h3 className="text-primary font-bold text-lg mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-secondary font-semibold">Ingredients:</span>
          <ul className="list-disc pl-4">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600 text-sm">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center text-secondary">
          <span className="text-sm">{cookTime}</span>
        </div>
      </div>
    );
  }