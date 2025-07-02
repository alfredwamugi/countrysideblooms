import Image from "next/image"

export function FloatingLogos() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-5 overflow-hidden">
      <div className="absolute top-20 left-10 floating-logo">
        <Image src="/logo-icon.svg" alt="" width={60} height={60} className="text-primary" />
      </div>
      <div className="absolute top-40 right-20 floating-logo-delayed">
        <Image src="/logo-icon.svg" alt="" width={40} height={40} className="text-primary-light" />
      </div>
      <div className="absolute bottom-40 left-20 floating-logo-delayed-2">
        <Image src="/logo-icon.svg" alt="" width={50} height={50} className="text-primary-lighter" />
      </div>
      <div className="absolute top-1/2 right-10 floating-logo">
        <Image src="/logo-icon.svg" alt="" width={35} height={35} className="text-primary" />
      </div>
      <div className="absolute bottom-20 right-1/3 floating-logo-delayed">
        <Image src="/logo-icon.svg" alt="" width={45} height={45} className="text-primary-light" />
      </div>
    </div>
  )
}
