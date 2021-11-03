"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnRefresh {
    m_button;
    m_btn;
    static URL = "ui://n16w4m5psrcy3x";
    static Package = "Popup";
    static Component = "BtnRefresh";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnRefresh.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnRefresh();
        if (component == null) {
            component = UI_BtnRefresh.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_btn = component.GetChild("btn");
    }
}
exports.default = UI_BtnRefresh;
//# sourceMappingURL=UI_BtnRefresh.js.map