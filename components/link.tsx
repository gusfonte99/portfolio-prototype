import { SectionHash, type Link } from "../lib/types"

type LinkProps = Link & {
  isActive: boolean
  onClick: (sectionHash: SectionHash, offset?: number) => void
}

export default function Link ({ name, hash, isActive, onClick }: LinkProps) {

  return (
    <li>
      <button data-active={isActive} onClick={() => {onClick(hash)}} className="w-full h-full py-3 transition duration-600 data-[active=true]:text-white data-[active=true]:font-semibold">
        {name}
      </button>
    </li>
  )
}