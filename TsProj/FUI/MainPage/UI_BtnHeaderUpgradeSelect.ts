/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnHeaderUpgradeSelect {

	public m_button:fgui.GController;
	public m_btn:fgui.GImage;
	public static URL:string = "ui://sn18zihkhb0y1y";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnHeaderUpgradeSelect";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnHeaderUpgradeSelect.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnHeaderUpgradeSelect {
		var obj = new UI_BtnHeaderUpgradeSelect();
		if(component==null){component = UI_BtnHeaderUpgradeSelect.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_btn = <fgui.GImage>component.GetChild("btn");
	}
}