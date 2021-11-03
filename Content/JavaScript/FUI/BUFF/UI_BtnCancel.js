"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnCancel {
    m_button;
    m_n0;
    static URL = "ui://tm2lcvzyjdb71y";
    static Package = "BUFF";
    static Component = "BtnCancel";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnCancel.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnCancel();
        if (component == null) {
            component = UI_BtnCancel.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = component.GetChild("n0");
    }
}
exports.default = UI_BtnCancel;
//# sourceMappingURL=UI_BtnCancel.js.map