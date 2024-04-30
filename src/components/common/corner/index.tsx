import { cn } from '@/lib/utils'

export default function Corner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 125 125" className={cn(className, 'z-40 h-2.5 w-2.5')}>
      <path fill="#259333" d="M0,0v125h125C55.96,125,0,69.04,0,0Z" />
    </svg>
  )
}
