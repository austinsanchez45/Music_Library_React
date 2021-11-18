import React from "react";

const ReadOnlyRow = ({musicTable}) => {
    return (
        <tr>
            <td>{musicTable.title}</td>
            <td>{musicTable.album}</td>
            <td>{musicTable.artist}</td>
            <td>{musicTable.genre}</td>
            <td>{musicTable.release_date}</td>
         </tr>
    )
}

export default ReadOnlyRow