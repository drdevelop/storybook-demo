import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer, Story } from '@storybook/addon-docs/blocks';
import { ConfigProvider } from 'antd';
import zhCn from 'antd/es/locale/zh_CN';
import React from 'react';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    inlineStories: false,
  },
})

export const decorators = [(Story) => {
  return (
    <ConfigProvider locale={zhCn}>
      <Story />
    </ConfigProvider>
  )
}]