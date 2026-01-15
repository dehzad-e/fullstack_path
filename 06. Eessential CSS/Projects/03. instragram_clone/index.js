const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts-container")

let postsHTML = ""

for (let i = 0; i < posts.length; i++) {
    postsHTML += `
        <article class="post">
            <section class="post-author">
                <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name} profile picture">
                <div class="author-info">
                    <p class="author-name">${posts[i].name}</p>
                    <p class="author-location">${posts[i].location}</p>
                </div>
            </section>
            
            <section class="post-image">
                <img src="${posts[i].post}" alt="${posts[i].name}'s artwork post">
            </section>
            
            <section class="post-details">
                <div class="post-actions">
                    <button class="action-btn" aria-label="Like post">
                        <img src="images/icon-heart.png" alt="">
                    </button>
                    <button class="action-btn" aria-label="Comment on post">
                        <img src="images/icon-comment.png" alt="">
                    </button>
                    <button class="action-btn" aria-label="Send direct message">
                        <img src="images/icon-dm.png" alt="">
                    </button>
                </div>
                <p class="likes-count">${posts[i].likes} likes</p>
                <p class="post-caption">
                    <span class="username">${posts[i].username}</span> 
                    <span class="caption-text">${posts[i].comment}</span>
                </p>
            </section>
        </article>
`
}

postsContainer.innerHTML = postsHTML

