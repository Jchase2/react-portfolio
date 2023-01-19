import React from "react";
import { Menu } from "semantic-ui-react";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setactiveItem] = useState('home');

  // TODO: Set name to correct type.
  const handleItemClick = (name: any) => setactiveItem(name);

  return (
      <Menu stackable inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={() => handleItemClick('home')}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='notes'
          active={activeItem === 'notes'}
          onClick={() => handleItemClick('notes')}
          color={'black'}
        >
          Notes
        </Menu.Item>
        <Menu.Item
          name='nextcloud'
          active={activeItem === 'nextcloud'}
          onClick={() => handleItemClick('nextcloud')}
        >
          Nextcloud
        </Menu.Item>
        <Menu.Item
          name='plex'
          active={activeItem === 'plex'}
          onClick={() => handleItemClick('plex')}
        >
          Plex
        </Menu.Item>
      </Menu>
  );
};

export default Navbar;
