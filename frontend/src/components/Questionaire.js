import React from 'react'

const Questionaire = ({
    handleAnswer,
    showAnswers,
    handleNextQuestion,
    data: { question, answer, 
    choice1, choice2, choice3, choice4},
}) => {
    const shuffledAnswers = [choice1, choice2, choice3, choice4]

    return (
        <div className='flex flex-col'>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
              <h2 className="text-2xl" 
              dangerouslySetInnerHTML={{ __html: question}}/>

            </div>
          
          <div className='grid grid-cols-2 gap-6 mt-6'>
            {shuffledAnswers.map((selected_answer) => {
                const bgColor = showAnswers ? 
                answer === selected_answer 
                    ? 'bg-green-500' 
                    : 'bg-red-500'
                : 'bg-white';

                const textColor = showAnswers ?
                'text-white' : 'text-purple-800';
                return (
                <button
                    className={` ${bgColor} ${textColor}
                    p-4 font-semibold rounded shadown`}
                    onClick={() => 
                        handleAnswer(selected_answer)}
                    dangerouslySetInnerHTML={{ __html: selected_answer}}/>  
            )})}
            </div>
            {showAnswers && (
                <button
                className={'ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadown mt-6'}
                onClick={handleNextQuestion}
                >
                   Next Question 
                </button> 
            )}
            
        </div>
    )
}

export default Questionaire;

