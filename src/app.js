//import React from 'react';
//import ReactDom from 'react-dom';
//import jQuery from 'jquery';
import CommentBox from '.components/comment-box';

jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box'),
    function() {
	console.timeEnd('react-app')
    }
  );
})
