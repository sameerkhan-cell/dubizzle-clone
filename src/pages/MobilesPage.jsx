import SearchLayout from '../components/SearchLayout'
import { getProductsByCategory } from '../data/mockProducts'

export default function MobilesPage() {
  const listings = getProductsByCategory('mob')

  return (
    <SearchLayout 
      title="Mobile Phones & Tablets" 
      category="mobiles" 
      listings={listings} 
      breadcrumbs={['Classifieds', 'Mobile Phones & Tablets']} 
    />
  )
}
