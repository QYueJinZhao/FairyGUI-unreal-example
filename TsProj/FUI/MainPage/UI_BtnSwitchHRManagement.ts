/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSwitchHRManagement {

	public m_button:fgui.GController;
	public m_ButtonPersonnel:fgui.GImage;
	public m_Notify:fgui.GImage;
	public static URL:string = "ui://sn18zihkmos46";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnSwitchHRManagement";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchHRManagement.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSwitchHRManagement {
		var obj = new UI_BtnSwitchHRManagement();
		if(component==null){component = UI_BtnSwitchHRManagement.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_ButtonPersonnel = <fgui.GImage>component.GetChild("ButtonPersonnel");
		this.m_Notify = <fgui.GImage>component.GetChild("Notify");
	}
}