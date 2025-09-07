import { X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
        style={{background:`rgba(202, 135, 135, 1)`}}
      >
       {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-4">
            <li >
              <a href="#" className="text-zinc-200  hover:text-primary font-medium block">
                Gold Jewellery
              </a>
            </li>
              <hr className=" border-gray-300 w-full" />
           
            <li>
              <a href="#" className="text-zinc-200 hover:text-primary font-medium block">
                Silver Jewellery
              </a>
            </li>
              <hr className=" border-gray-300 w-full" />
            <li>
              <a href="#" className="text-zinc-200 hover:text-primary font-medium block">
                Trending Collection
              </a>
            </li>
              <hr className=" border-gray-300 w-full" />
            <li>
              <a href="#" className="text-zinc-200 hover:text-primary font-medium block">
                Gifts
              </a>
            </li>
              <hr className=" border-gray-300 w-full" />
            <li>
              <a href="#" className="text-zinc-200 hover:text-primary font-medium block">
                Shop by Occasion
              </a>
            </li>
              <hr className=" border-gray-300 w-full" />

            <li>
              <a href="#" className="bg-white px-3 py-2 inline-block font-medium">
                Login / SignUp
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
