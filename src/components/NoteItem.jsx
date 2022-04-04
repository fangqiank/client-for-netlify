import React from 'react'
import {Link} from 'react-router-dom'
import {FaTrash, FaPen} from 'react-icons/fa'

const optionsWithClonOnOverlayclick = {
  closeOnOverlayClick: true
}

export const NoteItem = ({note, handleDelete, handleEdit}) => {

	return (
		<>
			<Link to={`notes/${note.id}`}>
				<h3>{note.title}</h3>
			</Link>	

			<p>
				<span>{new Date(note.updatedAt).toLocaleDateString('en-US')}</span>
				{/* {note.body} */}
				<span style={{'marginLeft': '20px'}}>
					<FaTrash 
						style={{'color': '#C70039', cursor: 'pointer'}}
						onClick={() => handleDelete(optionsWithClonOnOverlayclick, note)}
					/>
				</span>
				<span style={{'marginLeft': '5px', cursor: 'pointer'}}>
					<FaPen 
						style={{'color': '#0082C7'}}
						onClick={() => handleEdit(note)}
					/>
				</span>
			</p>
		</>
	)
}
