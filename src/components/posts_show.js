import React, { Component, PropType } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.param.id);
  }

  deleteOnClick() {
    this.props.deletePost(this.props.param.id)
      .then(() => { this.context.router.push('/') });
  }

  render() {
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.deleteOnClick.bind(this)}
        >
        Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);