/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnConstructionAndContracting from "./UI_BtnConstructionAndContracting";

import * as fgui from "ue"
export default class UI_ConstructionAndContracting {

	public m_BackGround:fgui.GImage;
	public m_closeButton:fgui.GButton;
	public m_TextTitle:fgui.GTextField;
	public m_TextFire:fgui.GTextField;
	public m_BtnConstructionAndContracting:UI_BtnConstructionAndContracting;
	public m_img:fgui.GLoader;
	public m_Title:fgui.GTextField;
	public m_Level:fgui.GTextField;
	public m_arrow:fgui.GImage;
	public static URL:string = "ui://n16w4m5p9ti14e";
	public static Package:string  = "Popup";
	public static Component:string  = "ConstructionAndContracting";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_ConstructionAndContracting.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_ConstructionAndContracting {
		var obj = new UI_ConstructionAndContracting();
		if(component==null){component = UI_ConstructionAndContracting.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BackGround = <fgui.GImage>component.GetChild("BackGround");
		this.m_closeButton = <fgui.GButton>component.GetChild("closeButton");
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_TextFire = <fgui.GTextField>component.GetChild("TextFire");
		this.m_BtnConstructionAndContracting =  UI_BtnConstructionAndContracting.createInstance(component.GetChild("BtnConstructionAndContracting") as fgui.GComponent, WorldContextObject);
		this.m_img = <fgui.GLoader>component.GetChild("img");
		this.m_Title = <fgui.GTextField>component.GetChild("Title");
		this.m_Level = <fgui.GTextField>component.GetChild("Level");
		this.m_arrow = <fgui.GImage>component.GetChild("arrow");
	}
}