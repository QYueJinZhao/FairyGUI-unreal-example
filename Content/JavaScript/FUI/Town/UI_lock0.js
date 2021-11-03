"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_lock0 {
    m_n0;
    m_n1;
    static URL = "ui://7d8qawjuae102t";
    static Package = "Town";
    static Component = "lock0";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_lock0.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_lock0();
        if (component == null) {
            component = UI_lock0.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_n1 = component.GetChild("n1");
    }
}
exports.default = UI_lock0;
//# sourceMappingURL=UI_lock0.js.map