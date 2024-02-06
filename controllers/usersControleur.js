const usersTwitter = [
  {
    id: 1,
    username: "JohnDoe",
    fullName: "John Doe",
    bio: "Web Developer passionate about coding!",
    profilePicture: "https://source.unsplash.com/200x200/?portrait",
  },
  {
    id: 2,
    username: "JaneSmith",
    fullName: "Jane Smith",
    bio: "Designer exploring the beauty of art and technology.",
    profilePicture: "https://source.unsplash.com/200x200/?face",
  },
  {
    id: 3,
    username: "TechGuru",
    fullName: "Tech Guru",
    bio: "Sharing the latest tech trends and innovations.",
    profilePicture: "https://source.unsplash.com/200x200/?tech",
  },
  {
    id: 4,
    username: "CodingNinja",
    fullName: "Coding Ninja",
    bio: "Passionate about mastering the art of coding.",
    profilePicture: "https://source.unsplash.com/200x200/?coding",
  },
];

function Mesusers (req, res) {
    res.set("Content-Type", "application/json");
    res.send(usersTwitter);
  }

  const IdUser=(req, res) => {
    const id = parseInt(req.params.id);
    res.send(
      usersTwitter.filter((element) => {
        return element.id === id;
      })
    );
  }

  const sendData=(req,res)=>{
    usersTwitter.push(req.body)
    res.send(req.body);
}

const userDelete=(req,res)=>{
  const id=parseInt(req.params.id)
  usersTwitter.splice(id-1,1)
  res.send('user suprrimé');
}

const editUsers=(req,res)=>{
  res.send('modification enregistrée')
}
module.exports ={
    Mesusers,IdUser,sendData,userDelete,editUsers
}