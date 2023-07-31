// Write your code here

import './index.css'

const CommentItem = props => {
  const {comment, time, clickedLiked, commentdeletingButton} = props
  const {searchInputName, addingComment, id, isLike, classNameColor} = comment
  const indexletter = searchInputName[0]

  const isLikedComment = () => {
    clickedLiked(id)
  }

  const deletComment = () => {
    commentdeletingButton(id)
  }

  const likedImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const noLikeImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const findingTrueValue = isLike === true ? likedImage : noLikeImage

  const likePara = isLike === true ? 'liked' : 'noLiked'

  return searchInputName !== '' ? (
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
          <button type="button" className="buttonClick">
            <img
              className="imageLiked"
              alt="liked"
              onClick={isLikedComment}
              src={findingTrueValue}
            />
          </button>
          <p className={likePara}>Like</p>
        </div>
        <button type="button" className="buttonClick">
          <img
            onClick={deletComment}
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
