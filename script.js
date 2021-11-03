var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code

btn.innerHTML = 'button is off';
document.body.style.backgroundColor = "black";
var flip = false;

btn.onclick = function(){
    if (flip == false){
        btn.innerHTML = 'button is on';
        document.body.style.backgroundColor = "yellow";
        console.log("button is on");
        flip = true;}
    else {
        btn.innerHTML = 'button is off';
        document.body.style.backgroundColor = "black";
        console.log("button is off");
        flip = false;}
};

// schijf hier tussen je code