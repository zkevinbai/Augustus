# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 

    # reset all tables
    User.destroy_all
    Notebook.destroy_all
    Note.destroy_all

    #create all info
    demo_user = User.create(
        username: "Octavian",
        email: "otto@julia.com",
        password: "password",
    )

    demo_personal = Notebook.create(
        user_id: demo_user.id, 
        notebook_title: "Personal"
    )

    demo_history = Notebook.create(
        user_id: demo_user.id, 
        notebook_title: "History"
    )

    demo_programming = Notebook.create(
        user_id: demo_user.id, 
        notebook_title: "Programming"
    )

    demo_history = Notebook.create(
        user_id: demo_user.id, 
        notebook_title: "Books"
    )

    demo_history = Notebook.create(
        user_id: demo_user.id, 
        notebook_title: "Travel"
    )

    demo_note = Note.create(
        note_title: "How to",
        note_body:
        "<h1>New Note</h1><ol><li>click add new note button</li><li>click any notebook</li><li>write as you'd like then click the disc to save it to the database</li></ol><h1>Edit Note</h1><ol><li>click a note from the side bar</li><li>edit as you'd like and then click the disc to save it to the database</li></ol><h1>Delete Note</h1><ol><li>delete notes by clicking the skull and crossbones to the upper right hand corner of the note</li></ol><h1>Notebook</h1><ol><li>click notebook chevron for notebook dropdown</li><li>click notebooks button to access notebook interface</li><li>add, edit, or delete a notebook at the edit notebook interface</li></ol><h1>Augustus Editor</h1><ol><li>Supports photos and links to videos</li><li>Supports rich text editing</li></ol><p><br></p>",
        notebook_id: demo_personal.id
    )
end