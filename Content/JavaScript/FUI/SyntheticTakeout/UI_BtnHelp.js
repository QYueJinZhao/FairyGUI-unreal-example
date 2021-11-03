"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnHelp {
    m_button;
    m_bottom;
    m_icon;
    m_text;
    static URL = "ui://tqsc8htvpip1n";
    static Package = "SyntheticTakeout";
    static Component = "BtnHelp";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnHelp.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnHelp();
        if (component == null) {
            component = UI_BtnHelp.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_bottom = component.GetChild("bottom");
        this.m_icon = component.GetChild("icon");
        this.m_text = component.GetChild("text");
    }
}
exports.default = UI_BtnHelp;
//# sourceMappingURL=UI_BtnHelp.js.map