import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Alex Gui © 2026
        </p>
      </div>
    </footer>
  );
}