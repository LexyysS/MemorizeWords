import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Warning = ({ children }) => {
  return (
    <div className="fixed z-50 justify-center w-full md:w-1/4 items-center gap-2 flex p-2 bg-slate-200  rounded-lg top-0 left-1/2 -translate-x-1/2">
      {children === "No hay palabras guardadas" ||
      children === "La palabra ya existe" ||
      children === "Introduce una palabra valida" ? (
        <>
          <XCircleIcon className="w-10 h-10 mr-2 text-red-600 hover:text-red-700" />
          <p className="text-sm text-center">{children}</p>
        </>
      ) : (
        <>
          <CheckCircleIcon className="w-10 h-10 mr-2 text-green-600 hover:text-green-700" />
          <p className="text-sm text-center">{children}</p>
        </>
      )}
    </div>
  );
};

export default Warning;
