import {useState} from "react";


export function MyCalculator() {
    console.log("MyCalculator called")
    const [result, setResult] = useState()
    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()

    function onChangeNumber1(event) {
        setNumber1(parseInt(event.target.value));
    }

    function onChangeNumber2(event) {
        setNumber2(parseInt(event.target.value));
    }

    function addNumbers(event) {
        setResult(number1 + number2)
    }

    return (<div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card  bg-light w-100" style={{maxWidth: 340}}>
                <div className="card-body ">
                    <h1 className="text-center  ">Calculator</h1>
                    <div className="form-group mt-4">
                        <label htmlFor="number1" className="form-label">Enter Number 1</label>
                        <input type="number" className="form-control" id="number1" onChange={onChangeNumber1}/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="number2" className="form-label">Enter Number 2</label>
                        <input type="number" className="form-control" id="number2" onChange={onChangeNumber2}/>
                    </div>
                    <h3 className="mt-3">Result is:{result} </h3>
                    <button className="btn btn-primary w-100 mt-3" onClick={addNumbers}>Calculate</button>
                </div>

            </div>

        </div>
    )
}