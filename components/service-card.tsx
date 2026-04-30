import Link from 'next/link'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  price: string
  href: string
}

export default function ServiceCard({ number, title, description, price, href }: ServiceCardProps) {
  return (
    <div className="border border-gray-200 p-8 flex flex-col hover:border-gold transition-colors duration-300">
      <span className="text-gold font-sans text-sm font-medium mb-4">{number}</span>
      <h3 className="font-serif text-navy text-2xl mb-3">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed mb-6 flex-1">{description}</p>
      <div className="flex items-end justify-between">
        <span className="font-sans text-gold font-medium text-sm">{price}</span>
        <Link
          href={href}
          className="text-xs font-sans text-navy hover:text-gold transition-colors flex items-center gap-1"
        >
          Learn more
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
