const postes = [
    {title : 'Post 1', body: ' This is post 1'},
    {title : 'Post 2', body: ' This is post 2'},
]

function getPosts(){
    setTimeout(()=>{
        let output ='';
        postes.forEach((post,index)=>{
            output += '<li>'+post.title+'</li>'
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        postes.push(post);
        callback()
    },2000);
};

getPosts();
createPost({title : 'Post 3', body: ' This is post 3'}, getPosts)

