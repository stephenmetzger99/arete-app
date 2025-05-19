import React, {useState, useEffect}  from 'react'
import ButtonGroup from '~/buttongroup/buttongroup';

const choiceProps = ["Brzycki", "Epley", "Lander"];


const OneRepMaxForm = () => {

    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [oneRepMax, setOneRepMax] = useState<number | null>(null);
    const [choice, setChoice] = useState(choiceProps[0]);

    useEffect(() => {
        const w = parseFloat(weight);
        const r = parseInt(reps, 10);

        if (w > 0 && r > 0)

        switch(choice){

            case "Brzycki": {
              const max = w / (1.0278 - 0.0278 * r);
              setOneRepMax(Math.round(max * 10) / 10);     
              break;
            }
               
            case "Epley": {
              const max = w * (1 + r / 30);
              setOneRepMax(Math.round(max * 10) / 10);  
              break;
            }   
            case "Lander":{
              var max = (100 * w) / (101.3 - 2.67123 * r);
              setOneRepMax(Math.round(max * 10) / 10);
              break;
            }
               
            default:
                setOneRepMax(null);
          }

          else setOneRepMax(null)
    }), [choice, weight, reps]
   

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-md">
        <h1 className="text-3xl mb-3">One-Rep Max</h1>
        <ButtonGroup choices={choiceProps} selected={choice} onChange={setChoice}></ButtonGroup>
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
            <label className="block">Reps:</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="arete-input"
            />
          </div>
          
          {oneRepMax !== null && (
            <div className="mt-4">
              <strong>Estimated {choice} 1RM:</strong> {oneRepMax}
            </div>
          )}
        </div>
      );
    };
    
    export default OneRepMaxForm;