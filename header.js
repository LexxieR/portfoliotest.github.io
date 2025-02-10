window.onload = function () {
    document.getElementById("header").innerHTML = `
        <header>
            <nav class="languages">
                <ul>
                    <li><a href="#" onclick="setLanguage('en')">English</a></li>
                    <li><a href="#" onclick="setLanguage('fr')">Français</a></li>
                </ul>
            </nav>
            <h1 data-translate="title">Welcome to My Website!</h1>
            <nav class="menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li>
                        <a href="#">Services</a>
                        <ul class="dropdown">
                            <li><a href="web-dev.html">Web Development</a></li>
                            <li><a href="seo.html">SEO</a></li>
                            <li><a href="marketing.html">Marketing</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
};
