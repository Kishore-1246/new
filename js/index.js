
// This code is for the search functionality on the home page
document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();

    if (query === 'black shirt') {
        window.location.href = './t-shirt-page1.html'; // Replace with your actual t-shirt page URL
    } else {

        alert('Item not available');
    }
});
//this function changes the image gallary image when clicked
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

// This function shows the content of the selected section
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
function showContent1(sectionId) {
    const sections = document.querySelectorAll('.content1');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}


function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("topnav");
    if (x.style.display === "flex") {
        x.style.display = "none";

    } else {
        x.style.display = "flex";
    }
    if (y.style.display === "flex") {
        y.style.display = "block";

    }


}
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function handleSearchClick() {
    document.querySelector('h1').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.getElementById('card-container').style.display = 'none';
    document.getElementById('message').innerHTML = `
        <h2 style="     color: aliceblue;
    display: contents;
    font-family: sans-serif;
    font-weight: 500;" >Shopping across web</h2>
        <ul style=" list-style-type: none;">
            <li>flipkart.com</li>
            <li>meesho.com</li>
            <li>mensxp.com</li>
            <li>amazon.com</li>
            <li>ajio.com</li>
            <li>nike.ae</li>
        </ul>
    `;
}



function restoreMainContent() {
    // Show the main content
    document.querySelector('h1').style.display = 'block';
    document.querySelector('p').style.display = 'block';
    document.getElementById('card-container').style.display = 'flex';
    
    // Clear the search results
    document.getElementById('message').innerHTML = '';
}

// Event listener for the document to handle clicks outside the search area
document.addEventListener('click', function(event) {
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');
    if (!searchBar.contains(event.target) && !searchButton.contains(event.target)) {
        restoreMainContent();
    }
});

// Event listener for the search button
document.querySelector('.search-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the document click event
    handleSearchClick();
});