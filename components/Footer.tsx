export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-text-secondary">
          &copy; {new Date().getFullYear()} Mehdi Oulad Khlie. Built with 💜 
        </p>
        <p className="text-sm text-text-secondary/60 mt-2">
          Made with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
