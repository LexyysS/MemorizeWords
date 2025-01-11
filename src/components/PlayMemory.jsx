import { XCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useStore } from "../store";

const PlayMemory = () => {
  const { words , setWarning , setPlayMemory} = useStore();

  const [randomWord, setRandomWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const [knownWords, setKnownWords] = useState(words);
  const [Known, setKnown] = useState(false);

  const handleClick = () => {
    const newWords = knownWords.filter((item) => item.word !== randomWord.word);
    if (newWords.length === 0) {
      setPlayMemory();
      setWarning("successPlay",true);
      return;
    }
    const newRandomWord = newWords[Math.floor(Math.random() * newWords.length)];
    setKnownWords(newWords);
    setRandomWord(newRandomWord);
    setKnown(false);
  };

  const handleNext = () => {
    setRandomWord(knownWords[Math.floor(Math.random() * knownWords.length)]);
    setKnown(false);
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] fixed  z-50 top-0 left-0 bg-[rgba(0,0,0,0.9)]"></div>
      <div className="bg-white fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[40vw] md:h-[50vh] w-[80vw] h-[50vh]  rounded-xl p-5 flex flex-col justify-center">
        <button
          className="absolute top-2 right-2"
          onClick={() => setPlayMemory()}
        >
          <XCircleIcon className="w-10 h-10 text-red-600 hover:text-red-700" />
        </button>

        <div className="flex flex-col justify-between p-5 items-center gap-2 flex-1">
          <h1 className="text-3xl font-bold text-center mt-5 text-black">
            Recordar palabras
          </h1>
          <div className="flex flex-col ">
            <p className="text-5xl font-bold text-center text-blue-950 ">
              {randomWord.word}
            </p>

            {Known && (
              <p className="text-3xl font-bold text-center text-orange-500">
                {randomWord.translate}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center w-full gap-2">
            {!Known ? (
              <button
                onClick={handleClick}
                className="bg-blue-600 w-1/2 cursor-pointer hover:bg-blue-700 text-white font-bold p-3 rounded-full text-center"
              >
                Lo se
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-600 w-1/2 cursor-pointer hover:bg-blue-700 text-white font-bold p-3 rounded-full text-center"
              >
                Siguiente
              </button>
            )}

            {!Known && (
              <buttton
                onClick={() => setKnown(true)}
                className="bg-red-600 w-1/2 cursor-pointer hover:bg-red-700 text-white font-bold p-3 rounded-full text-center"
              >
                No lo se
              </buttton>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayMemory;
