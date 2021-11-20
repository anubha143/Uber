import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
          <Profile>
            <Name>Anubha Pant</Name>
            <UserImage src="https://www.pexels.com/photo/photo-of-a-girl-playing-with-the-camera-860538/" />
          </Profile>
        </Header>
        {/* ActionsButtons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}
// TAILWIND STYLED COMPONENETS
const Wrapper = tw.div`flex flex-col bg-white h-screen`;
const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center 
`;
const UberLogo = tw.img`
h-28 w-28 object-contain 
`;
const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const ActionButtons = tw.div`
flex justify-between 
`;
const ActionButton = tw.div`
bg-gray-200 m-1 h-32 flex-1 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5
`;
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl rounded-lg p-4 flex items-center mt-8
`;
