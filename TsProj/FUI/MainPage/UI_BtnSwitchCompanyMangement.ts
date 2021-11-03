/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSwitchCompanyMangement {

	public m_button:fgui.GController;
	public m_ButtonCompany:fgui.GImage;
	public m_Notify:fgui.GImage;
	public static URL:string = "ui://sn18zihkmos45";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnSwitchCompanyMangement";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchCompanyMangement.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSwitchCompanyMangement {
		var obj = new UI_BtnSwitchCompanyMangement();
		if(component==null){component = UI_BtnSwitchCompanyMangement.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_ButtonCompany = <fgui.GImage>component.GetChild("ButtonCompany");
		this.m_Notify = <fgui.GImage>component.GetChild("Notify");
	}
}