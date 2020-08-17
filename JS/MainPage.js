var NavBarContent = [
    {
        Name: "Services",
        Link: "#"
    },
    {
        Name: "Prices",
        Link: "#"
    },
    {
        Name: "Benefits",
        Link: "#"
    },
    {
        Name: "contact",
        Link: "#"
    },
    {
        Name: "About Us",
        Link: "#"
    }
];
var MarketingContent = [
    {
        ImgSrc: "images/services1.png",
        ImgAlt: "MarketingStrategy",
        Head: "Content Marketing Strategy",
        Detail: "We not just write content, we create a content strategy tailored to your business needs."
    },
    {
        ImgSrc: "images/services2.png",
        ImgAlt: "PromotionANDDistribution",
        Head: "Promotion & Distribution",
        Detail: "We help you distribute your content through social media, PPC, and many other channels."
    },
    {
        ImgSrc: "images/services3.png",
        ImgAlt: "Measurement",
        Head: "Measurement",
        Detail: "You’ll want to prove good ROI from your content marketing investment."
    },
    {
        ImgSrc: "images/services4.png",
        ImgAlt: "EditorialContent",
        Head: "Editorial Content",
        Detail: "We write articles, landings, and guides that earn SEO value and drive traffic to your site."
    },
    {
        ImgSrc: "images/services5.png",
        ImgAlt: "CreativeContent",
        Head: "Creative Content",
        Detail: "We create videos, infographics, data visualizations, and more to engage your visitors."
    },
    {
        ImgSrc: "images/services6.png",
        ImgAlt: "ReportingAndAnalytics",
        Head: "Reporting & Analytics",
        Detail: "We carefully study Google analytics data and create comprehensive reports."
    }
];

var OurPriority = [
    {
        ImgSrc: "images/WeMakeMoney.png",
        ImgAlt: "WeMakeMoney",
        Title: "We Make Money",
        Description: "We’ll make you more money with customer-focused, convincing copy that sells harder."
    },
    {
        ImgSrc: "images/AffordablwePrices.png",
        ImgAlt: "AffordablwePrices",
        Title: "Affordablwe Prices",
        Description: "We are offering high-quality web copywriting services that will not cost you the earth.        "
    },
    {
        ImgSrc: "images/FocusOnResult.png",
        ImgAlt: "FocusOnResult",
        Title: "Focus on result",
        Description: "It’s all about what adds value for you and your business. Above all, we want our words to work for you."
    }
]

var ServicePrices = [
    {
        Package: "Basic",
        Price: '<span class="Price">$69</span> <br>Per 1000 words',
        Description: [
            "Blog post", "Article", "Website pages update",
            "Up to 5 keywords", "SEO optimization", "Readability improvement"
        ],
        Button: "Buy Now"
    },
    {
        Package: "Advanced",
        Price: '<span class="Price">$99</span> <br>450 - 1000 words',
        Description: [
            "Personal web page", "Personal content", "Adjust to the structure",
            "keyword planning", "SEO optimization", "Good readability"
        ],
        Button: "Buy Now"
    },
    {
        Package: "Premium",
        Price: '<span class="Price">$109</span> <br>500 - 1500 words',
        Description: [
            "Business web page", "Niche specific content", "Adjust to the structure",
            "Keyword planning", "SEO optimization", "Readability improvement"
        ],
        Button: "Buy Now"
    }
]

var ContactInfo = [
    {
        class: "fas fa-envelope",
        link: "#",
        text: "exampleemail@gmail.com"
    },
    {
        class: "fas fa-phone",
        link: "#",
        text: "(123) 456-7890"
    },
    {
        class: "fas fa-map-marker-alt",
        link: "#",
        text: "437 S Olive St, Los Angeles"
    },
    {
        class: "fab fa-skype",
        link: "#",
        text: "VinnieThePooh"
    }
]

var ContactInfoInFooter = [
    {
        class: "fas fa-envelope",
        link: "#",
        text: "exampleemail@gmail.com"
    },
    {
        class: "fas fa-phone",
        link: "#",
        text: "(123) 456-7890"
    },
    {
        class: "fas fa-map-marker-alt",
        link: "#",
        text: "437 S Olive St, Los Angeles"
    },
]

//function for working with DOM
function FillNavbar(arr, ID__name){
    for(let i = 0; i < arr.length; i++){
        let createLi = document.createElement("li");
        let createA = document.createElement("a");
        createA.href = arr[i].Link;
        createA.innerText = arr[i].Name;
        createLi.appendChild(createA);
        document.getElementById(ID__name).appendChild(createLi);
    }
}

function FillMarketingContent(arr, ID__name){
    for (let i = 0; i < arr.length; i++) {
        let createLi = document.createElement("li");
        let CreateImg = document.createElement("img");
        let CreateH4 = document.createElement("h3");
        let CreateP = document.createElement("p");
        CreateImg.src = arr[i].ImgSrc;
        CreateImg.alt = arr[i].ImgAlt;
        CreateH4.className = "MarketingContentHead";
        CreateH4.innerText = arr[i].Head;
        CreateP.className = "MarketingContent__detail";
        CreateP.innerText = arr[i].Detail;
        createLi.appendChild(CreateImg);
        createLi.appendChild(CreateH4);
        createLi.appendChild(CreateP);
        document.getElementById(ID__name).appendChild(createLi);       
    }
}

function OurPriorityLi(arr, ID__name){
    for (let i = 0; i < arr.length; i++) {
        let createLi = document.createElement("li");
        let createImg = document.createElement("img");
        let Title = document.createElement("p");
        let Hr = document.createElement("hr");
        let Description = document.createElement("p");
        createImg.src = arr[i].ImgSrc;
        createImg.alt = arr[i].ImgAlt;
        Title.className = "PriorityTitle";
        Title.innerText = arr[i].Title;
        Description.innerText = arr[i].Description;
        Hr.className = "HrInPriority";
        Description.className = "PriorityDescription";
        createLi.appendChild(createImg);
        createLi.appendChild(Title);
        createLi.appendChild(Hr);
        createLi.appendChild(Description);
        document.getElementById(ID__name).appendChild(createLi);
    }
}

function packages(arr, ID__Name){
    for (let i = 0; i < arr.length; i++) {
        let createLi = document.createElement("li");
        let title = document.createElement("p");
        let priceCont = document.createElement("p");
        let hrOne = document.createElement("hr");
        let hrTwo = document.createElement("hr");
        let descriptionUl = document.createElement("ul");
        let createBTN = document.createElement("button");
        createLi.style = "margin-top: 15px";
        title.className = "ServiceBasicTariph__title";
        title.innerText = arr[i].Package;
        hrOne.className = "HrInTariph";
        hrTwo.className = "HrInTariph";
        priceCont.className = "BasicServicePrice";
        priceCont.innerHTML = arr[i].Price;
        descriptionUl.className = "BasicTariph__description";
        createBTN.className = "BuyTariphNow__Basic";
        createBTN.innerText = arr[i].Button;
        for (let j = 0; j < arr[i].Description.length; j++) {
            let createDescLi = document.createElement("li");
            createDescLi.innerText = arr[i].Description[j];
            descriptionUl.appendChild(createDescLi);
        }
        createLi.appendChild(title);
        createLi.appendChild(hrOne);
        createLi.appendChild(priceCont);
        createLi.appendChild(hrTwo);
        createLi.appendChild(descriptionUl);
        createLi.appendChild(createBTN);
        document.getElementById("Packages").appendChild(createLi); 
    }
}   

function fillContactInfo(arr, ID__Name){
    for (let i = 0; i < arr.length; i++) {
        let createLi = document.createElement("li");
        let createI = document.createElement("i");
        let createA = document.createElement("a");
        createI.className = arr[i].class;
        createA.href = arr[i].link;
        createA.innerText = arr[i].text;
        createLi.appendChild(createI);
        createLi.appendChild(createA);
        document.getElementById(ID__Name).appendChild(createLi);
    }
}



$(document).ready(function(){
    $(".bar").click(function(){
        $(".navbar").animate({
            height: "toggle"
        })
    })
})

//calling functions
FillNavbar(NavBarContent, "Navbar");
FillMarketingContent(MarketingContent, "MarketingContentLi");
OurPriorityLi(OurPriority, "Priority");
packages(ServicePrices);
fillContactInfo(ContactInfo, "contactInfoo");
fillContactInfo(ContactInfoInFooter, "FooterContactInfo");


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

