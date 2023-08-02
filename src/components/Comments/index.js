import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    searchInputName: '',
    addingComment: '',
    count: 0,
  }

  AddComment = event => {
    event.preventDefault()
    const {searchInputName, addingComment} = this.state

    const setBackground = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )

    const colorChangeBackground =
      initialContainerBackgroundClassNames[setBackground]

    const newComment = {
      id: uuidv4(),
      searchInputName,
      addingComment,
      isLike: false,
      classNameColor: colorChangeBackground,
      time: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      searchInputName: '',
      addingComment: '',
    }))

    if (searchInputName !== '' && addingComment !== '') {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  renderingfunction = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        comment={eachComment}
        clickedLiked={this.clickedLiked}
        commentdeletingButton={this.commentdeletingButton}
        colorChangeBackground={this.colorChangeBackground}
      />
    ))
  }

  typeComment = event => {
    this.setState({addingComment: event.target.value})
  }

  inputName = event => {
    this.setState({searchInputName: event.target.value})
  }

  clickedLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  commentdeletingButton = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(
      eachComment => id !== eachComment.id,
    )

    this.setState({commentsList: filteredComments})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {searchInputName, addingComment, count} = this.state

    if (count < 0) {
      this.setState({count: 0})
    }

    return (
      <div className="main-comment-Container">
        <div>
          <div className="Commments-Container">
            <div className="mini-container">
              <div className="flex">
                <h1>Comments</h1>

                <form onSubmit={this.AddComment}>
                  <p>Say Something about 4.O technologies</p>
                  <input
                    onChange={this.inputName}
                    className="searchInput"
                    type="search"
                    placeholder="Your Name"
                    value={searchInputName}
                  />
                  <br />
                  <textarea
                    placeholder="Your Comment"
                    rows="10"
                    cols="40"
                    className="textarea"
                    onChange={this.typeComment}
                    value={addingComment}
                  />
                  <br />
                  <button
                    type="submit"
                    className="button"
                    onClick={this.onClickButton}
                  >
                    Add Comment
                  </button>
                </form>
              </div>
              <div>
                <img
                  alt="comments"
                  className="comment-img"
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                />
              </div>
            </div>
          </div>
          <hr className="seperator" />
          <div className="ano-con">
            <div className="dropping-comments">
              <div className="comments-flex">
                <div className="coloring-count">
                  <p className="count">{count}</p>
                </div>
                <p>Comments</p>
              </div>
              <ul className="unordered-list-comments">
                {this.renderingfunction()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

    
