import React from "react";
import ReadOnlyRow from "./ReadOnlyRow";

const EditableRow = () => {
    return (
            <tr>
                <td>
                   <input
                   type="text"
                   required="required"
                   placeholder="What is the title of the song? "
                   name="song title"
                   ></input> 
                </td>
                <td>
                <input
                   type="text"
                   required="required"
                   placeholder="What album is this song in: "
                   name="album"
                   ></input> 
                </td>
                <td>
                <input
                   type="text"
                   required="required"
                   placeholder="What is the name of the artist of the song? "
                   name="artist"
                   ></input>
                </td>
                <td>
                <input
                   type="text"
                   required="required"
                   placeholder="What is the genre of the song? "
                   name="genre"
                   ></input>
                </td>
                <td>
                <input
                   type="text"
                   required="required"
                   placeholder="When was this song released? "
                   name="release date"
                   ></input> 
                </td>
            </tr>


    )
}

export default ReadOnlyRow;