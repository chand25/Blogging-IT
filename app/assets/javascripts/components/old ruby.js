  <h2>Comments</h2>
<%= render @article.comments %>


<h1>Show Me </h1>
      <div>
        <aside>{this.props.article.created_at}</aside>
        <p>
          <strong>Title:</strong>
            {this.props.article.title}
        </p>
      </div>
      <div>
          <p>
            <strong>Text:</strong>
              {this.props.article.text}
          </p>
      </div>
    </div>

    constructor(props){
  super(props);

 }
