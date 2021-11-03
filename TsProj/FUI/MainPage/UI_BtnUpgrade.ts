/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnUpgrade {

	public m_button:fgui.GController;
	public m_BtnUpgrade:fgui.GImage;
	public m_Coin:fgui.GImage;
	public m_Up:fgui.GImage;
	public m_TextUpgrade:fgui.GTextField;
	public static URL:string = "ui://sn18zihk90iz13";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnUpgrade";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnUpgrade.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnUpgrade {
		var obj = new UI_BtnUpgrade();
		if(component==null){component = UI_BtnUpgrade.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BtnUpgrade = <fgui.GImage>component.GetChild("BtnUpgrade");
		this.m_Coin = <fgui.GImage>component.GetChild("Coin");
		this.m_Up = <fgui.GImage>component.GetChild("Up");
		this.m_TextUpgrade = <fgui.GTextField>component.GetChild("TextUpgrade");
	}
}