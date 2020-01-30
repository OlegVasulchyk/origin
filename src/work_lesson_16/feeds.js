import "./feeds.scss";

function Feed(mountPoint) {
  this.mountPoint = mountPoint;
}

Feed.prototype.init = function() {
  this.render();
  this.getPosts();
};
Feed.prototype.render = function() {
  this.container = document.createElement("div");
  this.container.classList.add("feed__container");
  this.mountPoint.appendChild(this.container);
};

Feed.prototype.getPosts = function() {
  const xhr = new XMLHttpRequest(); // creare XHR oggetto
  xhr.open("GET", "http://localhost:3000/posts");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      const data = JSON.parse(xhr.response);
      this.renderPosts(data);
    }
  };
};
Feed.prototype.renderPosts = function(posts) {
  for (let post of posts) {
    this.renderPost(post);
  }
};
Feed.prototype.renderPost = function(post) {
  const div = document.createElement("div");
  div.classList.add("feed");
  const img = document.createElement("img");
  img.classList.add("post__img");
  img.src = post.img;
  div.appendChild(img);
  this.container.appendChild(div);
};
export { Feed };
