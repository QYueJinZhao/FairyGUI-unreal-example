/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Frame from "./UI_Frame";

import * as fgui from "ue"
export default class UI_BtnBuild {

	public m_button:fgui.GController;
	public m_bottom:fgui.GImage;
	public m_build:fgui.GImage;
	public m_Frame:UI_Frame;
	public static URL:string = "ui://bk2v2a36ivrz9";
	public static Package:string  = "BuiltInTheCompany";
	public static Component:string  = "BtnBuild";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuild.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnBuild {
		var obj = new UI_BtnBuild();
		if(component==null){component = UI_BtnBuild.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_bottom = <fgui.GImage>component.GetChild("bottom");
		this.m_build = <fgui.GImage>component.GetChild("build");
		this.m_Frame =  UI_Frame.createInstance(component.GetChild("Frame") as fgui.GComponent, WorldContextObject);
	}
}