const tweets = [
  {
    id: 1,
    tweetId: 101,
    content: "Just finished coding a new project! #Excited #WebDev",
    timestamp: "2024-02-04T12:30:00Z",
    likes: 15,
    retweets: 5,
    comments: [
      { id: 2, commentId: 201, content: "Great job, John!" },
      { id: 3, commentId: 202, content: "I love your coding style." },
    ],
  },
  {
    id: 2,
    tweetId: 102,
    content: "Working on a beautiful design concept today. #Design #Creativity",
    timestamp: "2024-02-04T13:45:00Z",
    likes: 20,
    retweets: 8,
    comments: [
      { id: 1, commentId: 203, content: "Can't wait to see it!" },
      { id: 3, commentId: 204, content: "Your designs are always inspiring." },
    ],
  },
  {
    id: 3,
    tweetId: 103,
    content:
      "Just shared the latest tech trends on my blog. Check it out! #TechNews",
    timestamp: "2024-02-04T14:55:00Z",
    likes: 25,
    retweets: 10,
    comments: [
      { id: 1, commentId: 205, content: "Incredible insights, Tech Guru!" },
      {
        id: 4,
        commentId: 206,
        content: "You're always on top of the tech game.",
      },
    ],
  },
  {
    id: 4,
    tweetId: 104,
    content:
      "Mastering the art of coding requires dedication and practice. Keep coding! #CodingLife",
    timestamp: "2024-02-04T15:45:00Z",
    likes: 18,
    retweets: 7,
    comments: [
      {
        id: 1,
        commentId: 207,
        content: "Coding Ninja, you're an inspiration!",
      },
      { id: 2, commentId: 208, content: "I admire your coding skills." },
    ],
  },
];



const idUserTweets = (req, res) => {
  const id = parseInt(req.params.id);
  res.send(
    tweets.filter((element) => {
      return element.id === id;
    })
  );
};

const allTweets = (req, res) => {
  res.set("Content-Type", "application/json");
  res.send(tweets);
};

const postTweets = (req, res) => {
  tweets.push(req.body);
  res.send(req.body);
};

const edtTweets = (req, res) => {
  const id = req.params.id;
  res.send(putLikes);
};

const removeTweets = (req, res) => {
  const id = parseInt(req.params.id);
  tweets.splice(id - 1, 1);
  res.send("suprrimé");
};

module.exports = {
  idUserTweets,
  allTweets,
  postTweets,
  edtTweets,
  removeTweets,
};
