import { Chip } from "./Chip";

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
