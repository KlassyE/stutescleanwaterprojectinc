import officialLogo from '../assets/stutes-official-logo.png'

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img className="brand-logo" src={officialLogo} alt="" />
    </span>
  )
}
