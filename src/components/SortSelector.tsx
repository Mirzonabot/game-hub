import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { data } from "framer-motion/client";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by relevance
      </MenuButton>
      <MenuList>

        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
        <MenuItem>Item 5</MenuItem>
        <MenuItem>Item 6</MenuItem>
        {/* {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))} */}
      </MenuList>
    </Menu>
  );
}

export default SortSelector