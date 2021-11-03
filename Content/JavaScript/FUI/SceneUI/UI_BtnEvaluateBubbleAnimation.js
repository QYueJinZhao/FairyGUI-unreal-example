"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_EvaluationBubble_1 = require("./UI_EvaluationBubble");
const fgui = require("ue");
class UI_BtnEvaluateBubbleAnimation {
    m_button;
    m_n0;
    static URL = "ui://vw08vbbgdkz6t";
    static Package = "SceneUI";
    static Component = "BtnEvaluateBubbleAnimation";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnEvaluateBubbleAnimation.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnEvaluateBubbleAnimation();
        if (component == null) {
            component = UI_BtnEvaluateBubbleAnimation.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = UI_EvaluationBubble_1.default.createInstance(component.GetChild("n0"), WorldContextObject);
    }
}
exports.default = UI_BtnEvaluateBubbleAnimation;
//# sourceMappingURL=UI_BtnEvaluateBubbleAnimation.js.map