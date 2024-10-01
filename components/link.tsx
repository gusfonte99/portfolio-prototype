import { SectionHash, SectionName, type Link } from "../lib/types"

type LinkProps = Link & {
  active: boolean
  onClick: (sectionName: SectionName, sectionHash: SectionHash, offset?: number) => void
}

export default function Link ({ name, hash, active, onClick }: LinkProps) {

  return (
    <li>
      <button data-active={active} onClick={() => {onClick(name, hash)}} className="w-full h-full py-3 data-[active=true]:text-white data-[active=true]:font-medium">
        {name}
      </button>
    </li>
  )
}