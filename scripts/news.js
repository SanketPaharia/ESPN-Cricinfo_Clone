import navbar from "../components/navbar.js";
import stickynavbar from "../components/navbarsticky.js";
import footer from "../components/footer.js";

document.getElementById('navbar').innerHTML =navbar;
document.getElementById('stickynavbar').innerHTML = stickynavbar;
document.querySelector('footer').innerHTML = footer;

let id = JSON.parse(localStorage.getItem("article"));
let renderDom = async () =>{
    let data = await fetch(`https://immense-oasis-91324.herokuapp.com/api/abhi/${id}`).then(res=>res.json());
    displayData(data);
}
let displayData = (data) =>{
    let heading = document.createElement("h1");
    heading.innerText = data.title;
    let meta = document.createElement("p");
    meta.innerText = data.metaDesc;
    let author = document.createElement("h5");
    author.innerHTML = `Author:- ${data.author}`;
    let postor = document.createElement("img");
    postor.src = data.image;
    let div = document.createElement("div");
    div.innerHTML = data.content;
    document.getElementById("abhiRightContainer").append(heading,meta,author,postor,div);
}

let sponsoredArr=[
    {
        Image:"https://i.gadgets360cdn.com/large/intel-t_1661156344556.png",
        title:"Get Superior Performance When You Need It the Most With 12th Gen Intel Core Mobile Processors",
        mentor:"ketto",
        sts:"Sponsored",
    },
    {
        Image:"https://c.ndtvimg.com/2022-08/5j27g7o_image_120x90_19_August_22.jpg",
        title:"Learn How To Protect Yourself From Inflation And Earn Additional Income",
        mentor:"ketto",
        sts:"Sponsored",
    },
    {
        Image:"https://i.gadgets360cdn.com/large/a53_1660890777563.jpg",
        title:"What Makes the Samsung Galaxy A53 5G the Perfect Smartphone When It Comes to Camera Performance",
        mentor:"EMIDS",
        sts:"Sponsored",
    },
    {
        Image:"https://c.ndtvimg.com/2022-08/0oinabm8_image_120x90_09_August_22.jpg",
        title:"Acing Hybrid Work 101: Here's How WeWork Can Help",
        mentor:"NVEDA",
        sts:"Sponsored",
    },
    {
        Image:"https://c.ndtvimg.com/2022-08/u6ba8k6o_image_120x90_03_August_22.jpg",
        title:"CRE8 Index: What Is It, And How Can It Help You Create A Great Crypto Portfolio?",
        mentor:"Assetz",
        sts:"Sponsored",
    },
    {
        Image:"https://i.gadgets360cdn.com/large/sam-t_1659436979951.png",
        title:"Samsung ‘Greater Than’ Galaxy Unpacked Event on August 10: Here’s What Can Be Expected to Unfold",
        mentor:"Samsung",
        sts:"Sponsored",
    },
    {
        Image:"https://c.ndtvimg.com/2022-08/o8njplj8_computer-generic-usplash_120x90_01_August_22.jpg?im=FaceCrop,algorithm=dnn,width=240,height=180",
        title:"How This Technology Can Bridge Language Divide In An Interconnected World",
        mentor:"apple",
        sts:"Sponsored",
    },
    {
        Image:"https://i.gadgets360cdn.com/large/Huawei_Mate_Xs_2_1_1659003121363.jpg",
        title:"HUAWEI Mate Xs 2 Outshines Its Competition",
        mentor:"HUAWEI",
        sts:"Sponsored",
    },
    {
        Image:"https://c.ndtvimg.com/2022-07/01sqidno_myn-cab_120x90_01_July_22.jpg",
        title:"Sponsored: MYn's 15,000 Cabs Take Bengaluru By Storm",
        mentor:"MYn's",
        sts:"Sponsored",
    },
]

let displayNews= () =>{
    document.getElementById("sponsor").innerHTML=null;
    sponsoredArr.forEach((elem)=>{
        let box=document.createElement("div");
        box.setAttribute("class","nbox");
        let image=document.createElement("img");
        image.src=elem.Image;
        let title=document.createElement("h3");
        title.innerText=elem.title;
        let mdiv=document.createElement("div");
        mdiv.setAttribute("class","mbox")
        let mentor= document.createElement("p");
        mentor.innerText=elem.mentor;
        let sts=document.createElement("p");
        sts.innerText=elem.sts;
        mdiv.append(mentor,sts);
        box.append(image,title,mdiv);
        document.getElementById("sponsor").append(box)
    })
}


window.onload = () =>{
    renderDom();
    displayNews();
    // localStorage.clear();
}
