---
layout: about
title: About
permalink: /
subtitle: Welcome to my website!

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular

news: true # includes a list of news items
social: true # includes social icons at the bottom of the page
display_categories: [featured work]
horizontal: false
---

As a science writer and communicator, my goal is to tell stories and explain complicated topics no matter how difficult the concept can be to understand. 

My past work at Pacific Northwest National Laboratory, MIT Lincoln Laboratory, and Oak Ridge National Laboratory involved working closely with engineers and scientists to make sure that stakeholders and policymakers understood the complicated work done at these federally funded research and development centers. 

I also have experience in content strategy, project management, technical writing, social media, videography, photography, web development, and more. You can reach out to me on [LinkedIn](https://www.linkedin.com/in/guniv) if you're interested in working with me or have a role in mind for me. I look forward to hearing from you!

<div class="projects">
  <a id="testimonials" href="#testimonials">
    <h2 class="category">Testimonials</h2>
  </a>
</div>
<!-- Testimonial Carousel -->
<div id="testimonial-carousel" class="carousel">
  <div class="carousel-content"></div>
</div>
<div id="testimonial-arrows" class="carousel">
  <div class="carousel-arrows">
    <button id="prev-arrow" class="carousel-arrow">←</button>
    <button id="next-arrow" class="carousel-arrow">→</button>
  </div>
</div>

<!-- Inline Testimonials -->
<script>
  const testimonials = [
    { "quote": "Josh did a wonderful job at getting me up to speed… he kept track of all of our stories and was good at leading the team.", "author": "Riley Brunner, Video Content Producer, Jumo Health" },
    { "quote": "Josh [brought] critical technical abilities to our digital work, frequently suggesting ways to do our work more effectively or efficiently.", "author": "Jamie Lonie, Digital Media Marketing Specialist, Global Business Coalition for Education" },
    { "quote": "[Josh] hit the ground running and was able to help us create successful new social media content and campaigns from the get go.", "author": "Francois Servranckx, Environmental, Social and Governance (ESG) Communcications Lead, Guardian Life" },
    { "quote": "A valuable contributor to the team and a talented writer.", "author": "Wendy Hames, Senior Technical Editor, Oak Ridge National Laboratory" },
    { "quote": "Josh has an excellent ability to devise a vision for a team and then develop an action plan to see that vision enacted.", "author": "Rachel Ellestad, Associate Dean for Student Success, University of Minnesota Duluth" },
    { "quote": "Anyone looking for a dedicated and experienced writer would do well to consider Josh.", "author": "Paul Boisvert, Senior Science Writer, Oak Ridge National Laboratory" },
    { "quote": "Any organization Josh leads I'm confident will have great internal communication and delegation.", "author": "Ben Klein, Director of Engineering, Swiftly" },
    { "quote": "Josh is highly organized, dedicated, business-minded, and exceptionally tech-savvy.", "author": "Randy Brown, Senior Software Developer, Agilaire" }
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
    margin: 10px auto;
    overflow: hidden;
    text-align: center;
    font-family: var(--global-font-family);
    background-color: var(--global-background-color);
    border-radius: var(--global-border-radius, 8px);
    box-shadow: var(--global-box-shadow);
  }

  #testimonial-arrows {
    position: relative;
    width: 100%;
    overflow: hidden; /* Contain content */
    text-align: center;
    font-family: var(--global-font-family);
    background-color: var(--global-background-color);
    border-radius: var(--global-border-radius, 8px);
    box-shadow: var(--global-box-shadow);
  }

  .carousel-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .carousel-item {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: opacity 0.5s var(--global-transition-ease, ease-in-out);
  }
  .carousel-item.active {
    position: relative; /* Let the active one affect layout */
    display: block;
    opacity: 1;
}

  .carousel-item blockquote {
    background: none;
    border: none;
    font-weight: bold;
    font-size: inherit;
    line-height: 1.6;
    color: var(--global-text-color-light);
    margin: 0 0 10px;
    padding: 0;
  }

  .carousel-item cite {
    display: block;
    margin-top: 0px;
    font-size: 1.1em;
    font-weight: bold;
    color: var(--global-theme-color);
  }

  .carousel-arrows {
    display: flex;
    justify-content: center;
    gap: 20px; /* Space between the arrows */
  }

  .carousel-arrow {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--global-theme-color);
    transition: color 0.3s ease;
  }

  .carousel-arrow:hover {
    color: var(--global-theme-color-dark);
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    #testimonial-carousel {
      max-width: 100%;
    }

    .carousel-arrow {
      font-size: 1.5rem;
    }

    .carousel-arrows {
      gap: 10px;
    }
  }

</style>

<!-- Featured Projects Section -->
<div class="projects">
  <a id="featured-projects" href="#featured-projects">
    <h2 class="category">Featured Projects</h2>
  </a>

  {% assign featured_projects = site.portfolio | where: "featured", true %}
  {% assign sorted_projects = featured_projects | sort: "date" | reverse %}

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
</div>
