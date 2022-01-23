import { Button } from "./Button";

export default {
  title: "Ar UI/Button/Filled",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "button text is crazy",
  square: true,
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary Button",
  size: "md",
  square: true,
  variant: "primary",
  kind: "filled",
};
