import React from 'react';


const Proje = (props) => {
    return(
        
            <div>
					<div className="post">
						<img className="thumbnail" src={props.image} alt='Proje1'/>
						<div className="post-preview">
                            <h6 className="post-title">{props.name}</h6>
							<p className="post-intro">{props.description}</p>
							{/* <a href="post.html">Read More</a> */}
						</div>
					</div>
				</div>
         
    )
}


export default Proje;