import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Sparkles, Heart, Leaf } from 'lucide-react';

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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-light text-accent-foreground">Hecho a Mano en México</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-primary-foreground mb-6 tracking-widest">
            Soleï
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light leading-relaxed max-w-2xl mx-auto">
            Ropa de playa artesanal
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/80 mb-10 font-light leading-relaxed max-w-xl mx-auto">
            Cada pieza es única, confeccionada con amor y dedicación. Materiales sustentables, procesos artesanales, tiempo dedicado a cada detalle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-light tracking-wide px-8"
              onClick={() => {
                const productsSection = document.getElementById('products');
                productsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar Colección
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-light tracking-wide backdrop-blur-sm"
            >
              Nuestra Historia
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"></div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide text-foreground">Sustentable</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Usamos materiales de calidad con enfoque sustentable, siendo honestos sobre nuestro proceso.
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground mb-4">
                Nuestras Colecciones
              </h2>
              <p className="text-muted-foreground font-light">
                Explora nuestras piezas artesanales
              </p>
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
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-foreground mb-6">
            El Arte de lo Artesanal
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            En Soleï, cada pieza de ropa de playa es más que un producto: es el resultado de horas de trabajo dedicado, 
            atención al detalle y amor por el oficio artesanal.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Creada en México por una sola persona, cada prenda lleva consigo la pasión por crear algo único y especial. 
            Nos esforzamos por usar materiales sustentables cuando es posible, siendo siempre honestos sobre nuestro proceso.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};