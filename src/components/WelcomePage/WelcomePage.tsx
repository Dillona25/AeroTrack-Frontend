import { Button } from "../Button/Button";
import { Footer } from "../Footer/Footer";

type Props = {
  handleSignInModal?: () => void;
  handleSignUpModal?: () => void;
};

export const WelcomePage = (props: Props) => {
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-grow w-full bg-MobileHeaderImage bg-cover bg-center flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
            <div className="gap-4 flex flex-col max-w-2xl">
              <h1 className="text-5xl sm:text-6xl text-white">AeroTrack</h1>
              <p className="text-base sm:text-lg text-white">
                Built for people who love aviation, by someone who loves
                aviation. AeroTrack is your all-in-one aviation companion. From
                keeping up on aviation news, tracking flights, or creating
                trips, we have you cleared for takeoff. Please Login or register
                to begin using AeroTrack!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-10 w-3/4">
              <Button text="Login" onClick={props.handleSignInModal} />
              <Button
                text="Signup"
                onClick={props.handleSignUpModal}
                className=" border-white border-[1px] bg-transparent hover:bg-white hover:text-black ease-in-out duration-[.5s]"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
