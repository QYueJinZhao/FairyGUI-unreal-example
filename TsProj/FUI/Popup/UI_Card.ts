/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnHire from "./UI_BtnHire";

import * as fgui from "ue"
export default class UI_Card {

	public m_BG:fgui.GLoader;
	public m_shadow:fgui.GImage;
	public m_Profile:fgui.GLoader;
	public m_Name:fgui.GTextField;
	public m_Quality:fgui.GTextField;
	public m_Speed:fgui.GTextField;
	public m_SpeedStarContainer:fgui.GLoader;
	public m_BtnHire:UI_BtnHire;
	public static URL:string = "ui://n16w4m5pqb9d3c";
	public static Package:string  = "Popup";
	public static Component:string  = "Card";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Card.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Card {
		var obj = new UI_Card();
		if(component==null){component = UI_Card.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GLoader>component.GetChild("BG");
		this.m_shadow = <fgui.GImage>component.GetChild("shadow");
		this.m_Profile = <fgui.GLoader>component.GetChild("Profile");
		this.m_Name = <fgui.GTextField>component.GetChild("Name");
		this.m_Quality = <fgui.GTextField>component.GetChild("Quality");
		this.m_Speed = <fgui.GTextField>component.GetChild("Speed");
		this.m_SpeedStarContainer = <fgui.GLoader>component.GetChild("SpeedStarContainer");
		this.m_BtnHire =  UI_BtnHire.createInstance(component.GetChild("BtnHire") as fgui.GComponent, WorldContextObject);
	}
}