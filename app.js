async function users() {
  try {
    let users = await fetch("https://fakestoreapi.com/users");
    let content = document.getElementById("content");
    // let content=document.getElementById("content")
    // console.log(users)
    users = await users.json();
    // console.log(users)
    // *test users

    let input = document.getElementById("input").value;
    // console.log(input);

    let data = [];

    users.filter((ele) => {
      if (ele.id == Number(input)) {
        data.push(ele);
      }
    });
    // console.log(data.length);

    for (const {
      email,
      id,
      address: { city },
    } of data) {
      content.innerHTML = `<div class="parent"><p class="ram">email: ${email}</p><p>id:${id}</p><p>city:${city}</p></div><hr />`;
    }

    // ^working
    // for(let {id,email,username,address:{geolocation:{lat}},name:{firstname,lastname}} of users){

    //     content.innerHTML +=`
    //     <p>id:${id}</p><p>email:${email}</p><p>username:${username}</p><p>latitude:${lat}</p><p>name:${firstname+lastname}</p>  <hr />`
    // }
  } catch (arrr) {
    console.log(arrr.message);
  }
}
users()
// {address:{geolocation:{long}},
// <h1>${long}</h1>
