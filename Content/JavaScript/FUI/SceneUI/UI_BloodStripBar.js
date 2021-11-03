"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BloodStripBar {
    m_n0;
    m_bar;
    m_describe;
    static URL = "ui://vw08vbbghuig1e";
    static Package = "SceneUI";
    static Component = "BloodStripBar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BloodStripBar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BloodStripBar();
        if (component == null) {
            component = UI_BloodStripBar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_bar = component.GetChild("bar");
        this.m_describe = component.GetChild("describe");
    }
}
exports.default = UI_BloodStripBar;
//# sourceMappingURL=UI_BloodStripBar.js.map