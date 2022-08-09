import Favicon from "react-favicon";
import icon from "./images/favicon-32x32.png";
import imgThanks from './images/illustration-thank-you.svg'
import { AiFillStar } from "react-icons/ai";
import $ from "jquery";
import { Routes, Route, Link } from "react-router-dom";

var rating = 5;

function inputRating() {
  rating = $('input[name="rating"]:checked').val();
}

function HomePage() {
  return (
    <div className="bg-very-dark-blue rounded-3xl p-8 text-white w-[400px]">
      <span className=" text-orange inline-block p-4 rounded-full bg-dark-blue mb-6">
        <AiFillStar size={20} />
      </span>
      <h1 className=" font-bold text-3xl mb-4">How did we do?</h1>
      <p className=" text-paragraph text-medium-grey mb-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mb-4">
        <div className="rounded-full h-[50px] w-[50px] relative group cursor-pointer">
          <input
            type="radio"
            name="rating"
            id="rating1"
            value="1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full appearance-none bg-dark-blue rounded-full peer transition-colors duration-300 ease-in group-hover:bg-orange checked:bg-medium-grey"
          />
          <label
            htmlFor="rating1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-300 ease-in group-hover:text-white peer-checked:text-white"
          >
            1
          </label>
        </div>
        <div className="rounded-full h-[50px] w-[50px] relative group cursor-pointer">
          <input
            type="radio"
            name="rating"
            id="rating2"
            value="2"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full appearance-none bg-dark-blue rounded-full peer transition-colors duration-300 ease-in group-hover:bg-orange checked:bg-medium-grey"
          />
          <label
            htmlFor="rating2"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-300 ease-in group-hover:text-white peer-checked:text-white"
          >
            2
          </label>
        </div>
        <div className="rounded-full h-[50px] w-[50px] relative group cursor-pointer">
          <input
            type="radio"
            name="rating"
            id="rating3"
            value="3"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full appearance-none bg-dark-blue rounded-full peer transition-colors duration-300 ease-in group-hover:bg-orange checked:bg-medium-grey"
          />
          <label
            htmlFor="rating3"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-300 ease-in group-hover:text-white peer-checked:text-white"
          >
            3
          </label>
        </div>
        <div className="rounded-full h-[50px] w-[50px] relative group cursor-pointer">
          <input
            type="radio"
            name="rating"
            id="rating4"
            value="4"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full appearance-none bg-dark-blue rounded-full peer transition-colors duration-300 ease-in group-hover:bg-orange checked:bg-medium-grey"
          />
          <label
            htmlFor="rating4"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-300 ease-in group-hover:text-white peer-checked:text-white"
          >
            4
          </label>
        </div>
        <div className="rounded-full h-[50px] w-[50px] relative group cursor-pointer">
          <input
            type="radio"
            name="rating"
            id="rating5"
            value="5"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full appearance-none bg-dark-blue rounded-full peer transition-colors duration-300 ease-in group-hover:bg-orange checked:bg-medium-grey"
          />
          <label
            htmlFor="rating5"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-300 ease-in group-hover:text-white peer-checked:text-white"
          >
            5
          </label>
        </div>
      </div>
      <Link
        to="thanks"
        onClick={inputRating}
        className="bg-orange flex justify-center items-center w-full h-[50px] rounded-full uppercase font-bold tracking-wider transition-colors duration-300 ease-in hover:text-orange hover:bg-white"
      >
        submit
      </Link>
    </div>
  );
}

function ThanksPage() {
  return (
    <div className="bg-very-dark-blue rounded-3xl p-8 text-white w-[400px] flex flex-col items-center text-center">
        <img src={imgThanks} alt="..." />
        <span className="bg-dark-blue text-orange px-3 py-1 mt-6 mb-6 rounded-full opacity-75 text-sm">You selected {rating} out of 5</span>
        <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
        <p className="text-sm opacity-75">We appreciated you taking the time to give a rating. If you ever need more support, don't hestite to get in touch!</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Favicon url={icon} />
      <div className="h-screen w-screen bg-zinc-900 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
