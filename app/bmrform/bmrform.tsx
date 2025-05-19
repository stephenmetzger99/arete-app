import React, {useState, useEffect}  from 'react'
import ButtonGroup from '~/buttongroup/buttongroup';

const formulaChoiceProps = ["Harris-Benedict", "Mifflin-St Jeor"];
const sexChoiceProps = ["Male","Female"]

const BmrForm = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');

    const [bmr, setBmr] = useState<number | null>(null);
    const [formulaChoice, setFormulaChoice] = useState(formulaChoiceProps[0]);
    const [sexChoice, setSexChoice] = useState(sexChoiceProps[0]);

    useEffect(() => {
        const w = parseFloat(weight);
        const h = parseInt(height, 10);
        const a = parseInt(age, 10);

        if (w > 0 && h > 0)
        
        switch(formulaChoice){

            case "Harris-Benedict": 
                var bmr: number = 0;
                if(sexChoice === "Male"){
                    bmr = 66.47 + (6.24 * w) + (12.7 * h) - (6.755 * a) 
                }
                else if (sexChoice === "Female"){
                    bmr = 655.1 + (4.35 * w) + (4.7 * h) - (4.7 * a) 
                }

                setBmr(Math.round(bmr * 10) / 10);          
            break;
            case "Mifflin-St Jeor":         
                var modifier: number = 0;

                if(sexChoice === "Male"){
                    modifier = 5;
                }
                else if (sexChoice === "Female"){
                    modifier = -161;
                }

                var bmr: number = (4.536 * w) + (15.88 * h) - (5*a)+modifier
                setBmr(Math.round(bmr * 10) / 10);
            break;
         
            default:
                setBmr(null);
          }

          else setBmr(null)
    }, [formulaChoice, weight, height, age, sexChoice])
   

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-md">
        <h1 className="text-3xl mb-3">Basal Metabolic Rate</h1>
        <ButtonGroup choices={formulaChoiceProps} selected={formulaChoice} onChange={setFormulaChoice}></ButtonGroup>
          <div className="my-2">

            <label className="block">Weight (lbs):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="arete-input"
            />
          </div>
          <div className="mb-2">
            <label className="block">Height (in):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="arete-input"
            />
          </div>
          <div className="mb-2">
            <label className="block">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="arete-input"
            />
          </div>
          <ButtonGroup choices={sexChoiceProps} selected={sexChoice} onChange={setSexChoice}></ButtonGroup>

          
          {bmr !== null && (
            <div className="mt-4">
              <strong>Estimated {formulaChoice} BMR:</strong> {bmr}
            </div>
          )}
        </div>
      );
    };
    
    export default BmrForm;