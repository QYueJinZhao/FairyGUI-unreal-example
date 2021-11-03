"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_LongDisplayButton {
    m_BtnSignInIcon;
    m_BtnOnlineIcon;
    m_BtnTurntableIcon;
    m_BtnLandmark;
    m_BtnDailyMission;
    static URL = "ui://sn18zihk9xrpf";
    static Package = "MainPage";
    static Component = "LongDisplayButton";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_LongDisplayButton.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_LongDisplayButton();
        if (component == null) {
            component = UI_LongDisplayButton.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BtnSignInIcon = component.GetChild("BtnSignInIcon");
        this.m_BtnOnlineIcon = component.GetChild("BtnOnlineIcon");
        this.m_BtnTurntableIcon = component.GetChild("BtnTurntableIcon");
        this.m_BtnLandmark = component.GetChild("BtnLandmark");
        this.m_BtnDailyMission = component.GetChild("BtnDailyMission");
    }
}
exports.default = UI_LongDisplayButton;
//# sourceMappingURL=UI_LongDisplayButton.js.map