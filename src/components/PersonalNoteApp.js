import React from "react";
import NotesBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils/index.js"

class PersonalNoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes:  getInitialData(),
        }  
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    onAddNoteHandler({ title, body}) {
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: parseInt(Date.now() * Math.random()).toString(),
                        title,
                        body,
                        createdAt: new Date().toJSON(),
                        archived: false,
                    }
                ]
            }
        })
    }
    render(){
        return(
        <>
        <NoteHeader />
        <NotesBody notes={this.state.notes} onDelete={this.onDeleteHandler} addNote={this.onAddNoteHandler} />
        </>
        )
    }
}

export default PersonalNoteApp;