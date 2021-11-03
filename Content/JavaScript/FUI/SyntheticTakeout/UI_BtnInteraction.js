"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnInteraction {
    m_button;
    m_Interaction;
    static URL = "ui://tqsc8htvpip18";
    static Package = "SyntheticTakeout";
    static Component = "BtnInteraction";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnInteraction.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnInteraction();
        if (component == null) {
            component = UI_BtnInteraction.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Interaction = component.GetChild("Interaction");
    }
}
exports.default = UI_BtnInteraction;
//# sourceMappingURL=UI_BtnInteraction.js.map