// app/generate/page.tsx
export default function GeneratePage() {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl text-primary mb-4">Generate Recipe</h2>
        <input 
          type="text" 
          placeholder="Main ingredient..." 
          className="w-full p-2 mb-4 border-2 border-primary rounded"
        />
        <button className="bg-secondary text-white px-6 py-3 rounded-full 
          hover:bg-secondary-light transition-colors w-full">
          Generate Recipe
        </button>
      </div>
    );
  }