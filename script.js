// /* body{
//     display: flex;
//     flex-direction: column;
// } */

//     html{
//         font-family: 'IBM Plex Sans JP', sans-serif;
//         color: rgb(186, 38, 38);
//     }
//     header{
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         color: white;
//     }
//     nav ul{
//         display: flex;
//         list-style: none;
//         gap: 30px;
//         margin: 0px;
//         padding: 0px;
        
        
//     }
//     nav{
//         /* border: 3px solid rebeccapurple; checking */
//         padding-right:30px;
//     }
//     .logo{
//         /* border: 3px solid rebeccapurple; checking */
//         padding-left:30px;
//     }
    
//     nav ul li a{
//         text-decoration: none;
//         color: white;  
//     }
//     /* hero section */
//     .section-hero p{
//         color:#1D4ED8;
//     }
//     .section-hero h1{
//         font-size: 2.5rem;
//         color: #1D4ED8;
//     }
//     .section-hero {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     }
    
//     /* section-services */
//     .section-services h1{
//         font-size: 30px;
    
//         padding-left: 20px;
//         color: #1D4ED8;
//     }
//     .services-items{
//         display: flex;
//         flex-direction: row;
//         justify-content: space-evenly;
//         /* border: 4px solid blue; */
        
//     }
//     .services-item img{
//         display: block;
//         margin: 0 auto;
//     }
//     .services-item h3{
//         color: #1D4ED8;
//         text-align: center;
//     }
//     .services-item p{
//         color: #4B5563;
//         text-align: center;
//     }
    
//     .services-items div{
//         /* border: 4px solid rgb(255, 0, 217); */
//         background-color: #ECECEC;
//         max-width: 300px;
//         border-radius: 10px;
//         padding: 20px;
//     }
    
//     /* Grid container to arrange items */
//     .work-items {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);  /* Three columns */
//         gap: 10px;  /* Space between items */
//         column-gap: 1px;
//         justify-items: center;  /* Center horizontally */
//         align-items: center;    /* Center vertically */
//     }
    
//     /* Individual card style */
//     .work-item {
//         position: relative;
//         width: 100%;              /* Full width */
//         max-width: 300px;         /* Maximum card width */
//         height: 250px;            /* Set height for uniformity */
//         border-radius: 10px;      /* Rounded corners */
//         /* overflow: hidden;         Prevent image overflow */
//         background-color: #ffffff; /* White background for the card */
//         padding: 15px;              /* Space to accommodate gradient border */
//         background-image: linear-gradient(to bottom, #1d4ed8, #45bcac, #4adb84); /* Gradient background */
//         border-radius: 10px;      /* Same rounding for the card */
//     }
    
//     /* Adding image inside the card */
//     .work-item img {
//         width: 100%;              /* Make image fill the width */
//         height: 100%;             /* Make image fill the height */
//         object-fit: cover;        /* Ensure image covers the space without distortion */
//         border-radius: 10px;      /* Rounded corners for the image */
//     }
//     .section-work h1{
//         font-size: 30px;
//         padding-left: 20px;
//         color: #1D4ED8;
//     }
    
//     .whyUs-items{
//         display: flex;
//         flex-direction: row;
//         justify-content: space-evenly;
//         /* border: 4px solid blue; */
//     }
//     .whyUs-items div{
//         /* border: 4px solid rgb(255, 0, 255); */
//         background-color:#ECECEC;
//         max-width: 300px;
//         border-radius: 10px;
//         padding: 20px;
//     }
//     .whyUs-items h3{
//         color: #1D4ED8;
//         text-align: center;
//     }
    
//     .whyUs-items p{
//         color: #4B5563;
//         text-align: center;
//     }
//     .whyUs-item img {
//         display: block;
//         margin: 0 auto;
//     }
//     .section-whyUs h1{
//         font-size: 30px;
//         padding-left: 20px;
//         color: #1D4ED8;
//     }
    
//     .section-getQuote h1{
//         font-size: 30px;
//         padding-left: 20px;
//         color: #1D4ED8;
//     }
    
//     /* form */
//     form {
//         max-width: 600px;
//         margin: 0 auto;
//         text-align: left;
//     }
    
//     form label {
//         font-size: 16px;
//         font-weight: 500;
//         color: #555;
//         display: block;
//         margin-bottom: 5px;
//     }
    
//     form input, form textarea {
//         font-family: 'IBM Plex Sans JP', sans-serif;
//         width: 100%;
//         padding: 10px;
//         margin-bottom: 20px;
//         border: 1px solid #ccc;
//         border-radius: 5px;
//         font-size: 16px;
//         box-sizing: border-box;
//     }
    
//     form button {
//         width: 100%;
//         padding: 10px 20px;
//         background-image:linear-gradient(to bottom, #1d4ed8, #45bcac, #4adb84);
//         color: #fff;
//         border: none;
//         border-radius: 5px;
//         font-size: 18px;
//         cursor: pointer;
//         transition: background-color 0.3s ease;
//     }
//     .quote-item {
//         margin: 0 auto;
//         padding: 50px 20px;
//         width: 500px;
//         background-color: #ECECEC ;
//         /* text-align: center; */
//         border-radius: 10px;
//         align-items: center;
//     }
//     .section-contact h1{
//         font-size: 30px;
//         padding-left: 20px;
//         color: #1D4ED8;
//     }
//     section {
//         margin-bottom: 40px; /* Space between sections */
//         padding: 20px 0; /* Optional: Add padding inside the sections */
//     }
//     header{
//         /* border: 3px solid rebeccapurple; checking */
//         background-color: #2563EB;
//     }
//     .section-contact{
//         text-align: center;
//     }
//     .section-contact p {
//         font-size: 18px; /* Slightly larger paragraph text */
//         margin-bottom: 20px; /* Space below the paragraph */
//         color: #4B5563; /* Softer color for the text */
//         text-align: center;
//     }
    
//     .section-contact ul {
//         list-style: none; /* Remove default bullet points */
//         padding: 0; /* Remove default padding */
//         font-size: 18px; /* Text size for the list */
//     }
    
//     .section-contact ul li {
//         margin: 10px; /* Space between list items */
//         display: inline-block;
//         color: #4B5563;
//         font-weight:500;
//      } 
    
//     .section-contact ul li strong {
//         color:#1D4ED8; /* Highlight the labels */
//     }
    
//     footer {
//         background-color: #2563EB; /* Dark background color */
//         color: #FFFFFF; /* White text color */
//         padding: 40px; /* Space around the footer */
//         text-align: center; /* Center the text */
//         font-size: 16px; /* Standard font size */
//         /* margin-top: 30px; Space between the content and footer */
//     }
    
//     footer p {
//         margin: 0; /* Remove default margins */
//         font-weight: 400; /* Regular font weight */
//     }
    
//     .services-item, .work-item, .whyUs-item {
//         padding: 20px; /* Uniform padding */
//         margin: 10px; /* Space around the item */
//     }
//     h1{
//         text-align: center;
//     }
document.addEventListener('DOMContentLoaded', ()=>{

    const submit = document.getElementById('submit-button');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const msg = document.getElementById('message');

    if (submit){
        alert('Info submitted, we will get back to you soon!');
    }


    const hamburger = document.querySelector('.hamburger');
    console.log(hamburger);
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', ()=> {
        navMenu.classList.toggle('nav-active');
        // console.log('trigerred');
    });
    
    const navitem = document.querySelector('.nav-active');
    console.log(navitem);
    navitem.addEventListener('click', ()=>{
    console.log('clicked');
    });


    
});
