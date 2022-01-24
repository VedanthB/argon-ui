import { Avatar } from "./Avatar";

export default {
  title: "Ar UI/Avatar/Text",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});

DefaultAvatar.args = {
  variant: "text",
  username: "Argon",
  size: "md",
};

export const TinyAvatar = Template.bind({});
TinyAvatar.args = {
  variant: "text",
  username: "Argon",
  size: "tiny",
};
export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  variant: "text",
  username: "Argon",
  size: "sm",
};
export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  variant: "text",
  username: "Argon",
  size: "large",
};
