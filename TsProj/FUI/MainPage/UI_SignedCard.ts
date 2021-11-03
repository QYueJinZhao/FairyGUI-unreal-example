/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnBuildAndUpgrade from "./UI_BtnBuildAndUpgrade";

import * as fgui from "ue"
export default class UI_SignedCard {

	public m_BG:fgui.GImage;
	public m_Icon:fgui.GLoader;
	public m_BtnSigned:UI_BtnBuildAndUpgrade;
	public m_Level:fgui.GTextField;
	public m_Title:fgui.GTextField;
	public m_Desc:fgui.GTextField;
	public static URL:string = "ui://sn18zihkpip140";
	public static Package:string  = "MainPage";
	public static Component:string  = "SignedCard";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SignedCard.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SignedCard {
		var obj = new UI_SignedCard();
		if(component==null){component = UI_SignedCard.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_Icon = <fgui.GLoader>component.GetChild("Icon");
		this.m_BtnSigned =  UI_BtnBuildAndUpgrade.createInstance(component.GetChild("BtnSigned") as fgui.GComponent, WorldContextObject);
		this.m_Level = <fgui.GTextField>component.GetChild("Level");
		this.m_Title = <fgui.GTextField>component.GetChild("Title");
		this.m_Desc = <fgui.GTextField>component.GetChild("Desc");
	}
}