import React from 'react'

const Questionaire = ({
    handleAnswer,
    data: { question, answer, 
    choice1, choice2, choice3, choice4},
}) => {

    // const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    //     () => Math.random() - 0.5
    // )
    const shuffledAnswers = [choice1, choice2, choice3, choice4]

    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
              <h2 className="text-2xl" 
              dangerouslySetInnerHTML={{ __html: question}}/>

            </div>
          
          <div className='grid grid-cols-2 gap-6 mt-6'>
            {shuffledAnswers.map((selected_answer) => (
                <button
                    className={`${
                        answer === selected_answer
                        ? 'bg-purple-300' :
                        'bg-white'
                    } p-4 text-purple-800
                    font-semibold rounded shadown`}
                    onClick={() => 
                        handleAnswer(selected_answer)}>
                    {selected_answer}  
                </button>
                
            ))}
                
          </div>
        </div>
    )
}

export default Questionaire;

