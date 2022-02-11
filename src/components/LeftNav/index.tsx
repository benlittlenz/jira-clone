import { Icon } from "../Icon/Index";

import { LeftNav, Item, ItemText, Bottom } from "./LeftNav.styled";

export const ProjectLeftNav = () => {
  return (
    <LeftNav>
      <Item>
        <Icon type="search" size={22} top={1} left={3} />
        <ItemText>Search Icon</ItemText>
      </Item>

      <Item>
        <Icon type="plus" size={27} />
        <ItemText>Create Issue</ItemText>
      </Item>

      <Bottom>
        <Item>
          <Icon type="help" size={25} top={1} />
          <ItemText>About</ItemText>
        </Item>
      </Bottom>
    </LeftNav>
  );
};
