import React, { useState, useEffect } from "react"
// import { DevSettings } from "react-native"
import { loadString, saveString } from "../app/utils/storage"

/**
 * Toggle Storybook mode, in __DEV__ mode only.
 *
 * In non-__DEV__ mode, or when Storybook isn't toggled on,
 * renders its children.
 *
 * The mode flag is persisted in async storage, which means it
 * persists across reloads/restarts - this is handy when developing
 * new components in Storybook.
 */
export function ToggleStorybook(props) {
  // Until we can get storybook working on the web somehow. Maybe with a get param?
  // http://url/?storybook=true ???
  return props.children
}
