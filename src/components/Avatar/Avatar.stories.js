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
