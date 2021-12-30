const posts = [
  { title: 'Post one', body: 'This is post one.'},
  { title: 'Post two', body: 'This is post two.'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<h3>${post.title}</h3>`,
      output += `<li>${post.body}</li>`,
      output += `<hr>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post three', body: 'This is post three' }, getPosts);