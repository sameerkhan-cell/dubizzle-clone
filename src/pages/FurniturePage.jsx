import SearchLayout from '../components/SearchLayout'
import { getProductsByCategory } from '../data/mockProducts'

export default function FurniturePage() {
  const listings = getProductsByCategory('furn')

  return (
    <SearchLayout 
      title="Furniture, Home & Garden" 
      category="furniture" 
      listings={listings} 
      breadcrumbs={['Classifieds', 'Furniture, Home & Garden']} 
    />
  )
}
