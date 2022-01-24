import { Avatar } from "./Avatar";

export default {
  title: "Ar UI/Avatar/Image",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const DefaultImageAvatar = Template.bind({});
DefaultImageAvatar.args = {
  src: "https://thumbor.forbes.com/thumbor/711x711/https://specials-images.forbesimg.com/imageserve/613df8e8d679a21b766a1636/bigbun-2/960x0.jpg?fit=scale",
  username: "Argon",
  variant: "image",
  size: "md",
};

export const TinyImageAvatar = Template.bind({});
TinyImageAvatar.args = {
  src: "https://thumbor.forbes.com/thumbor/711x711/https://specials-images.forbesimg.com/imageserve/613df8e8d679a21b766a1636/bigbun-2/960x0.jpg?fit=scale",
  username: "Argon",
  variant: "image",
  size: "tiny",
};

export const SmallImageAvatar = Template.bind({});
SmallImageAvatar.args = {
  src: "https://thumbor.forbes.com/thumbor/711x711/https://specials-images.forbesimg.com/imageserve/613df8e8d679a21b766a1636/bigbun-2/960x0.jpg?fit=scale",
  username: "Argon",
  variant: "image",
  size: "sm",
};

export const LargeImageAvatar = Template.bind({});
LargeImageAvatar.args = {
  src: "https://thumbor.forbes.com/thumbor/711x711/https://specials-images.forbesimg.com/imageserve/613df8e8d679a21b766a1636/bigbun-2/960x0.jpg?fit=scale",
  username: "Argon",
  variant: "image",
  size: "large",
};
