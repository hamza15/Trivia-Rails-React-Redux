class QuestionsController < ApplicationController
    
    def index
        if params[:category_id]
            category = Category.find_by(id: params[:category_id])
            
            if category.nil? 
                render json: { message: "Category does not exist." }
            else 
                questions = category.questions
                # render json: questions.to_json(:include => {
                #     :category => { :only => [:id, :name]}
                # }, except: [:created_at, :updated_at])

                render json: QuestionSerializer.new(questions)
            end 
        end 
    end 

end