const createHeader = () => {
  const customHeader = document.getElementById("custom-header");
  console.log("customHeader: ", customHeader);
  customHeader.innerHTML = `
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Inter"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../css/style.css" />
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>Zen Society Singapore</title>
  </head>
`;
};

const createNavBar = () => {
  const navbar = document.getElementById("topnavbar");
  navbar.innerHTML = `
  <div class="topnav-title active">
    <a href="../index.html" class="topnav-logo-link">
    <img src="../img/white-enso.png" id="zen-logo" />
    <div>Zen Society of Singapore</div></a>
    </div>
          <a href="./about.html">About Us</a>
          <a href="./lineage.html">Lineage</a>
          <a href="./faq.html">FAQ</a>
          <a href="./notice.html">Notice Board</a>
          <a href="./procedures.html">Zendo Procedures</a>
          <a href="./teachings.html">Teachings</a>
          <a href="./teachers.html">Teachers</a>
          <a href="./members.html">Member's Section</a>
          <a href="./contact.html">Contact Us</a>
          <a href="javascript:void(0);" class="icon" onclick="toggleLinks()">
            <i class="fa fa-bars"></i>
          </a>
  `;
};

const toggleLinks = () => {
  let navbar = document.getElementById("topnavbar");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
};

window.onload = (event) => {
  createHeader();
  createNavBar();
};
