import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-400">

        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-semibold">
            Wajid<span className="text-blue-500">.dev</span>
          </h2>
          <p className="mt-3">
            Full Stack Web Developer building modern, scalable web applications.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/" target="_blank" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:wajid@email.com" className="hover:text-white">
                Email
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-gray-800 text-xs text-gray-500">
        © {new Date().getFullYear()} Wajid Ansari. All rights reserved.
      </div>
    </footer>
  );
}
