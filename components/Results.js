import {useEffect} from 'react';
import MathJax from "react-mathjax";


function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
  function factorialDynamically(num){

    var results =[ ];
    
    if(num>=0){
      results[0] = 1;
      for(var i = 1; i <= num ; i++ ){
        results[i] = i * results[i-1]
      }
      return results[num]
    }
  }
  
function handleCombination(n, r) {
    let combinations = factorialDynamically(n) / (factorialDynamically(r) * factorialDynamically(n - r));
    return combinations
}

function handlePermutation(n, r) {

    let permutations = factorialDynamically(n) / factorialDynamically(n - r);
    return permutations
}


const options = {
    tex2jax: {
      inlineMath: []
    }
  };

export default function Results({inputN, inputR}) {

    useEffect(() => {

        if(inputN && inputR) {

        handlePermutation(inputN, inputR);
        const Comb = handleCombination(inputN, inputR);
        }
        
      },[inputN, inputR]);

    return (


      <div className=" bg-[#c9ada7] overflow-hidden rounded-lg border-2 mx-auto border-black justify-center px-5 my-10 sm:max-w-sm md:max-w-xl lg:max-w-7xl sm:grid xl:grid-cols-3 3xl:flex flex-wrap justify-center pt-10">
        <p className="pt-12 sm:pb-5">
        Results for n={inputN} and r={inputR}:
        </p>
        <MathJax.Provider options={options}>
            <div className="px-4 py-5 sm:p-6"><MathJax.Node formula={`nPr = \\frac {${inputN}!}{(${inputN} - ${inputR})!}=${handlePermutation(inputN,inputR)}`}/></div>
            <div className="px-4 py-5 sm:p-6"><MathJax.Node formula = {`nCr = \\frac {${inputN}!}{(${inputR}!)(${inputN} - ${inputR})!}=${handleCombination(inputN,inputR)}`}/> </div>
        </MathJax.Provider>
      </div>
  
    )
    }
    