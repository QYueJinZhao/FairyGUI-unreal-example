/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_LevelProgressBar {

	public m_BG:fgui.GImage;
	public m_bar:fgui.GImage;
	public static URL:string = "ui://p6ocxgya9526p";
	public static Package:string  = "Top";
	public static Component:string  = "LevelProgressBar";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_LevelProgressBar.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_LevelProgressBar {
		var obj = new UI_LevelProgressBar();
		if(component==null){component = UI_LevelProgressBar.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_bar = <fgui.GImage>component.GetChild("bar");
	}
}