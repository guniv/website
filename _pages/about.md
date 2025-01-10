---
layout: about
title: About
permalink: /
subtitle: Science writer and communicator

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular

news: true # includes a list of news items
social: true # includes social icons at the bottom of the page
display_categories: [featured work]
horizontal: false
---

As a science writer with experience in social media, video production, photography, and graphic design, I am currently working at Pacific Northwest National Laboratory as part of the Large Programs Communications team, where I help with communications strategy and content for the Energy and Environment Directorate.

I was previously an Associate Science Writer at MIT Lincoln Laboratory. In this role, I wrote for the Bulletin, the Laboratory's internal news, about research and events. Lincoln Laboratory is a federally funded research and development center. As a member of the Bulletin's small writing team, I proactively sought out story leads, asked insightful questions, and simplified complex technical language to highlight the work and achievements of Lincoln Laboratory and its people. Additionally, I managed important Bulletin projects, such as a website redesign, and served as the primary point of contact for technical issues.

I also worked with the Global Business Coalition for Education (GBC-Ed), where I helped with social media and other communications content and strategy for this nonprofit. I played a vital role in crafting and scheduling impactful tweets and helped build the "welcome" series of emails, which introduced new subscribers to the company's work and initiatives. My creative content strategy and execution helped drive over 2,000 event registrations and generated over 25,000 social media engagements through a mix of organic and paid content.

In addition, I worked as a science writing intern at Oak Ridge National Laboratory (ORNL), another federally funded research and development center. During my time at ORNL, I helped explain the lab's complicated neutron scattering research to the public by crafting shorter story tips and longer feature pieces. Collaborating closely with a team of communication professionals, I contributed to both directorate-specific and laboratory-wide communication efforts.

Outside of my professional work, I have also volunteered with robotics teams to practice my communications skills. I started by joining a team called the L&N STEMpunks in high school and starting their media program. Later, I returned to mentor students on the team. At the University of Tennessee, I started a team called Big Orange Robotics, where we built a robot in 3 days to serve as an inspiration tool for high school teams. I'm passionate about using robotics as a learning and inspiration tool for K-12 students exploring careers in STEM, so I use my communications skills to help promote these programs.

In 2019, I graduated from the University of Tennessee with a bachelor of science degree in communication, majoring in journalism and electronic media. With my diverse skill set and passion for communicating about science and technology, I am well-equipped to excel in a variety of roles in the fields of science writing, social media, and communications.

---
<!-- Testimonial Carousel -->
<div id="testimonial-carousel" class="carousel rounded-lg shadow-md">
  <button id="prev-arrow" class="carousel-arrow">←</button>
  <div class="carousel-content"></div>
  <button id="next-arrow" class="carousel-arrow">→</button>
</div>

<!-- Inline Testimonials -->
<script>
  const testimonials = [
    { "quote": "This is an amazing testimonial!", "author": "John Doe" },
    { "quote": "I love this feature!", "author": "Jane Smith" },
    { "quote": "Highly recommend it to everyone!", "author": "Sam Wilson" }
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
    const carouselContent = document.querySelector(".carousel-content");
    let currentIndex = 0;
    let autoScroll;

    // Populate the carousel with testimonials
    function loadTestimonials() {
      testimonials.forEach((testimonial, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active"); // Make the first item visible
        }
        item.innerHTML = `
          <blockquote class="quote">"${testimonial.quote}"</blockquote>
          <cite class="author">- ${testimonial.author}</cite>
        `;
        carouselContent.appendChild(item);
      });
      startAutoScroll(); // Begin auto-scrolling
    }

    // Show a specific testimonial by index
    function showTestimonial(index) {
      const items = document.querySelectorAll(".carousel-item");
      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }

    // Change slide based on direction
    function changeSlide(direction) {
      currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }

    // Automatic scrolling
    function startAutoScroll() {
      autoScroll = setInterval(() => {
        changeSlide(1); // Move to the next slide
      }, 6000);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    // Event listeners for arrows
    prevArrow.addEventListener("click", () => {
      stopAutoScroll();
      changeSlide(-1);
      startAutoScroll();
    });

    nextArrow.addEventListener("click", () => {
      stopAutoScroll();
      changeSlide(1);
      startAutoScroll();
    });

    loadTestimonials(); // Load testimonials on page load
  });
</script>

<!-- Testimonial Carousel CSS -->
<style>
  #testimonial-carousel {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 40px auto;
    overflow: hidden;
    text-align: center;
    font-family: var(--global-font-family);
    background-color: var(--global-background-color);
    border-radius: var(--global-border-radius, 8px);
    box-shadow: var(--global-box-shadow);
  }

  .carousel-content {
    position: relative;
    padding: 20px;
  }

  .carousel-item {
    display: none;
    opacity: 0;
    transition: opacity 0.5s var(--global-transition-ease, ease-in-out);
  }

  .carousel-item.active {
    display: block;
    opacity: 1;
  }

  #testimonial-carousel blockquote {
    background: none; /* Remove background */
    border: none; /* Remove left border */
    margin: 0; /* Reset margins */
    padding: 0; /* Reset padding */
    font-size: inherit; /* Match carousel typography */
    line-height: 1.6;
    color: var(--global-text-color); /* Use theme's lighter text color */
  }

  #testimonial-carousel blockquote p {
    margin-bottom: 0; /* Reset paragraph margins */
  }

  #testimonial-carousel blockquote cite {
    display: block;
    margin-top: 15px;
    font-size: 1.1em;
    font-weight: bold;
    color: var(--global-theme-color); /* Match theme colors */
  }

  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    color: var(--global-theme-color);
    transition: color 0.3s ease;
  }

  .carousel-arrow:hover {
    color: var(--global-theme-color-dark);
  }

  #prev-arrow {
    left: 10px;
  }

  #next-arrow {
    right: 10px;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    #testimonial-carousel {
      max-width: 100%;
    }

    .carousel-item blockquote {
      font-size: 1.2em;
    }
  }

</style>


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
