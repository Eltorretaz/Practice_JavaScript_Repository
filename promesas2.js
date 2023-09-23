const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = false;

            if(error){
                reject('hubo error');
            }else {
                resolve(posts)
            }
        }, 2000);
    });
};

fetchPosts()
    .then((posts) => {
    console.log(posts);
})
    .catch((error) => {
    console.log(error)
})