import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useStore } from "../store";
const FormCard = () => {
  const [error, setError] = useState(false);

  const {words, addClickWord, setWarning, setShowFormCard} = useStore();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.word.value === "" || e.target.translate.value === "") {
      setError(true);
      return;
    }
    const word = e.target.word.value;
    const translate = e.target.translate.value;
    const newWord = { word, translate };

    const existingWord = words.find((item) => item.word === word);
    if (existingWord) {
      setWarning("addWrong", true);
      //setErrorWarning({type: "addWrong", state: true});
      setShowFormCard();
      return;

    }
    addClickWord(newWord);
    //setWords([...words, newWord]);
    setShowFormCard();
    setWarning("addSuccess", true);
    //setErrorWarning({type: "addSuccess", state: true});
    console.log(words);
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] z-40 fixed top-0 left-0 bg-[rgba(0,0,0,0.7)]"></div>
      <form
        onSubmit={handleSubmit}
        className="flex  fixed top-1/2 z-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px]  justify-between flex-col gap-5 bg-slate-100 rounded-lg p-5 "
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => setShowFormCard()}
        >
          <XCircleIcon className="w-10 h-10 text-red-600 hover:text-red-700" />
        </button>

        <div className="flex flex-[1] flex-col gap-5 pt-5">
          {error && (
            <p className="text-red-600">Todos los campos son obligatorios</p>
          )}
          <label className="text-lg" htmlFor="word">
            Palabra
          </label>
          <input
            className="rounded-lg p-2 bg-white"
            type="text"
            name="word"
            placeholder="Escribe tu palabra"
          />

          <label className="text-lg" htmlFor="translate">
            Traduccion
          </label>
          <input
            className="rounded-lg p-2 bg-white"
            type="text"
            name="translate"
            placeholder="Escribe la traduccion"
          />
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 mt-3 rounded-full"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormCard;
