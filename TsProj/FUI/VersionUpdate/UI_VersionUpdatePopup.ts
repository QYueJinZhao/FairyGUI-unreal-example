/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnCancel from "./UI_BtnCancel";
import UI_BtnOK from "./UI_BtnOK";

import * as fgui from "ue"
export default class UI_VersionUpdatePopup {

	public m_Bottom:fgui.GImage;
	public m_text:fgui.GTextField;
	public m_BtnCancel:UI_BtnCancel;
	public m_BtnOK:UI_BtnOK;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://644171sttexdb";
	public static Package:string  = "VersionUpdate";
	public static Component:string  = "VersionUpdatePopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_VersionUpdatePopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_VersionUpdatePopup {
		var obj = new UI_VersionUpdatePopup();
		if(component==null){component = UI_VersionUpdatePopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bottom = <fgui.GImage>component.GetChild("Bottom");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_BtnCancel =  UI_BtnCancel.createInstance(component.GetChild("BtnCancel") as fgui.GComponent, WorldContextObject);
		this.m_BtnOK =  UI_BtnOK.createInstance(component.GetChild("BtnOK") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}