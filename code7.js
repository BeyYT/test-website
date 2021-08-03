gdjs.test_32vcCode = {};

gdjs.test_32vcCode.conditionTrue_0 = {val:false};
gdjs.test_32vcCode.condition0IsTrue_0 = {val:false};
gdjs.test_32vcCode.condition1IsTrue_0 = {val:false};
gdjs.test_32vcCode.conditionTrue_1 = {val:false};
gdjs.test_32vcCode.condition0IsTrue_1 = {val:false};
gdjs.test_32vcCode.condition1IsTrue_1 = {val:false};


gdjs.test_32vcCode.eventsList0 = function(runtimeScene) {

{


gdjs.test_32vcCode.condition0IsTrue_0.val = false;
{
{gdjs.test_32vcCode.conditionTrue_1 = gdjs.test_32vcCode.condition0IsTrue_0;
gdjs.test_32vcCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8277476);
}
}if (gdjs.test_32vcCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://localhost:3000/home", runtimeScene);
}}

}


};

gdjs.test_32vcCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.test_32vcCode.eventsList0(runtimeScene);
return;

}

gdjs['test_32vcCode'] = gdjs.test_32vcCode;
