
'use client'
import React, { useState } from "react";

function ReactFormPractics() {
  const [textValue, setTextValue] = useState<string>("");
  const [status, setStatus] = useState<string>("typing");
  const [error, setError] = useState<boolean>(false);  

  if(status=='fulfill'){
    return(<><p>thanks for contacting us</p></>)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(textValue);  
      setStatus('fulfill');  
    } catch (error) {
      setError(true);  
      setStatus('typing');
    }
  };

  return (
    <div>
      <p>textvalue {textValue} </p>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        disabled={status === 'submitting'}
      />
      <button
        disabled={textValue.trim() === '' || status === 'submitting'}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {error && (<p>This is not correct</p>)} 
    </div>
  );
}

export default ReactFormPractics;

const submitForm = (answer: string) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      let isCorrect = answer.toLowerCase() === 'lima';  
      if (!isCorrect) {
        reject('Error shows');
      } else {
        resolve();
      }
    }, 3000);
  });
};
