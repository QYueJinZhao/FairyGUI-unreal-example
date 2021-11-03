"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Evaluation {
    m_HeadPortrait;
    m_Take_outFood;
    m_Star_5;
    m_Star_4;
    m_Star_3;
    m_Star_2;
    m_Star_1;
    m_t0;
    static URL = "ui://vw08vbbgdkz6s";
    static Package = "SceneUI";
    static Component = "Evaluation";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Evaluation.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Evaluation();
        if (component == null) {
            component = UI_Evaluation.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_HeadPortrait = component.GetChild("HeadPortrait");
        this.m_Take_outFood = component.GetChild("Take-outFood");
        this.m_Star_5 = component.GetChild("Star_5");
        this.m_Star_4 = component.GetChild("Star_4");
        this.m_Star_3 = component.GetChild("Star_3");
        this.m_Star_2 = component.GetChild("Star_2");
        this.m_Star_1 = component.GetChild("Star_1");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Evaluation;
//# sourceMappingURL=UI_Evaluation.js.map