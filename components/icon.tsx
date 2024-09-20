import "boxicons";
import { IconProps } from "@/app/types/boxicons";



export default function Icon({ type, name, size="128px", color="#ffffff" }: IconProps) {
  return <box-icon type={type} name={name} size={size} color={color}></box-icon>;
}
