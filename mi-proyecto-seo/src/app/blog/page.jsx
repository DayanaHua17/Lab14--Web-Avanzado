export const metadata = {
  title: 'Blog de SEO y Desarrollo Web',
  description: 'Artículos y tutoriales sobre las últimas técnicas de optimización y SEO en Next.js.',
  openGraph: {
    title: 'Blog de SEO y Desarrollo Web',
    description: 'Artículos y tutoriales para optimizar tu sitio.',
  },
};



export default function BlogPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Nuestro Blog</h1>
      <p className="mt-4">Aquí encontrarás artículos sobre SEO y optimización web.</p>
    </main>
  );
}