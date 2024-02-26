import "./base.scss";

const $mobileNavOpener = document.querySelector("#mobile-nav-opener");
const $mobileNavCloser = document.querySelector("#mobile-nav-closer");
const $mobileNavContainer = document.querySelector("header > .container > div");
const $nextButton = document.querySelector("#next-btn");
const $previousButtin = document.querySelector("#previous-btn");
const $lis = document.querySelectorAll("#images-list > li");
const $articles = document.querySelectorAll("#features > article");
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

let $currentIndex = 1;

$nextButton.addEventListener("click", (e) => {
    $currentIndex++;
    $change();
});

$previousButtin.addEventListener("click", (e) => {
    $currentIndex--;
    $change();
});

function $change() {
    if ($currentIndex < 1) {
        $currentIndex = $lis.length;
    }
    if ($currentIndex > $lis.length) {
        $currentIndex = 1;
    }

    $lis.forEach(($li) => {
        console.log($currentIndex);
        $lis.forEach((li) => li.classList.remove("active"));
        $articles.forEach(($article) => $article.classList.remove("active"));
        $lis[$currentIndex - 1].classList.add("active");
        $articles[$currentIndex - 1].classList.add("active");
    });
}
