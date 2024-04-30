import Corner from '../common/corner'

export default function PageBorder() {
  return (
    <div>
      <span className="fixed right-0 top-0 z-40 h-1.5 w-full bg-primary"></span>
      <span className="fixed bottom-0 right-0 z-40 h-1.5 w-full bg-primary"></span>
      <Corner className="fixed bottom-1.5 left-1.5" />
      <Corner className="fixed left-1.5 top-1.5 rotate-90" />
      <Corner className="fixed right-1.5 top-1.5 rotate-180" />
      <Corner className="fixed bottom-1.5 right-1.5 -rotate-90" />
    </div>
  )
}
