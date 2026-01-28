import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <span className="font-bold text-primary-foreground text-sm">
                  BFS
                </span>
              </div> */}
              <img src="/images/logo.png" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold text-background leading-none">
                  BFS
                </span>
                <span className="text-xs text-background/70">Healthcare</span>
              </div>
            </div>
            <p className="text-sm text-background/70">
              Mitra distribusi alat kesehatan terpercaya di Indonesia
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-background mb-4">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#products"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Nursing Chapter
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Operating Theatre
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Emergency Chapter
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Support Chapter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Kemitraan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:business@bfsbintanglima.com"
                  className="text-background/70 hover:text-background transition-colors break-all"
                >
                  business@bfsbintanglima.com
                </a>
              </li>
              <li>
                <a
                  href="https://bfsbintanglima.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  bfsbintanglima.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>
              &copy; {currentYear} PT. BFS Bintang Lima. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
