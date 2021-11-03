/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnGot {

	public m_button:fgui.GController;
	public m_BG:fgui.GImage;
	public static URL:string = "ui://t8uh51qkpip19";
	public static Package:string  = "UpgradeBenefits";
	public static Component:string  = "BtnGot";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnGot.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnGot {
		var obj = new UI_BtnGot();
		if(component==null){component = UI_BtnGot.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BG = <fgui.GImage>component.GetChild("BG");
	}
}