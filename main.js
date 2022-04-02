canvas = new fabric.Canvas("myCanvas");
px = 20;
py = 20;
bh = 30;
bw = 30;
p_obj = "";
b_obj = "";
function playerupdate()
{
    fabric.Image.fromURL('player.png',function(Img){
        p_obj = Img;
        p_obj.scaleToWidth(150);
        p_obj.scaleToHeight(140);
        p_obj.set({
            top:py,
            left:px
        });
    canvas.add(p_obj);
    });
}
function blockupdate(blockimg)
{
    fabric.Image.fromURL(blockimg,function(Img){
        b_obj = Img;
        b_obj.scaleToWidth(bw);
        b_obj.scaleToHeight(bh);
        b_obj.set({
            top:py,
            left:px
        });
    canvas.add(b_obj);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    kp = e.keyCode;
    console.log(kp);
    if (kp == "67") {
        blockupdate("cloud.jpg")
    } else if(kp == "68")
    {
        blockupdate("dark_green.png")
    } else if(kp == "71")
    {
        blockupdate("ground.png")
    } else if(kp == "76")
    {
        blockupdate("light_green.png")
    } else if(kp == "82")
    {
        blockupdate("roof.jpg")
    } else if (kp == "84")
    {
        blockupdate("trunk.jpg")
    } else if(kp == "85")
    {
        blockupdate("unique.png")
    } else if (kp == "87")
    {
        blockupdate("wall.jpg")
    } else if (kp == "89")
    {
        blockupdate("yellow_wall.png")
    } else if (kp == "38")
    {
        up();
    } else if (kp == "39")
    {
        right();
    } else if (kp == "40")
    {
        down();
    } else if (kp == "37")
    {
        left();
    } else if (e.shiftKey == true && kp == "80")
    {
        bh = bh + 10;
        bw = bw + 10;
        document.getElementById("wi").innerHTML = bw;
        document.getElementById("hi").innerHTML = bh;
    } else if (e.shiftKey == true && kp == "77")
    {
        bh = bh - 10;
        bw = bw - 10;
        document.getElementById("wi").innerHTML = bw;
        document.getElementById("hi").innerHTML = bh;    
    }
}
function up()
{
    if(py >= 0)
    {
        py = py - bh;
        canvas.remove(p_obj);
        playerupdate();
    }
}
function down()
{
    if(py <= 530)
    {
        py = py + bh;
        canvas.remove(p_obj)
        playerupdate();
    }
}
function right()
{
    if(px <= 1170)
    {
        px = px + bw;
        canvas.remove(p_obj);
        playerupdate();
    }
}
function left()
{
    if (px >= 0) {
        px = px - bw;
        canvas.remove(p_obj);
        playerupdate();
    }
}