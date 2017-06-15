var game = new Phaser.Game(320,480,Phaser.AUTO,'game',{
  preload:preload,
  create:create,
  update:update
});
var graphics;
function preload(){

}
function create(){
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  graphics = game.add.graphics(0,0);
  game.input.onDown.add(function(){
    //指针向下按时
    graphics.beginFill(0xffffff);//设置填充样式
    draw();
    game.input.addMoveCallback(draw);//添加指针移动回调函数
  });
  game.input.onUp.add(function(){
    game.input.deleteMoveCallback(draw);
  })
}
function update(){

}
function draw(){
  var pointer = game.input.activePointer;
  graphics.drawCircle(pointer.x,pointer.y,20);
}
