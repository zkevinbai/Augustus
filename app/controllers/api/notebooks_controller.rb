class Api::NotebooksController < ApplicationController

    def index
        @notebooks = Notebook.all
    end

    def show
        @notebook = Notebook.find(params[:id])
    end

    def create 
        @notebook = Notebook.new(notebook_params)
    end

    def update
        @notebook = Notebook.find(params[:id])
    end

    def destroy
        @notebook = Notebook.find(params[:id])
    end

    private 

    def notebook_params
        params.require(:notebook).permit(:notebook_title, :user_id)
    end
end
