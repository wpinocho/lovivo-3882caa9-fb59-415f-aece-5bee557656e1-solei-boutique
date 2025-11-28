import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Sparkles, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * EDITABLE UI - IndexUI
 * 
 * Página principal de Soleï - Ropa de playa artesanal
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
      className="bg-background"
    >
      {/* Hero Section - Minimalista y Elegante */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay and Animation */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h1 className="text-6xl md:text-8xl font-light text-primary-foreground mb-8 tracking-[0.3em]">
            Soleï
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-16 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            Ropa de playa artesanal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-primary-foreground/95 hover:bg-primary-foreground text-primary font-light tracking-widest px-10 py-6 text-base"
              onClick={() => {
                const productsSection = document.getElementById('products');
                productsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar Colección
            </Button>
          </div>

          <p className="text-base md:text-lg text-primary-foreground/85 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            Cada pieza es única, confeccionada con amor y dedicación. Materiales sustentables, procesos artesanales, tiempo dedicado a cada detalle.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-11 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70"></div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide text-foreground">Hecho a Mano</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Cada prenda es confeccionada por una sola persona, con dedicación y cuidado en cada puntada.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide text-foreground">Responsable</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Nos esforzamos por usar materiales sustentables cuando es posible. No somos perfectos, pero trabajamos con honestidad hacia mejores prácticas.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide text-foreground">Único</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Cada pieza toma días en completarse, garantizando calidad artesanal y diseños únicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
              alt="Soleï Beach"
              className="w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-background/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground mb-4">
                Nuestras Colecciones
              </h2>
              <p className="text-muted-foreground font-light mb-6">
                Explora nuestras piezas artesanales
              </p>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="font-light tracking-wide"
                >
                  Conoce Nuestra Historia
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground font-light">
                Ropa de playa hecha con amor
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="font-light"
              >
                Ver Todo
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-light">
                Próximamente nuevas piezas artesanales
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground mb-6">
            El Arte de lo Artesanal
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            En Soleï, cada pieza de ropa de playa es más que un producto: es el resultado de horas de trabajo dedicado, 
            atención al detalle y amor por el oficio artesanal.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Creada en México por una sola persona, cada prenda lleva consigo la pasión por crear algo único y especial. 
            Trabajamos con materiales de calidad, haciendo nuestro mejor esfuerzo por elegir opciones más sustentables sin pretender ser perfectos.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};