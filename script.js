
'use strict';


class User {
  constructor(id, name, email, isAuthorised) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.isAuthorised = isAuthorised;
  }
};
class Comment {
  constructor(user, post, comment) {
    this.user = user,
    this.post = post,
    this.comment = comment;
  } 
};
class Post {
  constructor(id, userId, image, descriprtion) {
    this.id = id,
    this.userId = userId,
    this.image =  image,
    // так можно обращаться к конкретному юзеру
    this.descriprtion = descriprtion;
  }
};
//////////////////////////////////////////

function authorize(user) {
  user.isAuthorised = true;
}
const user = new User(1, "Anna", "anna@gmail.com", false);
authorize(user);
const post = new Post(1, user.id, "images/angryCat.jpg",  "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero minima corporis accusamus nobis velit.");
const user2 = new User(2, "Alex","gena@gena.com", false);
authorize(user2);
const comment = new Comment(user2.name, post.id, "lya kakoy krasavchik))");

console.log(user);
console.log(post);
console.log(user2);
console.log(comment);

let posts = [];

function newPost(i) {
  return new Post(i+2, user.id,  "text" + i, 0);
};

for(let i = 0; 6 > i; i++) {
  posts[i] = newPost(i);
};

function toPrint(post) {
  console.log(post);
};
posts.forEach(toPrint);

function like (post, postId, isLiked) {
  if(post.id === postId) {
    isLiked ? post.likes++ : post.likes--;
    console.log(post);
  };
};

let postId = 4;

let isLiked = true;

for(let i = 0; i < posts.length; i++) {
  like(posts[i], postId, isLiked);
};

  const signIn= document.getElementById('button');
  signIn.addEventListener('click', hideSplashScreen);

  
function showSplashScreen(){
  document.getElementById('page-splash').hidden = false;
	document.body.classList.add('no-scroll');
}


function hideSplashScreen(){
    document.getElementById('page-splash').hidden = true;
	document.body.classList.remove('no-scroll');
}

function createCommentElement(comment){
    let elem= document.createElement('div')
    elem.classList.add('py-2');
    elem.classList.add('pl-3');
    elem.innerHTML = '<a href="#" class="muted">'  + comment.user + '</a>' + 
  '<p>' + comment.comment + '</p>';
  return elem;
}

function createPostElement(post){
  let elem = document.createElement('div');
  elem.classList.add('card');
  elem.classList.add('my-3');
  elem.innerHTML = 
  '<div id= "cat2" >' +
    '<img class="d-block w-100" src="' + post.image + '" alt="Post image">' +
  '</div>' +
    '<div class="px-4 py-3">' +
    '<div id = "option2" class="d-flex justify-content-around">' +
      '<span class="h1 mx-2 muted">' +
      '<i class="far fa-heart"></i>' +
      '</span>'
       +
      '<span class="h1 mx-2 muted">' +
      '<i class="far fa-comment"></i>' +
      '</span>' +
      '<span class="mx-auto"></span>' +
      '<span class="h1 mx-2 muted">' +
      '<i class="far fa-bookmark"></i>' +
      '</span>'
       +'</div>' +
  '<hr>' +
  '<div>' +
    '<p>' + post.descriprtion + '</p>' +
  '</div>' +
  '<hr>' +
  '<div id="comments">' +
  '<div class="py-2 pl-3">' +
          '<a href="#" class="muted">' + 'someusername' + '</a>' +
          '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.' + '</p>' +
        '</div>' +
  '</div>' + '</div>';
  return elem;
}


function addPost(postElement){
    document.getElementById("posts-container").append(postElement);
}

let postsCont = createPostElement(post);
addPost(postsCont);
document.getElementById('comments').append(createCommentElement(comment));


const hearts = document.getElementsByClassName('fa-heart');
for(let i = 0; i < hearts.length; i++) {
  console.log(hearts[i]);
    hearts[i].addEventListener('click', function() {
        if(hearts[i].classList.contains('fas')) {
            hearts[i].classList.remove('fas');
            hearts[i].classList.remove('text-danger');
            hearts[i].classList.add('far');
        } else {
            hearts[i].classList.remove('far');
            hearts[i].classList.add('text-danger');
            hearts[i].classList.add('fas');
        }
    })
};



const bookmark = document.getElementsByClassName('fa-bookmark');
for(let i=0; i< bookmark.length; i++){
  bookmark[i].addEventListener('click',function(){
    if(bookmark[i].classList.contains('fas')){
        bookmark[i].classList.remove('fas');
        bookmark[i].classList.add('far');
    } else {
        bookmark[i].classList.remove('far');
        bookmark[i].classList.add('fas');
    }
  })
}

const postss = document.getElementsByClassName('card');
for(let i = 0; i < postss.length; i++) {
    let ims = postss[i].getElementsByClassName('w-100');
    let he = postss[i].getElementsByClassName('fa-heart')[0];
    for(let j = 0; j < ims.length; j++) {
        ims[j].addEventListener('dblclick', function() {
          if(he.classList.contains('fas')) {
            he.classList.remove('fas');
            he.classList.remove('text-danger');
            he.classList.add('far');
           } else {
            he.classList.remove('far');
            he.classList.add('text-danger');
            he.classList.add('fas');
           }
        })
    }
};
