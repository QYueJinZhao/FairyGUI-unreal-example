"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_LoadingBar_1 = require("./UI_LoadingBar");
const fgui = require("ue");
class UI_CloudLoading {
    m_c1;
    m_bottom;
    m_Left13;
    m_Left12;
    m_Right11;
    m_Right10;
    m_Right9;
    m_Right8;
    m_Right14;
    m_Left7;
    m_Right6;
    m_Left5;
    m_Right4;
    m_Right3;
    m_Left2;
    m_Left14;
    m_Left15;
    m_Left1;
    m_Right16;
    m_Right17;
    m_LoadingBar;
    m_Loading;
    m_MistClose;
    m_MistOpen;
    static URL = "ui://4pjqltd9j17p7";
    static Package = "CloudLoading";
    static Component = "CloudLoading";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CloudLoading.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_CloudLoading();
        if (component == null) {
            component = UI_CloudLoading.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_bottom = component.GetChild("bottom");
        this.m_Left13 = component.GetChild("Left13");
        this.m_Left12 = component.GetChild("Left12");
        this.m_Right11 = component.GetChild("Right11");
        this.m_Right10 = component.GetChild("Right10");
        this.m_Right9 = component.GetChild("Right9");
        this.m_Right8 = component.GetChild("Right8");
        this.m_Right14 = component.GetChild("Right14");
        this.m_Left7 = component.GetChild("Left7");
        this.m_Right6 = component.GetChild("Right6");
        this.m_Left5 = component.GetChild("Left5");
        this.m_Right4 = component.GetChild("Right4");
        this.m_Right3 = component.GetChild("Right3");
        this.m_Left2 = component.GetChild("Left2");
        this.m_Left14 = component.GetChild("Left14");
        this.m_Left15 = component.GetChild("Left15");
        this.m_Left1 = component.GetChild("Left1");
        this.m_Right16 = component.GetChild("Right16");
        this.m_Right17 = component.GetChild("Right17");
        this.m_LoadingBar = UI_LoadingBar_1.default.createInstance(component.GetChild("LoadingBar"), WorldContextObject);
        this.m_Loading = component.GetChild("Loading");
        this.m_MistClose = component.GetTransition("MistClose");
        this.m_MistOpen = component.GetTransition("MistOpen");
    }
}
exports.default = UI_CloudLoading;
//# sourceMappingURL=UI_CloudLoading.js.map