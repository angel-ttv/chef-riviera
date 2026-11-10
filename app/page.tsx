import ReservaForm from '../components/ReservaForm';
import Image from 'next/image';

const experiencias = [
  { id: 1, titulo: "Cena Riviera Clásica", precio: "$8,500 MXN / evento", desc: "Menú de 3 tiempos para hasta 6 personas. Ideal para cenas familiares con sabores locales y clásicos internacionales." },
  { id: 2, titulo: "Experiencia The Chef VIP", precio: "$9,800 MXN / evento", desc: "Nuestro servicio estrella (hasta 6 personas). Menú 100% personalizado de 4 tiempos con ingredientes premium y pesca del día." },
  { id: 3, titulo: "Degustación 5 Tiempos", precio: "$12,500 MXN / evento", desc: "La máxima expresión de la alta cocina en tu villa. Maridaje sugerido, emplatado artístico y servicio de sommelier opcional." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white selection:bg-yellow-500 selection:text-black">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="The Chef VIP Logo" 
            width={120} 
            height={120} 
            className="h-20 w-auto invert hover:scale-105 transition-transform" 
            priority
          />
        </div>
        <div className="h-[1px] flex-grow mx-8 bg-gray-800 hidden md:block"></div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/the__chef__vip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#reservar" className="text-sm font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-500 transition-colors">
            RESERVAR
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs">Playacar • Puerto Aventuras • Tulum</span>
        <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight uppercase">
          Buena cocina <br/> <span className="text-yellow-500">en la comodidad <br className="md:hidden"/> de tu hogar.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12">
          Transformamos tu villa en un restaurante 5 estrellas exclusivo para ti y tus invitados.
        </p>
      </section>

      {/* NUEVA SECCIÓN: Diferenciadores (Justificación del precio) */}
      <section className="bg-black py-20 px-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">¿Por qué elegir The Chef VIP?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🍷</div>
              <h4 className="text-xl font-bold mb-3">Privacidad Absoluta</h4>
              <p className="text-gray-400">Sin tiempos de espera, sin traslados y sin código de vestimenta. Tu villa es el mejor restaurante de la ciudad.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✨</div>
              <h4 className="text-xl font-bold mb-3">Servicio Integral (Cero Estrés)</h4>
              <p className="text-gray-400">Diseñamos el menú, compramos ingredientes frescos, cocinamos, servimos la mesa y dejamos tu cocina impecable.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🥑</div>
              <h4 className="text-xl font-bold mb-3">100% Personalizado</h4>
              <p className="text-gray-400">Adaptamos cada platillo a tus preferencias, alergias o dietas (Keto, Vegano, Gluten-Free) sin perder la calidad gourmet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Experiencias (Precios actualizados) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-12 text-center">Nuestras Experiencias (Tarifas base hasta 6 pax)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {experiencias.map((exp) => (
            <div key={exp.id} className="group border border-gray-800 p-8 hover:bg-gray-800 transition-all cursor-default">
              <div className="text-yellow-500 font-mono mb-4 text-lg">{exp.precio}</div>
              <h4 className="text-3xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">{exp.titulo}</h4>
              <p className="text-gray-500 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Métricas para Inversores y Formulario */}
      <section id="reservar" className="bg-black py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-8 italic text-gray-300">
              &quot;La mejor cena de nuestras vacaciones en México. El nivel de detalle fue increíble.&quot;
            </h3>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
              <div>
                <p className="text-4xl font-black text-yellow-500">68</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest mt-2">Eventos realizados<br/>(Ene-Abr 2026)</p>
              </div>
              <div>
                <p className="text-4xl font-black text-yellow-500">142</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest mt-2">Clientes en<br/>base de datos</p>
              </div>
              <div>
                <p className="text-3xl font-black text-yellow-500">8</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest mt-2">Chefs Certificados</p>
              </div>
              <div>
                <p className="text-3xl font-black text-yellow-500">4.97</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest mt-2">Rating promedio</p>
              </div>
            </div>
          </div>
          <ReservaForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-800 flex flex-col items-center justify-center">
        <Image 
          src="/logo.svg" 
          alt="The Chef VIP Logo" 
          width={80} 
          height={80} 
          className="h-12 w-auto invert opacity-50 mb-6" 
        />
        <div className="flex gap-4 mb-6">
          <a href="https://www.instagram.com/the__chef__vip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-500 transition-colors">
            Instagram
          </a>
        </div>
        <p className="text-gray-600 text-sm">© 2026 The Chef VIP. Reservas exclusivas en la Riviera Maya.</p>
      </footer>
    </main>
  );
}