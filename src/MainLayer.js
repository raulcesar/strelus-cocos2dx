/**
 * Created by raul on 19/05/14.
 */

var HelloworldLayer = cc.LayerColor.extend({
  isMouseDown:false,
  helloImg:null,
  helloLabel:null,
  circle:null,
  player:null,

  init:function () {
    //////////////////////////////
    // 1. super init first
    this._super();
    cc.LayerColor.prototype.init.call( this, new cc.c4b(255,255,255,255) );

    /////////////////////////////
    // 2. add a menu item with "X" image, which is clicked to quit the program
    //    you may modify it.
    // ask director the window size
    var size = cc.Director.getInstance().getWinSize();

    // add a "close" icon to exit the progress. it's an autorelease object
//    var closeItem = cc.MenuItemImage.create(
//      closeNormal,
//      closeSelected,
//      function () {
//        history.go(-1);
//      },this);
//    closeItem.setAnchorPoint(0.5, 0.5);
//
//    var menu = cc.Menu.create(closeItem);
//    menu.setPosition(0,0);
//    this.addChild(menu, 1);
//    closeItem.setPosition(size.width - 20, 20);

    /////////////////////////////
    // 3. add your codes below...
    // add a label shows "Hello World"
    // create and initialize a label
//    this.helloLabel = cc.LabelTTF.create("Hello World", "Arial", 38);
//    // position the label on the center of the screen
//    this.helloLabel.setPosition(size.width / 2, 0);
//    // add the label as a child to this layer
//    this.addChild(this.helloLabel, 5);

    var lazyLayer = cc.Layer.create();
    this.addChild(lazyLayer);

    // add "HelloWorld" splash screen"
    this.player = cc.Sprite.create(shipImage);

    this.player.setPosition(size.width / 2, size.height / 2);

    lazyLayer.addChild(this.player);

    var rotateToA = cc.RotateTo.create(2, 180);

    var scaleToA = cc.ScaleTo.create(2,.5,.5);

    this.player.runAction(cc.Sequence.create(rotateToA, scaleToA));
//    this.player.runAction(rotateToB);
//    this.helloLabel.runAction(cc.Spawn.create(cc.MoveBy.create(2.5, cc.p(0, size.height - 40)),cc.TintTo.create(2.5,255,125,0)));

    this.setTouchEnabled(true);
    return true;
  },
  // a selector callback
  menuCloseCallback:function (sender) {
    cc.Director.getInstance().end();
  },
  onTouchesBegan:function (touches, event) {
    this.isMouseDown = true;
  },
  onTouchesMoved:function (touches, event) {
    if (this.isMouseDown) {
      if (touches) {
        //this.circle.setPosition(touches[0].getLocation().x, touches[0].getLocation().y);
      }
    }
  },
  onTouchesEnded:function (touches, event) {
    this.isMouseDown = false;
  },
  onTouchesCancelled:function (touches, event) {
    console.log("onTouchesCancelled");
  }
});

var HelloWorldScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    var layer = new HelloworldLayer();

    if (layer && layer.init()) {
      this.addChild(layer);
    }


  }
});

