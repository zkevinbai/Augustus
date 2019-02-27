class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            render json: {}, status: 200
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end