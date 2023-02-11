const posts = [
    {title: 'POst 1', body: 'this is post1'},
    {title: 'POst 2', body: 'this is post2'}
];

function getPosts() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}<li>`

        });
        document.body.innerHTML = output;
    }, 1000);

}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}


createPost({title: 'POst 3', body: 'this is post3'}, getPosts);