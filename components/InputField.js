import { useState } from "react"
import Results from "./Results"
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";

export default function InputField() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();


  const [inputN, setInputN] = useState(6)
  const [inputR, setInputR] = useState(2)

  const inputErrors = 0;

  const notify = (text) => {toast.error(text, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    toastId:inputErrors++
})}


  const onSubmit = (data) => {

    if(parseInt(data.inputN) >= parseInt(data.inputR)){

      if(parseInt(data.inputN) && parseInt(data.inputR)){

        if(parseInt(data.inputN) < 171 && parseInt(data.inputR) < 171){

          setInputN(data.inputN)
          setInputR(data.inputR)

        }
        else{
          notify("Please enter lower values")
        }

    }

    }
    else{
      notify("Please enter a value greater than or equal to the first input")
      return
    }
    
  }; 
 
  return (

    <>
    <div className="flex flex-col flex-grow text-center mx-auto justify-center bg-[#c9ada7] border-2 border-black pb-5 pt-5 mt-7 sm:max-w-sm md:max-w-xl lg:max-w-7xl rounded-lg">
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="rounded-md rounded-b-none pt-3 pb-2 ">
        <label htmlFor="name" className="block text-xs font-medium text-gray-700 pb-4">
            Total Amount in a Set (n):
        </label>
        <input className="h-8 bg-[#c9ada7]" defaultValue={inputN} {...register("inputN" , {required: true})} />
      </div>

      <div className="rounded-md rounded-b-none pt-3 pb-2 ">
        <label htmlFor="name" className="block text-xs font-medium text-gray-700 pb-4">
            Total Amount in a Set (r):
        </label>
        <input className="h-8 bg-[#c9ada7]" defaultValue={inputR} {...register("inputR", { required: true })} />
      </div>

      {/* errors will return when field validation fails  */}
      {/* {errors.inputR && notify("Input R is required")} */}

      <input className="active:scale-95 transform duration-100 ease-out"type="submit" />
    </form>

    
    
    </div>

    <Results className="flex max-w-7xl" inputN={inputN} inputR={inputR}/>
    </>
  );
  }
  