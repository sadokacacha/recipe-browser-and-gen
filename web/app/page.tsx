import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-6">
      <header className="w-full max-w-3xl flex justify-between py-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold text-green-600">Recipe App</h1>
        <nav>
          <ul className="flex gap-4 text-orange-500 font-semibold">
            <li><Link href="/recipes">Browse Recipes</Link></li>
            <li><Link href="/generate">Generate Recipe</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-green-700">Welcome to the Recipe Generator</h2>
        <p className="text-gray-600 mt-2">Find or generate delicious recipes with ease!</p>
      </main>
    </div>
  );
}
