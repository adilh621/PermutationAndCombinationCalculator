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

    if(data.inputN >= data.inputR){
    setInputN(data.inputN)
    setInputR(data.inputR)
    }
    else{
      notify("Please enter a value greater than or equal to the first input")
    }
    
  }; 
 

  return (

    <div className="flex flex-col text-center pt-5">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <div className="rounded-md rounded-b-none px-3 py-2 ">
        <label htmlFor="name" className="block text-xs font-medium text-gray-700">
            Total Amount in a Set (n)
        </label>
        <input className="h-8" defaultValue={inputN} {...register("inputN" , {required: true})} />
      </div>

      {/* include validation with required or other standard HTML validation rules */}

      <div className="rounded-md rounded-b-none px-3 py-2 ">
        <label htmlFor="name" className="block text-xs font-medium text-gray-700">
            Total Amount in a Set (r)
        </label>
        <input className="h-8" defaultValue={inputR} {...register("inputR", { required: true })} />
      </div>
      {/* errors will return when field validation fails  */}
      {errors.inputR && notify("This field is required")}

      <input type="submit" />
    </form>

    <Results className="flex-initial w-64" inputN={inputN} inputR={inputR}/>
    
    </div>
  );


//     return (
//       <div className="flex flex-row sm:flex-col rounded-md shadow-sm text-center absolute p-12 m-12">
//         <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
//           <label htmlFor="name" className="block text-xs font-medium text-gray-700">
//           Total Amount in a Set (n)
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             placeholder=""
//             value={inputN}
//             onChange={(e) => setInputN(e.target.value)}
            
//           />
//         </div>
//         <div className=" relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
//           <label htmlFor="job-title" className="block w-full text-xs font-medium text-gray-700">
//           Amount in each Sub-Set (r)
//           </label>
//           <input
//             type="text"
//             name="job-title"
//             id="job-title"
//             className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             placeholder=""
//             value={inputR}
//             onChange={(e) => setInputR(e.target.value)}
//           />
//         </div>

//         <Results className="flex-initial w-64" inputN={inputN}  inputR={inputR}/>

//       </div>
//     )
  }
  