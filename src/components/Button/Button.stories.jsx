import React from 'react';
import Button from './Button';
const SwitchTypeEnum = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DEFAULT: 'default',
  INHERIT: 'inherit',
};
const SwitchSizeEnum = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};
const SwitchVarientEnum = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  TEXT: 'text',
};
const handleOnClick = () => {
  alert("test");
};
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    href: {
      defaultValue: {
        summary: '',
      },
    },
    color: {
      summary: SwitchTypeEnum,
      defaultValue: {
        summary: SwitchTypeEnum.INHERIT,
      },
      control: {
        type: 'select',
        options: [
          SwitchTypeEnum.PRIMARY,
          SwitchTypeEnum.SECONDARY,
          SwitchTypeEnum.INHERIT,
          SwitchTypeEnum.DEFAULT,
        ],
      },
    },
    variant: {
      summary: SwitchTypeEnum,
      defaultValue: {
        summary: SwitchVarientEnum.TEXT,
      },
      control: {
        type: 'select',
        options: [
          SwitchVarientEnum.CONTAINED,
          SwitchVarientEnum.OUTLINED,
          SwitchVarientEnum.TEXT,
        ],
      },
    },
    backgroundColor: {
      control: 'color',
    },
    options: {
      control: {
        type: 'object',
      },
    },
    isDisabled: false,
    startIcon: false,
    endIcon: false,
    size: {
      summary: SwitchSizeEnum,
      defaultValue: {
        summary: SwitchSizeEnum.MEDIUM,
      },
      control: {
        type: 'select',
        options: [
          SwitchSizeEnum.SMALL,
          SwitchSizeEnum.MEDIUM,
          SwitchSizeEnum.LARGE,
        ],
      },
    },
  },
};

export const Basic = (args) => <Button {...args} />;
export const LinkButton = (args) => <Button {...args} />;
export const StartIconButton = (args) => <Button {...args} />;
export const EndIconButton = (args) => <Button {...args} />;
Basic.args = {
  href: '',
  color: SwitchTypeEnum.INHERIT,
  label: 'button',
  variant: SwitchVarientEnum.OUTLINED,
  options: {},
  isDisabled: false,
  startIcon: false,
  endIcon: false,
  size: SwitchSizeEnum.MEDIUM,
  onClick: handleOnClick,
};
LinkButton.args = {
  href: 'http://naver.com',
  color: SwitchTypeEnum.INHERIT,
  label: 'button',
  variant: SwitchVarientEnum.TEXT,
  options: {},
  isDisabled: false,
  startIcon: false,
  endIcon: false,
  size: SwitchSizeEnum.MEDIUM,
};
StartIconButton.args = {
  href: '',
  color: SwitchTypeEnum.INHERIT,
  label: 'button',
  variant: SwitchVarientEnum.TEXT,
  options: {},
  isDisabled: false,
  startIcon: true,
  endIcon: false,
  size: SwitchSizeEnum.MEDIUM,
  onClick: null,
};
EndIconButton.args = {
  href: '',
  color: SwitchTypeEnum.INHERIT,
  label: 'button',
  variant: SwitchVarientEnum.TEXT,
  options: {},
  isDisabled: false,
  startIcon: false,
  endIcon: true,
  size: SwitchSizeEnum.MEDIUM,
  onClick: null,
};
