"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Bar {
    m_n0;
    m_bar;
    static URL = "ui://vw08vbbglako19";
    static Package = "SceneUI";
    static Component = "Bar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Bar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Bar();
        if (component == null) {
            component = UI_Bar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_bar = component.GetChild("bar");
    }
}
exports.default = UI_Bar;
//# sourceMappingURL=UI_Bar.js.map