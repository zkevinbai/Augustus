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

    instructions_note = Note.create(
        note_title: "How to",
        note_body:
        "<h1>New Note</h1><ol><li>click add new note button</li><li>click any notebook</li><li>write as you'd like then click the disc to save it to the database</li></ol><h1>Edit Note</h1><ol><li>click a note from the side bar</li><li>edit as you'd like and then click the disc to save it to the database</li></ol><h1>Delete Note</h1><ol><li>delete notes by clicking the skull and crossbones to the upper right hand corner of the note</li></ol><h1>Notebook</h1><ol><li>click notebook chevron for notebook dropdown</li><li>click notebooks button to access notebook interface</li><li>add, edit, or delete a notebook at the edit notebook interface</li></ol><h1>Augustus Editor</h1><ol><li>Supports photos and links to videos</li><li>Supports rich text editing</li></ol><p><br></p>",
        notebook_id: demo_personal.id
    )

    languages_note = Note.create(
        note_title: "Write in Any Language",
        note_body: 
        "<h1><span style=\"background-color: rgb(250, 204, 204);\">Chinese: 中文</span></h1><p><br></p><h1><span style=\"background-color: rgb(255, 255, 204);\">Spanish：Español</span></h1><p><br></p><h1><span style=\"background-color: rgb(204, 232, 204);\">Arabic: العربية</span></h1><p><br></p><p>Rich text editing is supported for any language of your choice. </p>",
        notebook_id: demo_personal.id
    )

    photos_note = Note.create(
        note_title: "Upload Photos",
        note_body:
        "<h1>Upload any photo you'd like </h1><h1><span style=\"background-color: rgb(255, 255, 204); color: rgb(0, 102, 204);\" class=\"ql-font-monospace\">Go Bears!</span></h1><p><br></p><p><img src=\"https://pbs.twimg.com/media/Drut_DbVYAMzUqS.jpg\"></p>", 
        notebook_id: demo_personal.id
    )

    links_note = note.create(
        note_title: "Links & Videos",
        note_body:
        "<p><strong>Links:</strong></p><p>\t\t\t<a href=\"https://github.com/zkevinbai\" target=\"_blank\">My Github</a></p><p>\t\t\t<a href=\"https://linkedin.com/in/kevinbai/\" target=\"_blank\">My Linkedin</a></p><p><br></p><p><strong>Videos</strong>:</p><p>\t\t\t<a href=\"https://www.youtube.com/watch?v=NrI-UBIB8Jk\" target=\"_blank\">Hooked on a Feeling</a></p><p>\t\t\t<a href=\"https://www.youtube.com/watch?v=c-4flnuxNV4&amp;list=PLCu6M33km99I8U1kattk29VIW9tlT4Qqx&amp;index=2&amp;t=1s\" target=\"_blank\">Why we make bad decisions</a></p>"
        notebook_id: demo_personal.id
    )
end