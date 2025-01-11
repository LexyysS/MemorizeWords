import { XCircleIcon } from "@heroicons/react/24/solid";
import { getResponseIA } from "../handlers/AIGemini";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useStore } from "../store";


const DetailCard = () => {
  const {selectedWord , closeMoreDetails} = useStore()

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    console.log(selectedWord)
    const response = async () => {
      setLoading(true);

      try {
        const res = await getResponseIA(selectedWord.word);
        const resFormat = res.slice(7, -5);
        const jsonResponse = JSON.parse(resFormat);
        setLoading(false);
        setResponse(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, []);

  return (
    <>
      {loading && (
        
          <div className="p-5 absolute flex justify-center items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen ">
            <OrbitProgress variant="track-disc" color="#000" size="large" text="Loading.." textColor="" />
          </div>
        
      )}
      {response && (
        <>
          <div className=" fixed w-screen z-30 h-screen top-0 left-0 bg-[rgba(0,0,0,0.7)]"></div>
          <div className="bg-white p-5 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] rounded-lg">
            <button
              className="absolute top-2 right-2"
              onClick={() => closeMoreDetails()}
            >
              <XCircleIcon className="w-10 h-10 text-red-600 hover:text-red-700" />
            </button>
            <div className="flex flex-col gap-2 py-2 px-4 w-full h-full overflow-auto ">
              <h1 className="font-bold text-xl">Traduccion</h1>
              <p className=" text-lg font-bold text-blue-900">
                {response.translate}
              </p>

              <h2 className="font-bold text-lg">Ejemplos:</h2>
              <div className="px-4">
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
          </div>
        </>
      )}
    </>
  );
};

export default DetailCard;
