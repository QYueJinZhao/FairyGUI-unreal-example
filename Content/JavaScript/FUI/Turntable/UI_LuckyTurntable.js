"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_LuckyTurntableGroup_1 = require("./UI_LuckyTurntableGroup");
const UI_x_1 = require("./UI_x");
const fgui = require("ue");
class UI_LuckyTurntable {
    m_c1;
    m_InteractablePanel;
    m_LuckyTurntableGroup;
    m_closeButton;
    m_t0;
    m_t1;
    static URL = "ui://tgre8ndbpip1c";
    static Package = "Turntable";
    static Component = "LuckyTurntable";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_LuckyTurntable.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_LuckyTurntable();
        if (component == null) {
            component = UI_LuckyTurntable.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_LuckyTurntableGroup = UI_LuckyTurntableGroup_1.default.createInstance(component.GetChild("LuckyTurntableGroup"), WorldContextObject);
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_LuckyTurntable;
//# sourceMappingURL=UI_LuckyTurntable.js.map