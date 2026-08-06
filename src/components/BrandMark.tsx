import dropletCrossMark from '../assets/stutes-droplet-cross.svg'

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img className="brand-mark-symbol" src={dropletCrossMark} alt="" />
      <span className="brand-wordmark">
        <strong>Stutes Clean</strong>
        <span>Water Project Inc.</span>
        <small>Giving Hope</small>
      </span>
    </span>
  )
}
