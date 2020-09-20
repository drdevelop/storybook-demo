import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

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