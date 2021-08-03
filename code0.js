gdjs.main_32menuCode = {};
gdjs.main_32menuCode.GDNewObjectObjects1= [];
gdjs.main_32menuCode.GDNewObjectObjects2= [];
gdjs.main_32menuCode.GDNewObject2Objects1= [];
gdjs.main_32menuCode.GDNewObject2Objects2= [];
gdjs.main_32menuCode.GDNewObject3Objects1= [];
gdjs.main_32menuCode.GDNewObject3Objects2= [];
gdjs.main_32menuCode.GDNewObject4Objects1= [];
gdjs.main_32menuCode.GDNewObject4Objects2= [];
gdjs.main_32menuCode.GDGearButtonObjects1= [];
gdjs.main_32menuCode.GDGearButtonObjects2= [];

gdjs.main_32menuCode.conditionTrue_0 = {val:false};
gdjs.main_32menuCode.condition0IsTrue_0 = {val:false};
gdjs.main_32menuCode.condition1IsTrue_0 = {val:false};
gdjs.main_32menuCode.condition2IsTrue_0 = {val:false};


gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDGearButtonObjects1Objects = Hashtable.newFrom({"GearButton": gdjs.main_32menuCode.GDGearButtonObjects1});gdjs.main_32menuCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.main_32menuCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.main_32menuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.main_32menuCode.GDNewObjectObjects1[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{


gdjs.main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.main_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useCustomBrokerServer("localhost", "4000", "/myapp", "peerjs", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GearButton"), gdjs.main_32menuCode.GDGearButtonObjects1);

gdjs.main_32menuCode.condition0IsTrue_0.val = false;
gdjs.main_32menuCode.condition1IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDGearButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.main_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.main_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.main_32menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "settings");
}}

}


};

gdjs.main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_32menuCode.GDNewObjectObjects1.length = 0;
gdjs.main_32menuCode.GDNewObjectObjects2.length = 0;
gdjs.main_32menuCode.GDNewObject2Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject2Objects2.length = 0;
gdjs.main_32menuCode.GDNewObject3Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject3Objects2.length = 0;
gdjs.main_32menuCode.GDNewObject4Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject4Objects2.length = 0;
gdjs.main_32menuCode.GDGearButtonObjects1.length = 0;
gdjs.main_32menuCode.GDGearButtonObjects2.length = 0;

gdjs.main_32menuCode.eventsList0(runtimeScene);
return;

}

gdjs['main_32menuCode'] = gdjs.main_32menuCode;
