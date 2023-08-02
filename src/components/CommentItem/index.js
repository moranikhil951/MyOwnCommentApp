// Write your code here

const CommentItem = props => {
  const {comment} = props
  const {
    searchInputName,
    addingComment,
    time,
    id,
    isLike,
    classNameColor,
  } = comment
  const indexletter = searchInputName[0]

  const isLikedComment = () => {
    const {clickedLiked} = props
    clickedLiked(id)
  }

  const deletComment = () => {
    const {commentdeletingButton} = props
    commentdeletingButton(id)
  }

  const likedImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const noLikeImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const findingTrueValue = isLike === true ? likedImage : noLikeImage

  const likePara = isLike === true ? 'liked' : 'noLiked'

  return searchInputName !== '' && addingComment !== '' ? (
    <li className="listed-comments" alt="load Page">
      <div className="container-for-display-comment">
        <div className={`changing-background ${classNameColor}`}>
          <h1 className="comment-name">{indexletter}</h1>
        </div>
        <div>
          <h1 className="name">
            {searchInputName}
            <span className="timing">{time}</span>
          </h1>
          <label className="commentdis">{addingComment}</label>
        </div>
      </div>
      <div className="flex-like-delete">
        <div className="flex-liked-icon">
          <img className="imageLiked" alt="like" src={findingTrueValue} />

          <button
            type="button"
            className={`buttonClick ${likePara}`}
            onClick={isLikedComment}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="buttonClick"
          data-testid="delete"
          onClick={deletComment}
        >
          <img
            className="deleteIcon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  ) : (
    alert
  )
}

export default CommentItem

