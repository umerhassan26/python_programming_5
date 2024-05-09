// Create a header element
const header = document.createElement("header");
const headerText = document.createTextNode("Welecome to my website");
header.append(headerText);
document.body.prepend(header);

// Create navigation 
const nav = document.createElement("nav");
const navlist =document.createElement("ul");
const navitems = ["Home" ,"About", "Contact"];
navitems.forEach (item => {
    const ListItem = document.createElement("li");;
    const listitemText = document.createTextNode(item);
    ListItem.append(listitemText);
    navlist.append(ListItem);
});
nav.append(navlist);
document.body.prepend(nav); // show 

// Create  main content

const main = document.createElement("main");
document.body.append(main);

//Create Sections
const sections = ["Section 1", "Section 2", "Section 3"];
sections.forEach (section =>{
    const sectionElement = document.createElement("section");
    const sectionText = document.createTextNode(section);
    sectionElement.append(sectionText);
    main.append(sectionElement);
} );

// Create a footer element
const footer = document.createElement("footer");
const footerText = document.createTextNode("Copyrights 2024 My Website");
footer.append(footerText);
document.body.append(footer);