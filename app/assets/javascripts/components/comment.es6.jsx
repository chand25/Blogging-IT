class Comment extends React.Component {

  render () {

    let comments = this.props.comment;

    let commentsList = comments.map(function(comment){
      return(
         <p key={comment.id} className="list-group-item list-group-item-action">
            <div className="row">
                    <div className="col-2">
                        <h4>{comment.commenter}</h4>
                     </div>
                      <div className="col-4">
                            <h4>{comment.body}</h4>
                            <h5>{comment.created_at}</h5>
                      </div>
             </div>
          </p>
        )
    })

  return (
         <div>
          <h1>Test </h1>

          </div>


      /*
        <h2>Comments</h2>
         {this.props.comment.map(function(com){
          return(
             <div>
               <strong>Commenter:</strong>
               <p key={com.id}> {com.commenter}
               {com.body}</p>
             </div>

             <%=react_component 'Comment', {comment: @article.comments} %>

             )
         })}
*/


    )
  }
}

