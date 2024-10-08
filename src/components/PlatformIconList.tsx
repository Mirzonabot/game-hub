import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key:string]: IconType} = {
        pc:FaWindows,
        playstation: FaPlaystation,
        playstation5: FaPlaystation,
        playstation4: FaPlaystation,
        playstation3: FaPlaystation,
        'xbox-series-x' :FaXbox,
        'xbox-one':FaXbox,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web : BsGlobe,
        android: FaAndroid
    }
  return (
    <HStack marginY={1}>
      {platforms.slice(0,4).map((platform) => (
        // <Text>{platform.slug}</Text>
        <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
