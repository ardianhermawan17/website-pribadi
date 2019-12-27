//CHECHKING JQUERY
// window.onload = function () {
//     if(window.jQuery){
//         alert("Okay!");
//     }
//     else{
//         alert("Cry");
//     }
// };

//FOR STICKY
window.onscroll = function() {mySticky()};

var header = document.getElementById("header");
var sticky = header.offsetTop;
var navbarHeader = document.getElementById("navbarHeader");

function mySticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        navbarHeader.classList.add("trans-8");

    } else {
        header.classList.remove("sticky");
        navbarHeader.classList.remove("trans-8");

    }
}

//SCROLL SPY

document.addEventListener('DOMContentLoaded', function () {

    //Mengambil section (targets) dan nav-link (trigger)
    const sections = document.querySelectorAll("section");
    const nav_links = document.querySelectorAll("#navbarPerpus .nav-item");

    //Function untuk menambah dan mengeluarkan active-button dari links
    const makeActive = link => nav_links[link].classList.add("active-button");
    const removeActive = link => nav_links[link].classList.remove("active-button");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach(link => removeActive(link));

    // ubah tautan aktif sedikit di atas bagian yang sebenarnya
    // cara ini akan berubah saat kamu mendekati bagian ini
    // daripada menunggu sampai bagian telah melewati bagian atas layar
    const sectionMargin = 200;

    // lacak tautan yang saat ini aktif
    // gunakan ini agar tidak mengubah tautan aktif berulang-ulang
    // saat pengguna menggulir, tetapi hanya berubah saat sudah jadi
    // diperlukan karena pengguna berada di bagian baru halaman
    let currentActive = 0;

    //mendengarkan events scroll
    window.addEventListener("scroll", () => {
        //mengecek section dari belakang


        const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) - 1;

        //hanya jika section tergantikan
        //menghapus semua class active-button dari semua nav-link
        //dan menerapkan itu ke link untuk posisi sekarang
        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
}, false);
//nav-right


//Untung sliding

var icon = document.getElementById('iconBG');
var schoolCont = document.getElementById('schoolContact');
var descCont = document.getElementById('descContact');
var a = document.getElementById('descCrip');
var b = document.getElementById('schoolSs');


function school(){
    icon.style.left= "50%";
    b.style.color= "#0FBDBA";
    a.style.color= "#393E46";
    schoolCont.style.right= "0%";
    descCont.style.left = "120%";
}
function desc(){
    iconBG.style.left= "0%";
    a.style.color= "#0FBDBA";
    b.style.color= "#393E46";
    schoolCont.style.right= "120%";
    descCont.style.left = "0%";
}


//basic


$(document).ready(function() {
    $('.books').slick({
        infinite: true,
        draggable: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        nextArrow: $('#prev'),
        prevArrow: $('#next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});
//    progress-bar

$(window).scroll(function (event) {
    var p = $( "#contact" ).first();
    var position = p.position();
    const cont = position.top;
    const scrollPos = $(window).scrollTop();
    console.log("ardian");

    if(scrollPos >= cont -200){
        //HOB-progres
         $("#hob1 .cover-progress .float-right").attr("style","width:27%;").text("27%");
         $("#hob2 .cover-progress .float-right").attr("style","width:23%;").text("23%");
         $("#hob3 .cover-progress .float-right").attr("style","width:15%;").text("15%");
         $("#hob4 .cover-progress .float-right").attr("style","width:18%;").text("18%");
         $("#hob5 .cover-progress .float-right").attr("style","width:12%;").text("12%");
         $("#hob6 .cover-progress .float-right").attr("style","width:8%;").text("8%");
    }else{
         $("#hob1 .cover-progress .float-right").attr("style","width:0%;").text("0%");
         $("#hob2 .cover-progress .float-right").attr("style","width:0%;").text("0%");
         $("#hob3 .cover-progress .float-right").attr("style","width:0%;").text("0%");
         $("#hob4 .cover-progress .float-right").attr("style","width:0%;").text("0%");
         $("#hob5 .cover-progress .float-right").attr("style","width:0%;").text("0%");
         $("#hob6 .cover-progress .float-right").attr("style","width:0%;").text("0%");
    }

});

