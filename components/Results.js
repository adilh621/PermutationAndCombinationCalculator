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
  
function handleCombination(n, r) {
    let combinations = factorial(n) / (factorial(r) * factorial(n - r));
    return combinations
}

function handlePermutation(n, r) {

    let permutations = factorial(n) / factorial(n - r);
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


      <div className="bg-white overflow-hidden rounded-lg  px-5 my-10 sm:grid xl:grid-cols-3 3xl:flex flex-wrap justify-center pt-10">
        <div className="pt-12 sm:pb-5">
        Results for n={inputN} and r={inputR}:
        </div>
        <MathJax.Provider options={options}>
            <div className="px-4 py-5 sm:p-6"><MathJax.Node formula={`nPr = \\frac {${inputN}!}{(${inputN} - ${inputR})!}=${handlePermutation(inputN,inputR)}`}/></div>
            <div className="px-4 py-5 sm:p-6"><MathJax.Node formula = {`nCr = \\frac {${inputN}!}{(${inputR}!)(${inputN} - ${inputR})!}=${handleCombination(inputN,inputR)}`}/> </div>
        </MathJax.Provider>
      </div>
  
    )
    }
    