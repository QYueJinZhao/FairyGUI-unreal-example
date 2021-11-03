"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnComplete {
    m_button;
    m_BtnBg;
    m_Complete;
    static URL = "ui://tqsc8htvpip1q";
    static Package = "SyntheticTakeout";
    static Component = "BtnComplete";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnComplete.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnComplete();
        if (component == null) {
            component = UI_BtnComplete.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnBg = component.GetChild("BtnBg");
        this.m_Complete = component.GetChild("Complete");
    }
}
exports.default = UI_BtnComplete;
//# sourceMappingURL=UI_BtnComplete.js.map