import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/ProductCard';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Search, X } from 'lucide-react';

/**
 * EDITABLE UI - ProductsPageUI
 * 
 * Página dedicada al catálogo completo de productos
 */

interface ProductsPageUIProps {
  logic: UseIndexLogicReturn;
}

export const ProductsPageUI = ({ logic }: ProductsPageUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
      className="bg-background"
    >
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-foreground mb-4">
              Catálogo
            </h1>
            <p className="text-muted-foreground font-light text-lg">
              Explora toda nuestra colección artesanal
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 py-6 text-base bg-card"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Collection Filters */}
          {!loadingCollections && collections.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button
                variant={selectedCollectionId === null ? "default" : "outline"}
                onClick={handleShowAllProducts}
                className="font-light tracking-wide"
              >
                Todos
              </Button>
              {collections.map((collection) => (
                <Button
                  key={collection.id}
                  variant={selectedCollectionId === collection.id ? "default" : "outline"}
                  onClick={() => handleViewCollectionProducts(collection.id)}
                  className="font-light tracking-wide"
                >
                  {collection.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3882caa9-fb59-415f-aece-5bee557656e1/hero-beach-waves.jpg"
            alt="Soleï Beach"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          {!loading && (
            <div className="mb-8">
              <p className="text-muted-foreground font-light text-center">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                {selectedCollectionId && ` en ${collections.find(c => c.id === selectedCollectionId)?.name}`}
                {searchTerm && ` para "${searchTerm}"`}
              </p>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
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
              <p className="text-muted-foreground font-light text-lg mb-4">
                No se encontraron productos
              </p>
              {(searchTerm || selectedCollectionId) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    handleShowAllProducts();
                  }}
                  className="font-light"
                >
                  Ver todos los productos
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </EcommerceTemplate>
  );
};