import { useAssets as useLocalAssets } from "expo-asset"

// Unfortunately, expo web requires images be preloaded before react can use them.
export const useAssets = () => {
  const [assets] = useLocalAssets([
    require("../screens/demo/logo-ignite.png"),
    require("../screens/demo/heart.png"),
    require("../screens/welcome/bowser.png"),
    require("../components/icon/icons/arrow-left.png"),
    require("../components/icon/icons/bullet.png"),
  ])

  return assets
}
