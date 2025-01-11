import { XCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useStore } from "../store";

const Card = () => {
  
  const {selectedWord, deleteWord, setWarning, closeCard, setShowMoreDetails} = useStore();


  const handleDelete = () => {
    deleteWord()
    setWarning("delete",true);
  };

  return (
  
      
    <div className=" flex flex-col justify-between p-4 gap-4 w-full h-full ">
      <button className="absolute top-2 right-2" onClick={closeCard}>
        <XCircleIcon className="w-10 h-10 text-red-600 hover:text-red-700" />
      </button>
      <div className="flex flex-col justify-center items-center gap-2 flex-1">
        <h1 className="text-3xl font-bold text-center text-black ">{selectedWord.word}</h1>
        <p className="text-2xl font-bold text-center text-orange-500">
          {selectedWord.translate}
        </p>
      </div>
      <div className="flex justify-center items-center w-full gap-2 ">
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 p-3 flex justify-center items-center rounded-full">
          <TrashIcon className="w-6 h-6 text-white" />
        </button>
        <button onClick={() => setShowMoreDetails()} className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold p-3 rounded-full" >
          Saber más{" "}
        </button>
       
        
      </div>
    </div>
    
  );
};

export default Card;
