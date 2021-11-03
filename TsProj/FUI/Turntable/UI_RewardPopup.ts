/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";

import * as fgui from "ue"
export default class UI_RewardPopup {

	public m_Panel:fgui.GImage;
	public m_closeButton:UI_x;
	public m_Coin:fgui.GImage;
	public m_InCome:fgui.GTextField;
	public m_LayoutGroup:fgui.GGroup;
	public m_Desc:fgui.GTextField;
	public m_TextTitle:fgui.GTextField;
	public m_BtnGot:fgui.GButton;
	public static URL:string = "ui://tgre8ndbpip11h";
	public static Package:string  = "Turntable";
	public static Component:string  = "RewardPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_RewardPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_RewardPopup {
		var obj = new UI_RewardPopup();
		if(component==null){component = UI_RewardPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Panel = <fgui.GImage>component.GetChild("Panel");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_Coin = <fgui.GImage>component.GetChild("Coin");
		this.m_InCome = <fgui.GTextField>component.GetChild("InCome");
		this.m_LayoutGroup = <fgui.GGroup>component.GetChild("LayoutGroup");
		this.m_Desc = <fgui.GTextField>component.GetChild("Desc");
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_BtnGot = <fgui.GButton>component.GetChild("BtnGot");
	}
}