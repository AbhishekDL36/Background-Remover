
var banner = document.querySelector(".banner");

window.addEventListener("scroll", function() {
  if(window.scrollY >500) {
    banner.classList.remove("banners")
  } else{
    banner.classList.add("banners");
  }
})










// const liness =document.querySelector(".lines");
// const downloadable= document.querySelector(".picss")
// const submitbutton= document.querySelector(".submitbutt");
// const downloadbutton= document.querySelector(".downbutt");
// function handleclick() {
// const inputimage=document.querySelector(".file");
// const image= inputimage.files[0];
// const formData= new FormData();

// formData.append("image_file",image);
// formData.append('size','auto')
// console.log("h1");
// const apikey= "UxoPc8SYWJZY9JmWiWwH1PsU" ;
// fetch('https://api.remove.bg/v1.0/removebg',{
//     method: 'POST',
//     headers:{
//         'X-Api-Key': apikey,
//     },
//     body:formData

// })

// .then(function(response){
//     return response.blob();
// })
// .then(function(finalResponse){
   
//     const url= URL.createObjectURL(finalResponse);
//     downloadingurl= url;
//    const img=document.createElement("img");
   
//    img.src=url;
// liness.classList.add("inactive");
//    downloadable.appendChild(img);
// submitbutton.classList.add("inactive");
// downloadbutton.classList.add("active");
// })
//  .catch(); 
// }

// function downloadd() {
//     var anchorr= document.createElement('a');
//     anchorr.href= downloadingurl;
    
//     anchorr.download="no-background.png";
//     document.body.appendChild(anchorr);

//     anchorr.click();

//      document.body.removeChild(anchorr);


// }

   
// const headerd= document.querySelector(".headd");
// const ans= document.querySelector(".use");

// headerd.addEventListener('click',()=>
// { ans.style.backgroundColor="yellow";
//   setTimeout( ()=>
//   {  ans.style.backgroundColor= 'transparent' },2000 ) }

// )

// const login= document.querySelector(".logbot");
// const loginpage=document.querySelector(".login");
// const enterit=document.querySelector(".entery");
// const userinfo = document.querySelector("#user");
// const signup=document.querySelector(".signbot");

//  login.addEventListener("mouseover", ()=> 
 
//      {  loginpage.classList.add("active");
//      signed.classList.remove("active")
//       setTimeout(()=>
//       {
//          loginpage.classList.remove("active")
//        },1000);
//      }
//  );



//  login.addEventListener("click",()=>
//  loginpage.classList.add("active")
//  )


// const signed =document.querySelector(".signup");
// const signbut=document.querySelector(".signbot");
// signbut.addEventListener("mouseover",()=>{
//   signed.classList.add("active")
//   loginpage.classList.remove("active")
//   setTimeout(()=>{
//     signed.classList.remove("active")
//   },2000)
// })
//  enterit.addEventListener("click",()=>{
//    enterit.style.backgroundColor="yellow";
//  })

// const allstars= document.querySelector(".stars")
// const starr1=document.querySelector(".star1");
// const starr2=document.querySelector(".star2");
// const starr3=document.querySelector(".star3");
// const starr4=document.querySelector(".star4");
// const starr5=document.querySelector(".star5");
// const wrote= document.querySelector(".write");


//  starr1.addEventListener("click",()=>{
//      starr1.style.color="red";
//      starr2.style.color="black";
//      starr3.style.color="black";
//      starr4.style.color="black";
//      starr5.style.color="black";
//      wrote.innerText="Poor";
//  })

//  starr2.addEventListener("click",()=>{
//    starr1.style.color="red";
//    starr2.style.color="red";
//    starr3.style.color="black";
//    starr4.style.color="black";
//    starr5.style.color="black"; 
//    wrote.innerText="Poor"; })

//  starr3.addEventListener("click",()=>{
//   starr1.style.color="yellow";
//   starr2.style.color="yellow";
//   starr3.style.color="yellow";
//   starr4.style.color="black";
//   starr5.style.color="black";
//   wrote.innerText="Average";})

//  starr4.addEventListener("click",()=>{
//    starr1.style.color="yellow";
//    starr2.style.color="yellow";
//   starr3.style.color="yellow";
//   starr4.style.color="yellow";
//   starr5.style.color="black";
//   wrote.innerText="Good";
//  })

// starr5.addEventListener("click",()=>{
//    starr1.style.color="yellow";
//    starr2.style.color="yellow";
//    starr3.style.color="yellow";
//    starr4.style.color="yellow";
//    starr5.style.color="yellow";
//    wrote.innerText="Excellent";
//  })





