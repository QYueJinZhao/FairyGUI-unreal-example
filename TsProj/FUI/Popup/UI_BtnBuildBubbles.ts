/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnBuildBubbles {

	public m_button:fgui.GController;
	public m_Bubble:fgui.GImage;
	public m_Build:fgui.GLoader;
	public static URL:string = "ui://n16w4m5p9ti149";
	public static Package:string  = "Popup";
	public static Component:string  = "BtnBuildBubbles";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuildBubbles.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnBuildBubbles {
		var obj = new UI_BtnBuildBubbles();
		if(component==null){component = UI_BtnBuildBubbles.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bubble = <fgui.GImage>component.GetChild("Bubble");
		this.m_Build = <fgui.GLoader>component.GetChild("Build");
	}
}