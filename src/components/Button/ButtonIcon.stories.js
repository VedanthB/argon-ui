import { Button } from "./Button";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Ar UI/Button/Icon",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  square: false,
  icon: faTimesCircle,
  kind: "normal",
};

export const Primary = Template.bind({});

Primary.args = {
  size: "md",
  icon: faTimesCircle,
  square: false,
  variant: "primary",
  kind: "normal",
};

export const Secondary = Template.bind({});

Secondary.args = {
  icon: faTimesCircle,
  size: "md",
  square: false,
  variant: "secondary",
  kind: "normal",
};

export const Success = Template.bind({});

Success.args = {
  icon: faTimesCircle,
  size: "lg",
  square: false,
  variant: "success",
  kind: "normal",
};

export const Dander = Template.bind({});

Dander.args = {
  icon: faTimesCircle,
  size: "sm",
  square: false,
  variant: "danger",
  kind: "normal",
};

export const Warning = Template.bind({});

Warning.args = {
  icon: faTimesCircle,
  size: "md",
  square: false,
  variant: "warning",
  kind: "normal",
};

export const Info = Template.bind({});

Info.args = {
  icon: faAddressBook,
  size: "md",
  square: false,
  variant: "info",
  kind: "normal",
};

export const Light = Template.bind({});

Light.args = {
  icon: faTimesCircle,
  size: "md",
  square: false,
  variant: "light",
  kind: "normal",
};

export const Dark = Template.bind({});

Dark.args = {
  icon: faTimesCircle,
  size: "md",
  square: false,
  variant: "dark",
  kind: "normal",
};
