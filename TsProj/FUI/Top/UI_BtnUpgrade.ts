/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_LevelProgressBar from "./UI_LevelProgressBar";

import * as fgui from "ue"
export default class UI_BtnUpgrade {

	public m_button:fgui.GController;
	public m_light:fgui.GImage;
	public m_LevelProgressBar:UI_LevelProgressBar;
	public m_Grade:fgui.GTextField;
	public m_icon:fgui.GImage;
	public static URL:string = "ui://p6ocxgyaqqq91r";
	public static Package:string  = "Top";
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
		this.m_light = <fgui.GImage>component.GetChild("light");
		this.m_LevelProgressBar =  UI_LevelProgressBar.createInstance(component.GetChild("LevelProgressBar") as fgui.GComponent, WorldContextObject);
		this.m_Grade = <fgui.GTextField>component.GetChild("Grade");
		this.m_icon = <fgui.GImage>component.GetChild("icon");
	}
}