document.addEventListener("DOMContentLoaded", function () {

    var courses = [
        {
            imgSrc: "images/ios.jpg",
            altText: "iosCourse",
            title: "iOS Development1",
            description: "რეგისტრაცია გაიხსნება 24 ივნისს",
            link: "#"
        },
        {
            imgSrc:"images/react.jpg",
            altText: "reactCourse",
            title: "React",
            description: "რეგისტრაცია გაიხსნება 24 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/python.jpg",
            altText: "pythonCourse",
            title: "Intro to Python",
            description: "რეგისტრაცია გაიხსნება 24 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/advpython.jpg",
            altText: "advPythonCourse",
            title: "Advanced Python",
            description: "რეგისტრაცია გაიხსნება 24 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/cyber.jpg",
            altText: "cybersecurityCourse",
            title: "Advanced Cybersecurity Course",
            description: "რეგისტრაცია გაიხსნება 10 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/blockch.jpg",
            altText: "blockchainCourse",
            title: "Blockchain",
            description: "რეგისტრაცია გაიხსნება 10 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/devops.jpg",
            altText: "devopsCourse",
            title: "DevOps",
            description: "რეგისტრაცია გაიხსნება 10 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/infsec.jpg",
            altText: "infSecurityCourse",
            title: "Information Security Governance",
            description: "რეგისტრაცია გაიხსნება 10 ივნისს",
            link: "#"
        },
        {
            imgSrc: "images/tot.jpg",
            altText: "totCourse",
            title: "ToT - Training of Trainers",
            description: "რეგისტრაცია დასრულებულია",
            link: "#"
        }
    ]


    //course section start 
    const container = document.getElementById('courses-container');

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'box1Content';

        courseElement.innerHTML = `
            <img src="${course.imgSrc}" alt="${course.altText}">
            <div class="box1Text">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="aboutCour">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666"
                        xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16"
                        width="17" data-type="color" role="presentation" aria-hidden="true">
                        <defs>
                            <style>
                                #comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color="1"] {
                                    fill: #00AEEF;
                                }
                            </style>
                        </defs>
                        <g>
                            <path fill="red"
                                d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"
                                data-color="1"></path>
                        </g>
                    </svg>
                    <a href="${course.link}">კურსის დეტალები</a>
                </div>
            </div>
        `;

        container.appendChild(courseElement);
    });

     //course section end
     const slidesData = [
        {
            title: "პროექტის პარტნიორები",
            images: ["usaid.png", "space.png", "tnet.png"]
        },
        {
            title: "პროექტის პარტნიორები",
            images: ["tegeta.png", "spectre.png", "tbcliz.png"]
        },
        {
            title: "პროექტის პარტნიორები",
            images: ["ufc.png"]
        }
    ];

    const slideshowContainer = document.querySelector('.slideshow-container');
    const dotContainer = document.querySelector('.dot-container');

    slidesData.forEach((slide, index) => {
        // Create slide element
        const slideElement = document.createElement('div');
        slideElement.className = 'mySlides slidesbox';

        // Determine if it should be centered
        const imagesHtml = slide.images.map(img => `<img src="${img}" alt="sliderImage">`).join('');

        slideElement.innerHTML = `
            <div class="sliderbox">
                <h3>${slide.title}</h3>
                <div class="slider sliderImg" style="justify-content: ${slide.images.length === 1 ? 'center' : 'space-between'};">
                    ${imagesHtml}
                </div>
            </div>
        `;
        slideshowContainer.appendChild(slideElement);

        // Create dot element
        const dotElement = document.createElement('span');
        dotElement.className = 'dot';
        dotElement.setAttribute('onclick', `currentSlide(${index + 1})`);
        dotContainer.appendChild(dotElement);
    });

    // Initialize the slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }

    // Attach event listeners for next/prev controls
    document.querySelector('.prev').addEventListener('click', function () {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        plusSlides(1);
    });

    // Attach event listeners for dot controls
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            currentSlide(index + 1);
        });
    });


});