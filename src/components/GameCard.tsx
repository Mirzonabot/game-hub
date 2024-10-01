import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"

interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}
            </Heading>
            <PlatformIconList platforms={game.platforms.map(p => p.platform)}/>
            {/* {game.platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
        </CardBody>
    </Card>
  )
}

export default GameCard