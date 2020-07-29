function createCommentEl( response ) {
	let user = document.createElement( 'a' );
	user.setAttribute( 'href', response.user.url.replace( 'api.github.com/users', 'github.com' ) );
	user.classList.add( 'user' );

	let userAvatar = document.createElement( 'img' );
	userAvatar.classList.add( 'avatar' );
	userAvatar.setAttribute( 'src', response.user.avatar_url );

	user.appendChild( userAvatar );

	let commentLink = document.createElement( 'a' );
	commentLink.setAttribute( 'href', response.html_url );
	commentLink.classList.add( 'comment-url' );
	commentLink.innerHTML = '#' + response.id + ' - ' + response.created_at;

	let commentContents = document.createElement( 'div' );
	commentContents.classList.add( 'comment-content' );
	commentContents.innerHTML = response.body;
	// Progressive enhancement.
	if ( window.showdown ) {
		let converter = new showdown.Converter();
		commentContents.innerHTML = converter.makeHtml( response.body );
	}

	let comment = document.createElement( 'li' );
	comment.setAttribute( 'data-created', response.created_at );
	comment.setAttribute( 'data-author-avatar', response.user.avatar_url );
	comment.setAttribute( 'data-user-url', response.user.url );

	comment.appendChild( user );
	comment.appendChild( commentContents );
	comment.appendChild( commentLink );

	return comment;
}

function CommentsPagingInfo() {
  this.pageLastCommentDates = [];
  this.loadedPagesCount = 0;
}

CommentsPagingInfo.prototype.addDate = function(lastCommentDate) {
  this.pageLastCommentDates.push(lastCommentDate);
};

CommentsPagingInfo.prototype.getDateToExtractPage = function(pageIndex) {
  let dateIndex = pageIndex - 1;
  if (dateIndex < 0 || dateIndex >= this.pageLastCommentDates.length) {
    throw new Error('wrong pageIndex: "' + pageIndex + '", this.pageLastCommentDates.length: ' + this.pageLastCommentDates.length);
  }
  return this.pageLastCommentDates[dateIndex];
};

function CommentsLoader(ghApiUrl) {
  this.pagingInfo = new CommentsPagingInfo();
  this.currentPageIndex = 0;
  this.ghApiUrl = ghApiUrl;
}

CommentsLoader.prototype.isOnLastLoadedPage = function() {
  return this.currentPageIndex == this.pagingInfo.loadedPagesCount;
};

CommentsLoader.prototype.loadComments = function() {
  let that = this;
  let request = new XMLHttpRequest();
  let url = that.ghApiUrl;
  if (that.currentPageIndex > 0) {
    url += '?since=' + that.pagingInfo.getDateToExtractPage(that.currentPageIndex);
  }
  request.open( 'GET', url, true );
  request.onload = function() {
    if ( this.status >= 200 && this.status < 400 ) {
      let response = JSON.parse( this.response );

      if (that.isOnLastLoadedPage()) {
        that.pagingInfo.loadedPagesCount++;
        if (response.length == 30) {
          that.pagingInfo.addDate(response[ response.length-1 ].created_at);
        }
      }
      if (response.length == 30) {
        document.getElementById( 'next-comments-page' ).style.display = 'block';
      } else {
        document.getElementById( 'next-comments-page' ).style.display = 'none';
      }

      /*
      if (that.currentPageIndex > 0) {
        document.getElementById( 'prev-comments-page' ).style.display = 'block';
      } else {
        document.getElementById( 'prev-comments-page' ).style.display = 'none';
      }
      */

      let firstOrSecond = 0;
      if (that.currentPageIndex > 0) { // skip first element to avoid duplication
        firstOrSecond = 1;
      }
      for ( var i = firstOrSecond; i < response.length; i++ ) {
        document.getElementById( 'gh-comments-list' ).appendChild( createCommentEl( response[ i ] ) );
      }

      document.getElementById( 'loading-comments' ).style.display = 'none';

      if ( 0 === response.length ) {
        document.getElementById( 'no-comments-found' ).style.display = 'block';
      }
    } else {
      console.error( this );
    }
  };

  request.send();
  document.getElementById( 'loading-comments' ).style.display = 'block';
}

CommentsLoader.prototype.loadNextPage = function() {
  this.currentPageIndex++;
  this.loadComments();
}

CommentsLoader.prototype.loadPreviousPage = function() {
  this.currentPageIndex--;
  this.loadComments();
}
