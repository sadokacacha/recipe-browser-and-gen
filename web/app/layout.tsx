// app/layout.tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <header className="bg-primary text-white p-4">
          <nav className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">RecipeGen</h1>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}