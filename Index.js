let height = Math.floor((document.querySelector('header').clientHeight)*0.9 + (document.getElementsByClassName('Starlink')[0].clientHeight)*0.1);
let payload = document.getElementById("Payload");
let numbers = document.getElementsByClassName("Number");
speed =100;
let bus = document.getElementById('Bus');
function LiftRocket(){
    payload.classList.add("Lift");
}
function Count(){
    for(const number of numbers){
        const Update = () => {
            let n = +number.getAttribute('data-target');
            let c = +number.innerHTML;
            const i = n/speed;
            if(c<n){
                number.innerHTML = Math.ceil(c+i);
                setTimeout(Update,1);
            }
            else number.innerHTML = n;
        }
        Update();
    }
}
window.addEventListener('scroll', ()=>{
    if (window.scrollY >= height) {
        LiftRocket();
    }
    if (window.scrollY >= height*2) {
        Count();
    }
});
