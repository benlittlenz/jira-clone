import { Icon } from "../Icon/Index"
import { LeftNav, Item, ItemText } from "./LeftNav.styled";

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
    </LeftNav>
  );
}
