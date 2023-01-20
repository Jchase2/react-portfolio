import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setactiveItem] = useState("home");

  // TODO: Set name to correct type.
  const handleItemClick = (name: any) => setactiveItem(name);

  return (
    <Menu stackable inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => handleItemClick("home")}
      >
        Home
      </Menu.Item>
      <Menu.Item>
        <Dropdown inline text="Links">
          <Dropdown.Menu>
            <Dropdown.Item
              text="My Notes"
              href="https://notes.jamesdchase.com"
              icon="external"
            />
            <Dropdown.Item
              text="Nextcloud"
              href="https://nextcloud.jamesdchase.com"
              icon="external"
            />
            <Dropdown.Item
              text="Plex"
              href="https://plex.jamesdchase.com"
              icon="external"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
