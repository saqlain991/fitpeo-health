import React from 'react';
import { navigationLinks } from '../data/navigationLinks';

const getIconPath = (name: string) =>
  `/assets/${name.toLowerCase().replace(/\s+/g, '-')}.svg`;

const Sidebar: React.FC = () => {
  const generalLinks = navigationLinks.filter(link => link.section === 'general');
  const toolsLinks = navigationLinks.filter(link => link.section === 'tools');
  const settingsLink = navigationLinks.find(link => link.name === 'Settings');

  return (
    <aside className="bg-[#F6FAFF] h-screen p-5 w-64 flex flex-col justify-between shadow-sm">
      {/* Top Section */}
      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-500">Health</span>care.
          </h1>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-gray-400 text-sm mb-4">General</h2>
            <ul className="space-y-2">
              {generalLinks.map(link => {
                const isActive = link.name === 'Dashboard';
                return (
                  <li key={link.name}>
                    <a
                      href="#"
                      className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors ${
                        isActive ? 'text-[#3533AC] bg-blue-50' : 'text-[#97A0A9]'
                      }`}
                    >
                      <img
                        src={getIconPath(link.name)}
                        alt={link.name}
                        className="w-5 h-5"
                        style={{ filter: isActive ? 'none' : 'grayscale(100%) brightness(0.5)' }}
                      />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-gray-400 text-sm mb-4">Tools</h2>
            <ul className="space-y-2">
              {toolsLinks.map(link => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-2 rounded-md text-[#97A0A9] hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={getIconPath(link.name)}
                      alt={link.name}
                      className="w-5 h-5"
                      style={{ filter: 'grayscale(100%) brightness(0.5)' }}
                    />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Settings Button */}
      {settingsLink && (
        <div className="pt-10">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md text-[#97A0A9] hover:bg-gray-100 transition-colors"
          >
            <img
              src={getIconPath(settingsLink.name)}
              alt={settingsLink.name}
              className="w-5 h-5"
              style={{ filter: 'grayscale(100%) brightness(0.5)' }}
            />
            <span>{settingsLink.name}</span>
          </a>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
