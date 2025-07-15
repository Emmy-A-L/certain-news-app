import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-white min-h-[100svh] flex flex-col gap-12 justify-center items-center">
      <div className="text-center">
        <img src="/11663458_20944446.svg" alt="404 image" className="w-[30vw] h-[30vw] mx-auto" />
        <h1 className="text-[5vw]">
            Oops! You found our hidden page.
        </h1>
      </div>
      <div>
        <h2 className="text-[2vw]">Head back to the <Link to={"/"} className="text-blue-800">home page</Link> to check out the latest news</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
