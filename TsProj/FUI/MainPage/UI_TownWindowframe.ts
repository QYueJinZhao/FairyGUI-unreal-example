/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnHeaderBuildSelect from "./UI_BtnHeaderBuildSelect";
import UI_BtnHeaderBuildDefault from "./UI_BtnHeaderBuildDefault";
import UI_BtnHeaderUpgradeSelect from "./UI_BtnHeaderUpgradeSelect";
import UI_BtnHeaderUpgradeDefault from "./UI_BtnHeaderUpgradeDefault";

import * as fgui from "ue"
export default class UI_TownWindowframe {

	public m_c1:fgui.GController;
	public m_Background:fgui.GImage;
	public m_TitmeImage:fgui.GImage;
	public m_Text:fgui.GTextField;
	public m_closeButton:UI_x;
	public m_BtnHeaderBuildSelect:UI_BtnHeaderBuildSelect;
	public m_BtnHeaderBuildDefault:UI_BtnHeaderBuildDefault;
	public m_BtnInside:fgui.GGroup;
	public m_BtnHeaderUpgradeSelect:UI_BtnHeaderUpgradeSelect;
	public m_BtnHeaderUpgradeDefault:UI_BtnHeaderUpgradeDefault;
	public m_BtnOutside:fgui.GGroup;
	public m_BuildSignList:fgui.GList;
	public m_UpgradeList:fgui.GList;
	public static URL:string = "ui://sn18zihkhb0y2g";
	public static Package:string  = "MainPage";
	public static Component:string  = "TownWindowframe";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TownWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TownWindowframe {
		var obj = new UI_TownWindowframe();
		if(component==null){component = UI_TownWindowframe.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_Background = <fgui.GImage>component.GetChild("Background");
		this.m_TitmeImage = <fgui.GImage>component.GetChild("TitmeImage");
		this.m_Text = <fgui.GTextField>component.GetChild("Text");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_BtnHeaderBuildSelect =  UI_BtnHeaderBuildSelect.createInstance(component.GetChild("BtnHeaderBuildSelect") as fgui.GComponent, WorldContextObject);
		this.m_BtnHeaderBuildDefault =  UI_BtnHeaderBuildDefault.createInstance(component.GetChild("BtnHeaderBuildDefault") as fgui.GComponent, WorldContextObject);
		this.m_BtnInside = <fgui.GGroup>component.GetChild("BtnInside");
		this.m_BtnHeaderUpgradeSelect =  UI_BtnHeaderUpgradeSelect.createInstance(component.GetChild("BtnHeaderUpgradeSelect") as fgui.GComponent, WorldContextObject);
		this.m_BtnHeaderUpgradeDefault =  UI_BtnHeaderUpgradeDefault.createInstance(component.GetChild("BtnHeaderUpgradeDefault") as fgui.GComponent, WorldContextObject);
		this.m_BtnOutside = <fgui.GGroup>component.GetChild("BtnOutside");
		this.m_BuildSignList = <fgui.GList>component.GetChild("BuildSignList");
		this.m_UpgradeList = <fgui.GList>component.GetChild("UpgradeList");
	}
}