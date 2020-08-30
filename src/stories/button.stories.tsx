import React from 'react'
import Button, { Props } from '../components/Button'

export default {
  title: 'Button',
  argTypes: {
    // todo control how to fill json data
    label: { control: 'text', description: '展示的标签名', defaultValue: { label: 'fdsf'}, required: true, },
    value: { control: { type: 'number', min: 0, max: 10, disable: true }, description: '展示的标签值' },
  },
};

export const ButtonDemo: any = (args: Props) => <Button {...args} />;
ButtonDemo.args = {
  label: 'hello',
  value: 1,
};

// import React from "react";
// import { storiesOf } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
// import { action } from "@storybook/addon-actions";
// import Button from "../components/Button";
 
// const stories = storiesOf("Components", module);
 
// stories.add(
//   "Button",
//   withInfo({ inline: true })(() => (
//     <Button
//       value={1}
//       label="fds"
//     />
//   )),
// );