
const navbarContent = `
<nav class="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg">

    <div class="container mx-auto flex justify-between items-center p-4">
        <div class="text-2xl font-bold">Portfolio</div>
        <button id="toggle-button" class="md:hidden focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        <div id="nav-links" class="hidden md:flex space-x-4">
            <a href="index.html" class="text-xl  hover:text-blue-500">Home</a>
            <a href="about.html" class="text-xl hover:text-blue-500">About</a>
            <a href="skills.html" class="text-xl hover:text-blue-500">Skills</a>
            <a href="experience.html" class="text-xl hover:text-blue-500">Experience</a>
            <a href="projects.html" class="text-xl hover:text-blue-500">Projects</a>
            <a href="contact.html" class="text-xl hover:text-blue-500">Contact</a>
        </div>
    </div>
    <div id="mobile-nav" class="hidden md:hidden flex flex-col space-y-2 p-4">
        <a href="index.html" class="text-xl hover:text-blue-500">Home</a>
        <a href="about.html" class="text-xl hover:text-blue-500">About</a>
        <a href="skills.html" class="text-xl hover:text-blue-500">Skills</a>
        <a href="experience.html" class="text-xl hover:text-blue-500">Experience</a>
        <a href="projects.html" class="text-xl hover:text-blue-500">Projects</a>
        <a href="contact.html" class="text-xl hover:text-blue-500">Contact</a>
    </div>
</nav>
`;

document.getElementById("navbar").innerHTML = navbarContent;

document.getElementById("toggle-button").addEventListener("click", function() {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("hidden");
});
