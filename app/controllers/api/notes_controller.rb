class Api::NotesController < ApplicationController

    def index
        currrent_notebooks = current_user.notebooks
        @notes = []
        currrent_notebooks.each do |notebook|
            @notes += notebook.notes
        end
        render :index
    end

end
