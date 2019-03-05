class Api::NotesController < ApplicationController

    def index
        currrent_notebooks = current_user.notebooks
        @notes = []
        currrent_notebooks.each do |notebook|
            @notes += notebook.notes
        end
        render :index
    end

    def show
        @note = Note.find(params[:id])

        render :show
    end

    def create
        @note = Note.new(note_params)

        if @note.save 
            render :show
        else
            # render json: @note.errors.full_messages, status: 404
            render json: "This diddn't work"
        end
    end

    def update 
        @note = Note.find(params[:id])

        if @note.update(note_params) 
            render :show
        else
            render json: @note.errors.full_messages, status: 404
        end
    end

    def destroy
        @note = Note.find(params[:id])

        if @note.destroy
            render json: {}, status: 200
        end
    end

    private 

    def note_params 
        params.require(:note).permit(:note_title, :note_body, :notebook_id)
    end
end
