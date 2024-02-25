import "./base.scss";

const $mobileNavOpener = document.querySelector("#mobile-nav-opener");
const $mobileNavCloser = document.querySelector("#mobile-nav-closer");
const $mobileNavContainer = document.querySelector("header > .container > div");

$mobileNavOpener.addEventListener("click", (e) => {
    $openNav(true);
    e.stopPropagation();
});
$mobileNavCloser.addEventListener("click", (e) => {
    $openNav(false);
});

function $openNav($state) {
    $mobileNavContainer.classList.toggle("active", $state);
    document.body.style.overflow = "auto";
    if ($state) {
        document.body.style.overflow = "hidden";
    }
}

$mobileNavContainer.querySelector("nav").addEventListener("click", (e) => {
    e.stopPropagation();
});

window.addEventListener("click", (e) => {
    $openNav(false);
});
