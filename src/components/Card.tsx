import Equilibrium from "../assets/image-equilibrium.jpg";
import EthereumIcon from "../assets/icon-ethereum.svg";
import ClockIcon from "../assets/icon-clock.svg";
import Avatar from "../assets/image-avatar.png";

const Card = () => {
  return (
    <div className="bg-VeryDarkBlueCard p-5 w-72 rounded-xl">
      <img className="rounded-lg" src={Equilibrium} alt="equilibrium" />
      <div>
        <h2 className="text-White text-lg font-normal mt-3">
          Equilibrium #3429
        </h2>
        <p className="text-SoftBlue text-[0.91em] font-light my-3 ">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between py-1">
          <div className="text-sm flex">
            <img src={EthereumIcon} alt="ethereum" />
            <p className="text-Cyan font-semibold px-2">0.041 ETH</p>
          </div>
          <div className="flex text-sm">
            <img src={ClockIcon} alt="clock" className="h-4 my-auto" />
            <p className="text-SoftBlue font-light px-2">3 days left</p>
          </div>
        </div>
      </div>
      <hr className="text-VeryDarkBlueLine my-3" />
      <div className="flex">
        <img
          src={Avatar}
          alt="avatar"
          className="w-7 h-7 border-White border rounded-full"
        />
        <p className="my-auto mx-3 text-SoftBlue font-light text-sm">
          Creation of
          <span className="text-White"> Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
