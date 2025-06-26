// Define la URL base de tu sitio web.
const BASE_URL = "https://mi-sitio.com";

export async function GET() {
  // 1. Hacemos una petición a una API externa para obtener datos dinámicos (ej: posts de un blog)
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsResponse.json();

  // 2. Creamos una lista de URLs estáticas y dinámicas
  const staticUrls = ["/", "/blog", "/contacto"];
  const dynamicUrls = posts.map(post => `/blog/${post.id}`);

  // Combinamos todas las URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

  // 3. Generamos el sitemap con la lista completa de URLs
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map((url) => {
        return `
          <url>
            <loc>${BASE_URL}${url}</loc>
          </url>
        `;
      })
      .join("")}
  </urlset>
  `;

  // Retorna el sitemap como una respuesta XML.
  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}