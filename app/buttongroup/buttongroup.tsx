import React, {useState, useEffect} from 'react'

type MyProps = {
    choices: string[];
    selected: string;
    onChange: (activeChoice: string) => void;
}

const ButtonGroup: React.FC<MyProps> = ({ choices, selected, onChange }) => {
    const [activeButton, setActiveButton] = useState<Record<string, boolean>>(
        Object.fromEntries(choices.map(choice => [choice, false]))
  )

  useEffect(() => {
    if (choices.length > 0) {
      const first = choices[0];
      const initial = Object.fromEntries(choices.map(choice => [choice, choice === first]));
      setActiveButton(initial);
      onChange(first); 
    }
  }, [choices, onChange]);


    return (
        <div className="inline-flex shadow-md rounded-md bg-gray-700">
            {choices.map(choice => 
                            <button className={`px-4 py-2 rounded ${
                                selected === choice ? 'bg-blue-600 text-white' : ''
                              }`}
                                key={choice} 
                                
                                onClick={() => onChange(choice)}
                            >
                                {choice}
                            </button>
                        )
            }
        </div>
    )

}


export default ButtonGroup;