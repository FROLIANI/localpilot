// components/Header.tsx
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">All-In-One Business Directory</h1>
              <p className="text-sm text-gray-600">All-in-One Business Search Directory Center</p>
            </div>
          </div>

          {/* Top Links */}
          <nav className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Member Login</a>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              List Your Business
            </button>
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-nav y-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-6 py-3 text-sm">
            <li><a href="#" className="hover:underline">Home ▼</a></li>
            <li><a href="#" className="hover:underline">Member Directory ▼</a></li>
            <li><a href="#" className="hover:underline">Upcoming Events ▼</a></li>
            <li><a href="#" className="hover:underline">Coupons & Deals ▼</a></li>
            <li><a href="#" className="hover:underline">Jobs Board ▼</a></li>
            <li><a href="#" className="hover:underline">Media Galleries ▼</a></li>
            <li><a href="#" className="hover:underline">Local Classifieds ▼</a></li>
            <li className="ml-auto">
              <form className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Name or Keyword"
                  className="px-4 py-2 rounded text-gray-900"
                />
                <button className="bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}