"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Mask {
    m_n10;
    static URL = "ui://bk2v2a36ivrz0";
    static Package = "BuiltInTheCompany";
    static Component = "Mask";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Mask.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Mask();
        if (component == null) {
            component = UI_Mask.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n10 = component.GetChild("n10");
    }
}
exports.default = UI_Mask;
//# sourceMappingURL=UI_Mask.js.map