"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnHR_1 = require("./UI_BtnHR");
const fgui = require("ue");
class UI_DelvieryWindowframe {
    m_Background;
    m_TitmeImage;
    m_Text;
    m_closeButton;
    m_DeliveryManNunSum;
    m_BtnHR;
    m_Content;
    static URL = "ui://sn18zihkmos49";
    static Package = "MainPage";
    static Component = "DelvieryWindowframe";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DelvieryWindowframe();
        if (component == null) {
            component = UI_DelvieryWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Background = component.GetChild("Background");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_Text = component.GetChild("Text");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_DeliveryManNunSum = component.GetChild("DeliveryManNunSum");
        this.m_BtnHR = UI_BtnHR_1.default.createInstance(component.GetChild("BtnHR"), WorldContextObject);
        this.m_Content = component.GetChild("Content");
    }
}
exports.default = UI_DelvieryWindowframe;
//# sourceMappingURL=UI_DelvieryWindowframe.js.map