Augustus <img src="https://github.com/zkevinbai/Augustus/blob/master/app/assets/images/Favicon.png" alt="Augustus Logo" align="center" height="50px" />
======

Augustus is a single page note taking web application built with elegance in mind.
The app mimics the functionalities of Evernote, the design is my own.  
I built this over the course of 10 days from February 26 to March 8 2019 to improve my web development skills.

Technologies
---
Augustus makes use of the Ruby on Rails React Redux stack with PostgreSQL.  
And the React Quill Api to handle rich text editing.  

Design
---
Augustus was designed with a simple theme.  Clear and bold, just like Augustus Caesar.
The custom fonts and logos make it clear to the user what each component is responsible for.
This allows the user to focus on their writing. 

Features
---
* Encrypted user authentication for signup, login, and logout
* Protected and Authorized routes for all parts of the app
* Full Create Update Read and Destroy (CRUD) capabilities for Notes and Notebooks 
* Rich text editing, photo upload, and video linking for notes
* Modals to indicate to the user which features are to be built in the future

Feature GIFs
---
## Login Logout
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/gifs/DemoLogin.gif" align="center"/>

## Note Editing
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/gifs/NoteEditing.gif" align="center"/>

## Adding Photos
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/gifs/AddPhotos.gif" align="center"/>

## Notebooks
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/gifs/Notebooks.gif" align="center"/>

## Sidebar
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/gifs/SideBar.gif" align="center"/>

Code Snippets
---
## Custom Routing
I made a design decision to base both my splash page and my app at the root URL '/'.  To enable that, my route util needed to be able to detect if the current URL is related to the app or not. 
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/code/RouteUtil.png" align="center"/>

## Create Or Edit
If the URL is based at the root of a notebook `notebook/:id`, then the create action of a note should send a post request to the backend and then redirect the user to the show/edit of that note at `notebook/:id/note/:noteId`.  
If the URL is note based at a notebook, the create action of a note should send a patch request to the backend.
<img src="https://github.com/zkevinbai/Augustus/blob/master/public/code/CreateOrEdit.png" align="center"/>

