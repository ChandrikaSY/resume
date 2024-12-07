<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="resume.html">Resume</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>About Me</h2>
            <p>This is the bio-data section where you can write about yourself.</p>
        </section>
    </main>
    <footer>
        <p>© 2024 This block is made by Devotham H.K</p>
    </footer>
</body>
</html>

$(document).ready(function() {
    // Example: Highlight current page link in navigation
    $('nav ul li a').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });
});

