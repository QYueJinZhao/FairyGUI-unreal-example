/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnBuildAndUpgrade from "./UI_BtnBuildAndUpgrade";

import * as fgui from "ue"
export default class UI_CompanyRoomCard {

	public m_BG:fgui.GImage;
	public m_Image:fgui.GLoader;
	public m_upgrade:fgui.GImage;
	public m_Btn:UI_BtnBuildAndUpgrade;
	public m_Level:fgui.GTextField;
	public m_Title:fgui.GTextField;
	public m_Desc:fgui.GTextField;
	public static URL:string = "ui://sn18zihkhb0y20";
	public static Package:string  = "MainPage";
	public static Component:string  = "CompanyRoomCard";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_CompanyRoomCard.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_CompanyRoomCard {
		var obj = new UI_CompanyRoomCard();
		if(component==null){component = UI_CompanyRoomCard.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_Image = <fgui.GLoader>component.GetChild("Image");
		this.m_upgrade = <fgui.GImage>component.GetChild("upgrade");
		this.m_Btn =  UI_BtnBuildAndUpgrade.createInstance(component.GetChild("Btn") as fgui.GComponent, WorldContextObject);
		this.m_Level = <fgui.GTextField>component.GetChild("Level");
		this.m_Title = <fgui.GTextField>component.GetChild("Title");
		this.m_Desc = <fgui.GTextField>component.GetChild("Desc");
	}
}