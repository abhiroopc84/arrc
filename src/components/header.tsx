const Header = () => {
    return (
      <div className="flex justify-between flex-row gap-2 items-center p-3 text-[0.9rem] font-medium font-jetbrainsmono">
        <div className="flex gap-2">
          <a href="/" className="underline underline-offset-4">
            abhiroop
          </a>
          /
          <div></div>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/abhiroopc84/"
            target="_blank"
            className="underline underline-offset-4"
          >
            github
          </a>
          /
          <a
            href="https://x.com/me_abhiroop"
            target="_blank"
            className="underline underline-offset-4"
          >
            twitter
          </a>
          /
          <a
            href="https://www.linkedin.com/in/abhiroopreddyc/"
            target="_blank"
            className="underline underline-offset-4"
          >
            linkedin
          </a>
        </div>
      </div>
    );
  };
  
  export default Header;
  