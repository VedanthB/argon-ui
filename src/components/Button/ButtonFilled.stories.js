import { Button } from "./Button";

export default {
  title: "Ar UI/Button/Filled",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Default Button",
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

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Secondary Button",
  size: "md",
  square: true,
  variant: "secondary",
  kind: "filled",
};

export const Success = Template.bind({});

Success.args = {
  children: "Success Button",
  size: "md",
  square: true,
  variant: "success",
  kind: "filled",
};

export const Dander = Template.bind({});

Dander.args = {
  children: "Danger Button",
  size: "md",
  square: true,
  variant: "danger",
  kind: "filled",
};

export const Warning = Template.bind({});

Warning.args = {
  children: "Warning Button",
  size: "md",
  square: true,
  variant: "warning",
  kind: "filled",
};

export const Info = Template.bind({});

Info.args = {
  children: "Info Button",
  size: "md",
  square: true,
  variant: "info",
  kind: "filled",
};

export const Light = Template.bind({});

Light.args = {
  children: "Light Button",
  size: "md",
  square: true,
  variant: "light",
  kind: "filled",
};

export const Dark = Template.bind({});

Dark.args = {
  children: "Dark Button",
  size: "md",
  square: true,
  variant: "dark",
  kind: "filled",
};
