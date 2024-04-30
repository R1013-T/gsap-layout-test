import Corner from '../common/corner'

export default function Header() {
  return (
    <header className="relative bg-primary p-3 text-primary-foreground ">
      <Corner className="absolute -bottom-2.5 left-0.5 rotate-90" />
      <Corner className="absolute -bottom-2.5 right-0.5 rotate-180" />
      Header
    </header>
  )
}
