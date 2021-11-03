/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSwitchTownMangement {

	public m_button:fgui.GController;
	public m_ButtonTown:fgui.GImage;
	public m_Notify:fgui.GImage;
	public static URL:string = "ui://sn18zihkmos47";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnSwitchTownMangement";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchTownMangement.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSwitchTownMangement {
		var obj = new UI_BtnSwitchTownMangement();
		if(component==null){component = UI_BtnSwitchTownMangement.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_ButtonTown = <fgui.GImage>component.GetChild("ButtonTown");
		this.m_Notify = <fgui.GImage>component.GetChild("Notify");
	}
}