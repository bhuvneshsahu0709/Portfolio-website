$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }
  });
});

document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Projects | Portfolio Jigar Sable";
          $("#favicon").attr("href", "assets/images/favicon.png");
      }
      else {
          document.title = "Come Back To Portfolio";
          $("#favicon").attr("href", "assets/images/favhand.png");
      }
  });

// ================= Projects Data =================
const projects = [
{
  name: "MockMate",
  desc: "An AI-powered mock interview simulator with customizable interview scenarios, real-time feedback, and detailed performance analytics.",
  category: "ai",
  links: {
    view: "https://mockmate-ai-raj510.vercel.app/",
    code: "https://github.com/bhuvneshsahu0709/MockMate-AI"
  }
},
{
  name: "ShoeKart",
  desc: "An e-commerce platform for buying shoes, built on the MERN stack with a user-friendly shopping interface and an admin panel for managing products, orders, and users.",
  category: "mern",
  links: {
    view: "https://shoekart197.vercel.app/",
    code: "https://github.com/bhuvneshsahu0709/Shoekart-E-commerce"
  }
},
{
  name: "Pathfinding Visualizer",
  desc: "An interactive visualizer for understanding pathfinding algorithms like Dijkstra, BFS, and DFS. Users can set start/end points, create walls, and see how each algorithm explores the grid step by step.",
  category: "dsa",
  links: {
    view: "https://avdhesh11.github.io/pathfinding-visualizer/",
    code: "https://github.com/bhuvneshsahu0709/Pathfinding-Visualizer-DSA"
  }
}
];

// ================= Show Projects =================
function showProjects(projects) {
  let projectsContainer = document.querySelector(".work .box-container");
  let projectsHTML = "";
  projects.forEach(project => {
      projectsHTML += `
      <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
  projectsContainer.innerHTML = projectsHTML;

  // isotope filter products
  var $grid = $('.box-container').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      masonry: {
          columnWidth: 200
      }
  });

  // filter items on button click
  $('.button-group').on('click', 'button', function () {
      $('.button-group').find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
}

// Call directly (no fetch)
showProjects(projects);

// ================= Tawk.to Live Chat =================
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// ================= Disable Developer Tools =================
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}
