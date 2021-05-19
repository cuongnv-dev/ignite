import * as React from "react"
import { View, Image, ImageStyle, Platform } from "react-native"
import { IconProps } from "./icon.props"
import { icons } from "./icons"

const ROOT: ImageStyle = {
  resizeMode: "contain",
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle } = props
  const [size, setSize] = React.useState({ width: 0, height: 0 })

  React.useLayoutEffect(() => {
    if (Platform.OS === "web") {
      // web requires a different method to get it's size
      Image.getSize(icons[icon], (width, height) => {
        setSize({ width, height })
      })
    } else {
      const { width, height } = Image.resolveAssetSource(icons[icon])
      setSize({ width, height })
    }
  }, [])

  return (
    <View style={containerStyle}>
      <Image style={[ROOT, styleOverride, size]} source={icons[icon]} />
    </View>
  )
}
