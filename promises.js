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

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error) { //normally it requires some error checking 
                resolve()
            } else {
                reject('Error: something went wrong')
            }
        }, 2000);

    });
}

// createPost({title: 'POst 3', body: 'this is post3'})
//     .then(getPosts)
//     .catch(error => console.log(error))

//Promise.all

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Bye')
})

//fetch

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());



Promise.all([promise1,promise2,promise3,promise4])
    .then(values => console.log(values))




