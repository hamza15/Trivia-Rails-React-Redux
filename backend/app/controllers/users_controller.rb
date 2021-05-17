class UsersController < ApplicationController
    def index
        users = User.all 
        render json: UserSerializer.new(users)
    end 

    def create
        if User.find_by(username: params[:user][:username])
            user = User.find_by(username: params[:user][:username])
            status = {status: "existing"}
            content = {
                user_info: user,
                login_status: status
            }
            render json: { :data => content}
        else 
            user = User.new(user_params)
            status = {status: "new"}
            content = {
                user_info: user,
                login_status: status
            }
            if user.save
                # render json: UserSerializer.new(user)
                render json: { :data => content}
            else
                render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
            end
        end 
    end 

    def show 
        user = User.find_by(id: params[:id])

        if user 
            render json: user
        else 
            render json: { message: 'User not found.' }
        end 
    end 

    private 

        def user_params
            params.require(:user).permit(:username, :animals_score, :celebrities_score, :sports_score)
        end 
end
