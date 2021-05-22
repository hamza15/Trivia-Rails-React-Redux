class CategoriesController < ApplicationController

    def index 
        categories = Category.all
        render json: CategorySerializer.new(categories)
    end 

    def show
        category = Category.find_by(name: params[:id]).questions
        content = {
                content: category,
            }
        render json: { :data => content}
    end

end