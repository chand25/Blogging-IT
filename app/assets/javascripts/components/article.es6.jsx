class Article extends React.Component {

  render () {
    return (
      <div>
          <header className="intro-header bkgheader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="post-heading">
                            <h1>{this.props.article.title}</h1>
                            <span className="meta">Posted by Quin on {this.props.article.created_at}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <article>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <p>{this.props.article.text}</p>
                </div>
            </div>
        </div>
    </article>
     </div>

    /*
        <h2>Comments</h2>
         {this.props.article.comments.map(function(comment){
          return(
             <div>
               <strong>Commenter:</strong>
               <p key={comment.id}> {comment.commenter}
               {comment.body}</p>
             </div>
             )
         })}
*/
    )
  }
}
