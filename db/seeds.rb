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
    # Note.destroy_all

    #create all info
    demo_user = User.create(
        username: "Octavian",
        email: "otto@julia.com",
        password: "password",
    )

    demo_programming = Notebook.create(
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
end