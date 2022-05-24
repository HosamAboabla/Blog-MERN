

const Comment = ({ comment }) => {

    let d = new Date(comment.updatedAt);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


    return (
        <div className="comment">
            <div className="comment-header d-flex justify-content-between">
                <div className="user d-flex align-items-center">
                <div className="image">
                    <img src={comment.user.profile} alt="..." className="img-fluid rounded-circle" /></div>
                <div className="title"><strong>{`${comment.user.firstName} ${comment.user.lastName}`}</strong>
                <span className="date">{d.getDay()} {months[d.getMonth()]} | {d.getFullYear()}</span></div>
                </div>
            </div>
            <div className="comment-body">
                <p>{ comment.text }</p>
            </div>
        </div>
      
    )
  }
  
  export default Comment