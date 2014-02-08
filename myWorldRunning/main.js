/**
 * Created by youxiachai on 14-2-7.
 */
var cocos2dApp = cc.Application.extend({
    // 加载配置信息
    config:document['ccConfig'],
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
        cc.initDebugSetting();
        cc.setup(this.config['tag']);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    },
    applicationDidFinishLaunching:function () {
        //注意 director 的使用
        var director = cc.Director.getInstance();
        director.setDisplayStats(this.config['showFPS']);
        director.setAnimationInterval(1.0 / this.config['frameRate']);

        // 定义搜索资源的目录

        cc.FileUtils.getInstance().setSearchPaths([].concat("res"));

        cc.LoaderScene.preload(g_resources, function () {
            director.replaceScene(new this.startScene());
        }, this);


        return true;
    }
});

// 我们的世界就出来了!
var myApp = new cocos2dApp(DynamicWorldScence);