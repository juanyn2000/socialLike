
function likePost(postId) {

  const likeCounter = document.querySelector(`.${postId}-counter`);
  const button = document.querySelector(
    `button[onclick="likePost('${postId}')"]`
  );


  let likes = parseInt(likeCounter.textContent) || 0;
  likes++;


  likeCounter.textContent = `${likes} like(s)`;
}
