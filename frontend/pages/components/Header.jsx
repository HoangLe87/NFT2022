const Header = () => {
  return (
    <div className="absolute w-full mt-5 ml-0 z-10">
      <div className="flex justify-between mb-5 mx-10">
        <div>Crypto Devs</div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Marketplace</li>
          <li>DEX</li>
          <li>DAO</li>
          <li>Sponsor</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
