// Define la URL base de tu sitio web.
const BASE_URL = "https://mi-sitio.com";

export async function GET() {
  // Define las rutas que quieres incluir en el sitemap.
  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
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