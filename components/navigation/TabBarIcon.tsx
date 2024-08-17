// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function TabBarIcon({ style, ...rest }: IconProps<any>) {
  return (
    <FontAwesome size={20} style={[{ color: "inherit" }, style]} {...rest} />
  );
}
