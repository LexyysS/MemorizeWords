import {
  PlusCircleIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import {useStore} from "./store"
import FormCard from "./components/FormCard";
import Card from "./components/Card";
import PlayMemory from "./components/PlayMemory";
import Warning from "./components/Warning";
import { getResponseIA } from "./handlers/AIGemini";
import { OrbitProgress } from "react-loading-indicators";
import DetailCard from "./components/DetailCard";

function App() {
  const {words, showcard,showMoreDetails, warning, playMemory, showFormCard, setWarning, addClickWord, setShowFormCard , showDetailCard , setPlayMemory} = useStore();

  const [mounted, setMounted] = useState(false)

  const [searchWord, setSearchWord] = useState("");
  const [searchIA, setSearchIA] = useState("");

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const [showButton, setShowButton] = useState(false);

  
  useEffect(() => {
    if(showcard) {
      setMounted(true);
    }
  }, [showcard]);
  

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  useEffect(() => {
    if (warning.boolean) {
      setTimeout(() => {
        setWarning("",false);
      }, 2000);
    }
  }, [warning]);


  const warningOptions = () => {
    {warning.type === "addWrong" && warning.boolean && (
      <Warning>La palabra ya existe</Warning>
    )}
    {warning.type == "play" && warning.boolean && (
      <Warning>No hay palabras guardadas</Warning>
    )}
    {warning.type == "addSuccess" && warning.boolean && (
      <Warning>Palabra añadida correctamente</Warning>
    )}
    {warning.type == "delete" && warning.boolean && (
      <Warning>Palabra eliminada correctamente</Warning>
    )}
    {warning.type == "successPlay" && warning.boolean && (
      <Warning>Has completado el juego de memoria</Warning>
    )}
    {warning.type == "search" && warning.boolean && (
      <Warning>Introduce una palabra valida</Warning>
    )}
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  const filtered = words.filter((item) =>
    item.word.toLowerCase().includes(searchWord.toLowerCase())
  );

  const handleSubmitIA = async (e) => {
    e.preventDefault();
    if (searchIA === "") {
      setWarning("search",true);
      return;
    }
    setLoading(true);
    try {
      const res = await getResponseIA(searchIA);
      const resFormat = res.slice(7, -5);
      const jsonResponse = JSON.parse(resFormat);

      setLoading(false);
      setResponse(jsonResponse);
      console.log(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const clickAddWord = (response) => {
    const word = response.word;
    const translate = response.translate;
    const newWord = { word, translate };

    const existingWord = words.find((item) => item.word === word);
    if (existingWord) {
      setWarning("addWrong",true);
      return;
    }
    addClickWord(newWord)
    setWarning("addSuccess", true);
  };

  const canPlayMemory = () => {
    if (words.length > 0) {
      setPlayMemory();
    } else {
      setWarning("play",true);
    }
  };

  return (
    <>
      {playMemory && (
        <PlayMemory />
      )}
      {showMoreDetails !== "" && (
        <DetailCard />
      )}

     {warningOptions()}

      {showFormCard && (
        <FormCard/>
      )}

      <div className="flex justify-center px-4 py-4 md:px-8 md:p-0 flex-col md:flex-row items-center w-full h-full gap-4">
        <div className="md:flex-[1] w-full h-96 md:h-[90vh] bg-slate-100 rounded-xl flex p-6 flex-col justify-center items-center">
          <h1 className="text-2xl text-center text-blue-800 mb-2">
            {" "}
            Palabras guardadas
          </h1>
          <form onChange={handleChange} className="w-full mb-5">
            <input
              className="p-2 w-full bg-white rounded-lg border border-blue-700"
              id="name"
              name="name"
              placeholder="Buscar palabra"
              value={searchWord}
            />
          </form>

          {
            <div className="flex flex-col w-full h-full gap-2 overflow-auto">
              {filtered.map((item, index) => (
                <button
                  className="bg-white hover:bg-gray-100 transition-all shadow-lg rounded-xl p-4 text-lg text-center text-blue-600"
                  key={index}
                  onClick={() => showDetailCard(item.word, item.translate)}
                >
                  {item.word}
                </button>
              ))}
            </div>
          }
        </div>

        <div className="flex-[3] w-full flex flex-col h-full md:h-[90vh] gap-2">
          <div className="flex flex-col  md:flex-row w-full h-2/5 justify-center items-center gap-2">
            <div className="w-full md:w-1/2 h-full">
              {showcard && (
                <div
                  className={`transition-transform  transform duration-300 ease-out ${
                    mounted ? "scale-100" : "scale-0"
                  } w-full h-full flex flex-col justify-between p-4 gap-4  bg-slate-100 rounded-xl shadow-md`}
                >
                  <Card />
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 h-full flex flex-col gap-2">
              <button
                onClick={() => canPlayMemory()}
                className="bg-green-500 w-full h-1/2 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl flex justify-center items-center gap-2"
              >
                <PlayIcon height={40} width={40} />
                Recordar
              </button>
              <button
                className="bg-blue-600 w-full h-1/2 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl  flex justify-center items-center gap-2"
                onClick={() => setShowFormCard()}
              >
                <PlusCircleIcon
                  height={40}
                  width={40}
                  className="hover:animate-spin"
                />{" "}
                Añadir palabras
              </button>
            </div>
          </div>

          <div className={`flex flex-col w-full h-3/5 ${response ? "bg-white" :"bg-transparent"} ${response ? "rounded-xl" :"rounded-none"}`}>
            <div className="relative w-full md:flex-[1] h-16">
              {/* Botón */}
              <button
                onClick={() => setShowButton(true)}
                className={`absolute z-30 w-full md:w-1/2 right-0 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-xl transition-all duration-500 ease-in-out ${
                  showButton ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                Buscar palabras por IA
              </button>

              {/* Formulario */}
              <form
                className={`absolute z-20 w-full right-0 flex gap-2 items-center bg-white p-2 rounded-xl transition-all duration-500 ease-in-out ${
                  showButton
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                onSubmit={handleSubmitIA}
              >
                <label className="text-blue-700 font-bold">Buscar:</label>
                <input
                  className="p-2 w-full text-lg bg-white rounded-lg border border-blue-900"
                  placeholder="Buscar traducción de palabra ingles o español"
                  type="text"
                  name="search"
                  id="search"
                  value={searchIA}
                  onChange={(e) => setSearchIA(e.target.value)}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
              </div>
            

            <div
              className={`flex-[4.8] relative flex flex-col ${
                response ? "bg-white" : "bg-transparent"
              }  rounded-xl overflow-auto`}
            >
              {loading && (
                <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center">
                  <OrbitProgress
                    variant="track-disc"
                    color="#000"
                    size="large"
                    text="Loading.."
                    textColor=""
                  />
                </div>
              )}

              {response && (
                <>
                  <button
                    className="absolute top-2 right-2 z-[25] py-2 px-4 text-white bg-blue-900 hover:bg-blue-800 rounded-lg"
                    onClick={() => clickAddWord(response)}
                  >
                    Añadir palabra
                  </button>
                  <div className="flex flex-col gap-2 py-2 px-4 w-full h-full overflow-auto ">
                    <div className="bg-orange-500 w-32 p-0.5 text-white rounded-full ">
                      <p className="text-lg text-center">Traducción:</p>
                    </div>
                    
                    <p className=" text-lg font-bold ml-2 text-blue-900">
                      {response.translate}
                    </p>
                    
                    

                    <h2 className="font-bold ml-1 text-lg">Ejemplos:</h2>
                    <div className="mx-6">
                      <>
                        {response.examples.map((item, index) => (
                          <div className="text-lg text-blue-900" key={index}>
                            <p className="font-bold">{item.sentence}</p>
                            <p className="text-gray-500">{item.translation}</p>
                          </div>
                        ))}
                      </>
                    </div>

                    <p className="text-lg text-gray-500">{response.usage}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
