import Map from "./components/Map";
import tw from "tailwind-styled-components";
import Link from "next/link";
export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />

          <Profile>
            <Name>milan katira</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C4E03AQF_EN1gYjUiNg/profile-displayphoto-shrink_200_200/0/1632731486114?e=1641427200&v=beta&t=g98vqlqt7ZPutwk1NFwLsXBgfOT54EojGuRsjGfwkUc" />
          </Profile>
        </Header>

        <ActionButtons>
          <ActionButton>
            <ActionButtonImages src="https://i.ibb.co/cyvcpfF/uberx.png" />
            ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImages src="https://i.ibb.co/n776JLm/bike.png" />
            wheel
          </ActionButton>
          <ActionButton>
            <ActionButtonImages src=" https://i.ibb.co/5RjchBg/uberschedule.png" />
            reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>
        where to go?
        </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;
const ActionItems = tw.div`
flex-1 p-4 
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-small
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 
`;

const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
flex bg-gray-200  flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
transform hover:scale-105 transition text-xl
`;

const ActionButtonImages = tw.img`
h-3/5 
`;

const InputButton=tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;