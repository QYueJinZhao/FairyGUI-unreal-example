"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Details {
    m_button;
    m_n0;
    static URL = "ui://p6ocxgya9526s";
    static Package = "Top";
    static Component = "Details";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Details.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Details();
        if (component == null) {
            component = UI_Details.CreateComponent(WorldContextObject);
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
exports.default = UI_Details;
//# sourceMappingURL=UI_Details.js.map