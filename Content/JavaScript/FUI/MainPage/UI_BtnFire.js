"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnFire {
    m_button;
    m_BG;
    m_Text;
    static URL = "ui://sn18zihk90iz15";
    static Package = "MainPage";
    static Component = "BtnFire";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnFire.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnFire();
        if (component == null) {
            component = UI_BtnFire.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BG = component.GetChild("BG");
        this.m_Text = component.GetChild("Text");
    }
}
exports.default = UI_BtnFire;
//# sourceMappingURL=UI_BtnFire.js.map