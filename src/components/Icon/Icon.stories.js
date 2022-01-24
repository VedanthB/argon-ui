import { Icon } from "./Icon";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Ar Ui/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const MediumIcon = Template.bind({});

MediumIcon.args = {
  icon: faTimesCircle,
  size: "md",
};

export const SmallIcon = Template.bind({});

SmallIcon.args = {
  icon: faTimesCircle,
  size: "sm",
};

export const LargeIcon = Template.bind({});

LargeIcon.args = {
  icon: faAddressBook,
  size: "lg",
};
