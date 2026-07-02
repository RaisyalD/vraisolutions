const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="w-full py-section-gap-md px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-headline-md text-headline-md font-bold text-on-surface">
            Vrai Solutions
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            Architecting the digital future with precision, passion, and unparalleled expertise.
          </p>
        </div>

        {/* Links + copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2026 Vrai Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
