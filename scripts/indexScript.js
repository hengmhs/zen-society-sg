const toggleLinks = () => {
  let navbar = document.getElementById("topnavbar");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
};

const createHeader = () => {
  const customHeader = document.getElementById("custom-header");
  customHeader.innerHTML = `
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Inter"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/style.css" />
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>Zen Society Singapore</title>
  </head>
`;
};

window.onload = (event) => {
  createHeader();
};
