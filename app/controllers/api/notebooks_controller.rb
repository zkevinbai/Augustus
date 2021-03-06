class Api::NotebooksController < ApplicationController

    def index
        @notebooks = Notebook.where(["user_id = :user_id", {user_id: current_user.id}])
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
        render :show
    end

    def create 
        @notebook = Notebook.new(notebook_params)

        if @notebook.save
            render :show
        else
            render json: @notebook.errors.full_messages, status: 404
        end
    end

    def update
        @notebook = Notebook.find(params[:id])

        if @notebook.update(notebook_params)
            render :show
        else
            render json: @notebook.errors.full_messages, status: 404
        end
    end

    def destroy
        @notebook = Notebook.find(params[:id])
        if @notebook.destroy
            render json: {}, status: 200
        end
    end

    private 

    def notebook_params
        params.require(:notebook).permit(:notebook_title, :user_id)
    end
end
