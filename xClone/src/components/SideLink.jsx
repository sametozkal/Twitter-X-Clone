import React from 'react'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name;
    return (
      <li className="group" onClick={() => onMenuItemClick(name)}>
        <a
          href={name.toLowerCase()}
          className="cursor-pointer block text-base mb-2 pointer-events-none"
        >
          <div className="inline-block">
            <div
              className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pr-3 py-2 pl-2
            
             ${isActive ? "text-primary-base" : ""}
            `}
            >
              <Icon />
              <span className="ml-2 font-bold">{name}</span>
            </div>
          </div>
        </a>
      </li>
    );
  };

export default SideLink
