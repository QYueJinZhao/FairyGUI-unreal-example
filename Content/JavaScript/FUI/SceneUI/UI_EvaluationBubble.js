"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Evaluation_1 = require("./UI_Evaluation");
const fgui = require("ue");
class UI_EvaluationBubble {
    m_Bg;
    m_Evaluation;
    m_t0;
    static URL = "ui://vw08vbbgwajrn";
    static Package = "SceneUI";
    static Component = "EvaluationBubble";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_EvaluationBubble.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_EvaluationBubble();
        if (component == null) {
            component = UI_EvaluationBubble.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Bg = component.GetChild("Bg");
        this.m_Evaluation = UI_Evaluation_1.default.createInstance(component.GetChild("Evaluation"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_EvaluationBubble;
//# sourceMappingURL=UI_EvaluationBubble.js.map