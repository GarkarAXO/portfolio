import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-primary/10 text-slate-500 text-sm w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="font-bold text-slate-900 dark:text-white text-base">Erick Axel García Jiménez</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 font-medium">
          <Link className="hover:text-primary transition-colors" href="https://github.com/GarkarAXO" target="_blank">GitHub</Link>
          <Link className="hover:text-primary transition-colors" href="https://linkedin.com/in/e-axel-garcia" target="_blank">LinkedIn</Link>
          <Link className="hover:text-primary transition-colors" href="mailto:e.axel12@gmail.com">Email</Link>
        </div>
      </div>
    </footer>
  );
}
