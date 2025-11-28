import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Heart, Sparkles, Clock } from 'lucide-react';

/**
 * EDITABLE UI - AboutPageUI
 * 
 * Página de historia de Soleï - Narrativa de la marca
 */

export const AboutPageUI = () => {
  return (
    <EcommerceTemplate 
      showCart={true}
      className="bg-background"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-primary-foreground mb-6 tracking-[0.3em]">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 font-light leading-relaxed tracking-wide">
            Donde la pasión por crear se encuentra con el amor por la moda
          </p>
        </div>
      </section>

      {/* Historia Principal */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-center">
            {/* 2020 - El Comienzo */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground">
                2020: Un Hobbie que Nació de la Quietud
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                Durante la pandemia, cuando el mundo se detuvo, encontré en la creación un refugio. 
                Lo que comenzó como una forma de llenar el tiempo se convirtió en algo mucho más profundo: 
                la unión de dos pasiones que siempre habían estado ahí, esperando el momento perfecto para encontrarse.
              </p>
            </div>

            {/* La Unión de Pasiones */}
            <div className="space-y-6 pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground">
                Crear y la Moda: Dos Pasiones, Una Visión
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                Siempre amé crear con mis manos, sentir las telas, ver cómo cada puntada cobra vida. 
                Y siempre amé la moda, no solo como vestimenta, sino como expresión de identidad. 
                Soleï nació cuando estas dos pasiones se encontraron, creando ropa de playa que es más que simplemente ropa: 
                es arte que puedes llevar contigo.
              </p>
            </div>

            {/* El Presente */}
            <div className="space-y-6 pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground">
                Hoy: Cada Pieza Cuenta una Historia
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                Cada prenda de Soleï es creada a mano, una a la vez, con dedicación y amor. 
                No producimos en masa, no seguimos tendencias pasajeras. Cada pieza lleva días de trabajo, 
                atención al detalle y el compromiso de crear algo único y especial.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                Hacemos nuestro mejor esfuerzo por usar materiales sustentables, aunque no somos perfectos. 
                Lo importante es que trabajamos con honestidad, transparencia y el deseo de hacer las cosas bien, 
                mejorando día a día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores en Cards */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground text-center mb-12">
            Lo Que Nos Define
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur p-8 rounded-lg text-center space-y-4">
              <h3 className="text-xl font-light tracking-wide text-foreground">Artesanal</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Una sola persona detrás de cada prenda, cuidando cada detalle como si fuera para alguien especial. 
                Porque lo es.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur p-8 rounded-lg text-center space-y-4">
              <h3 className="text-xl font-light tracking-wide text-foreground">Auténtico</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Sin pretensiones, sin perfecciones falsas. Solo trabajo honesto, transparencia y amor por lo que hacemos.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur p-8 rounded-lg text-center space-y-4">
              <h3 className="text-xl font-light tracking-wide text-foreground">Consciente</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Hacemos nuestro mejor esfuerzo cada día. No somos perfectos, pero trabajamos hacia mejores prácticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre Emotivo */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl text-primary-foreground font-light leading-relaxed tracking-wide mb-8">
            "Soleï no es solo ropa de playa. Es la prueba de que algo hermoso puede nacer 
            en los momentos más inesperados, cuando nos permitimos crear con el corazón."
          </p>
          <p className="text-lg text-primary-foreground/90 font-light tracking-wide">
            — Con amor desde México
          </p>
        </div>
      </section>
    </EcommerceTemplate>
  );
};