/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnBuildAndUpgrade from "./UI_BtnBuildAndUpgrade";

import * as fgui from "ue"
export default class UI_RoadRenovationCard {

	public m_CompanyRoomCard:fgui.GImage;
	public m_Image:fgui.GLoader;
	public m_upgrade:fgui.GImage;
	public m_BtnBuildAndUpgrade:UI_BtnBuildAndUpgrade;
	public m_Level:fgui.GTextField;
	public m_Title:fgui.GTextField;
	public m_Desc:fgui.GTextField;
	public static URL:string = "ui://sn18zihkhb0y24";
	public static Package:string  = "MainPage";
	public static Component:string  = "RoadRenovationCard";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_RoadRenovationCard.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_RoadRenovationCard {
		var obj = new UI_RoadRenovationCard();
		if(component==null){component = UI_RoadRenovationCard.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_CompanyRoomCard = <fgui.GImage>component.GetChild("CompanyRoomCard");
		this.m_Image = <fgui.GLoader>component.GetChild("Image");
		this.m_upgrade = <fgui.GImage>component.GetChild("upgrade");
		this.m_BtnBuildAndUpgrade =  UI_BtnBuildAndUpgrade.createInstance(component.GetChild("BtnBuildAndUpgrade") as fgui.GComponent, WorldContextObject);
		this.m_Level = <fgui.GTextField>component.GetChild("Level");
		this.m_Title = <fgui.GTextField>component.GetChild("Title");
		this.m_Desc = <fgui.GTextField>component.GetChild("Desc");
	}
}