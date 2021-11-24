import React from "react"
import { addDecorator, addParameters } from '@storybook/react'
import CenterAlign from '../src/components/CenterAlignComponent/CenterAlign'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// addDecorator(story => <CenterAlign>{story()}</CenterAlign>)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
// addDecorator(withKnobs)
// addParameters({
//   viewport: {
//     viewports: INITIAL_VIEWPORTS,
//   }
// })
