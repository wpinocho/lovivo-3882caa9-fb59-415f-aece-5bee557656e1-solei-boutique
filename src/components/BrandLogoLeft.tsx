import { useSettings } from '@/contexts/SettingsContext'
import { getLogoUrl } from '@/lib/logo-utils'

export const BrandLogoLeft = () => {
  const { logos } = useSettings()

  if (!logos) {
    return (
      <h1 className="text-2xl font-light tracking-widest text-primary ml-2">Soleï</h1>
    )
  }

  const mainLogoUrl = getLogoUrl(logos, 'main_logo')

  if (!mainLogoUrl) {
    return (
      <h1 className="text-2xl font-light tracking-widest text-primary ml-2">Soleï</h1>
    )
  }

  return (
    <a href="/" aria-label="Home" className="ml-2">
      <img 
        src={mainLogoUrl} 
        alt="Main logo"
        className="h-8 w-auto object-contain" 
      />
    </a>
  )
}