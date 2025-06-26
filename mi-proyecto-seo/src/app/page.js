'use client'; 

import Image from "next/image";
import dynamic from "next/dynamic";

// Define el componente dinámico
const DynamicComponent = dynamic(() => import('./components/LargeComponent'), {
  ssr: false, 
  loading: () => <p>Cargando componente...</p>, 
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-slate-50">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          Bienvenido a mi Página Optimizada
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Aprende cómo mejorar el rendimiento y SEO en Next.js.
        </p>

        <Image
          src="/images/seo-image.jpg" // Corregido a .png
          width={400}
          height={200}
          alt="Ejemplo de imagen optimizada"
          priority 
        />

        <div className="mt-8">
          <DynamicComponent />
        </div>
        
        {/* === SECCIÓN DE PRUEBA DE FUENTES AÑADIDA === */}
        <div className="mt-12 text-left w-full space-y-4 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl  border-b pb-2 mb-4">Prueba de Fuentes</h2>
            <h2 style={{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: "bold" }}>
                Texto con <code>sans-serif</code> (fuente genérica)
            </h2>

            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Texto global con fuente Inter (optimizada por Next.js)
            </h2>

            <h2 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold" }}>
                Texto con <code>serif</code> (fuente con serifas)
            </h2>
        </div>
        {/* === FIN DE LA SECCIÓN AÑADIDA === */}

      </div>
    </main>
  );
}