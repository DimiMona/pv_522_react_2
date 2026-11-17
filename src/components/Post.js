import React from 'react';

class Post extends React.Component {
	render()
	{

		return (
			<fildset>
				<legend style={{ fontWeight: "bold" }}> { this.props.title} </legend>
				<p>{this.props.content}</p>
				<button onClick={()=>this.props.removePost(this.props.id) }>Delete</button>

			</fildset>
		)
	}
}
export default Post;
