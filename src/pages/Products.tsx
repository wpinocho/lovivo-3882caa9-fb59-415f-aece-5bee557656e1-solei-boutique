import { HeadlessIndex } from "@/components/headless/HeadlessIndex"
import { ProductsPageUI } from "@/pages/ui/ProductsPageUI"

/**
 * ROUTE COMPONENT - Products
 * 
 * Página dedicada al catálogo completo de productos
 */

const Products = () => {
  return (
    <HeadlessIndex>
      {(logic) => <ProductsPageUI logic={logic} />}
    </HeadlessIndex>
  )
}

export default Products