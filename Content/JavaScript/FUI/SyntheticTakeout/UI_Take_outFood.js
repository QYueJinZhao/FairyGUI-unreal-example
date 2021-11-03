"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Take_outFood {
    m_GradeBottom;
    m_packing;
    static URL = "ui://tqsc8htvveax10";
    static Package = "SyntheticTakeout";
    static Component = "Take-outFood";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Take_outFood.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Take_outFood();
        if (component == null) {
            component = UI_Take_outFood.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_GradeBottom = component.GetChild("GradeBottom");
        this.m_packing = component.GetChild("packing");
    }
}
exports.default = UI_Take_outFood;
//# sourceMappingURL=UI_Take_outFood.js.map