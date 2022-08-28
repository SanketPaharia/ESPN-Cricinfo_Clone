import navbar from "../components/navbar.js"
import stickynavbar from "../components/navbarsticky.js"
import footer from "../components/footer.js"

document.getElementById('navbar').innerHTML =navbar;
document.getElementById('stickynavbar').innerHTML = stickynavbar;
document.querySelector('footer').innerHTML = footer;


window.onload = () =>{
    TopImg()
    renderDom();
}

let topImage = [
    'https://tpc.googlesyndication.com/simgad/931568015193886157',
    'https://tpc.googlesyndication.com/simgad/10994949654465411539',
    'https://tpc.googlesyndication.com/simgad/10926761020657163993'
]

let TopImg = () =>{
    let rand = Math.floor(Math.random()*3)
    document.getElementById("abtopimage").src = topImage[rand];
}

let renderDom = async () =>{
    let data = await fetch("https://immense-oasis-91324.herokuapp.com/api/abhi").then(res=>res.json());
    displayData(data);
}

let displayData = (data) =>{
        let container = document.getElementById("container");
        data.forEach((el) => {
            let div = document.createElement("div");
            let tit = document.createElement("h4");
            tit.innerText = el.title;
            let auth = document.createElement("p");       
            auth.innerText = el.author;
            let img = document.createElement("img");
            img.src = el.image;
            img.setAttribute("class","innerImage")
            let meta = document.createElement("p");
            meta.innerText = el.metaDesc;
            let div1 = document.createElement("div");
            div1.append(tit,meta,auth);
            div.append(img,div1);
            div.onclick = () =>{
                localStorage.setItem("article",JSON.stringify(el.id));
                window.location.href = "news.html";
            }
            container.append(div);
        });
}