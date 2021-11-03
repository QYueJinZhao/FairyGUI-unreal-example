"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnAdditiveGroup {
    m_button;
    m_n0;
    static URL = "ui://rnl6o1bldacic";
    static Package = "SetUp";
    static Component = "BtnAdditiveGroup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnAdditiveGroup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnAdditiveGroup();
        if (component == null) {
            component = UI_BtnAdditiveGroup.CreateComponent(WorldContextObject);
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
exports.default = UI_BtnAdditiveGroup;
//# sourceMappingURL=UI_BtnAdditiveGroup.js.map