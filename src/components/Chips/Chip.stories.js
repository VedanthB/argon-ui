import { Icon } from "../Icon/Icon";
import { Chip } from "./Chip";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Ar UI/Chip",
  component: Chip,
};

const Template = (args) => <Chip {...args} />;

export const BasicChip = Template.bind({});

BasicChip.args = {
  kind: "outline",
  variant: "primary",
  children: "Chip",
};

export const FilledChip = Template.bind({});

FilledChip.args = {
  kind: "filled",
  variant: "info",
  children: "Chip",
  size: "md",
};

export const IconChip = () => {
  return (
    <Chip style={{ width: "fit-content" }} kind="outline" variant="secondary">
      Delete
      <Icon
        onClick={() => console.log("chip clicked")}
        style={{ marginLeft: "6px" }}
        icon={faTimesCircle}
      />
    </Chip>
  );
};
