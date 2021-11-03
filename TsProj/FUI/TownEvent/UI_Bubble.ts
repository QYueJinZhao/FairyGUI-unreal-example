/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Bubble {

	public m_Bubble:fgui.GImage;
	public m_icon:fgui.GLoader;
	public m_Prohibit:fgui.GImage;
	public static URL:string = "ui://7zka63zlqqq9i";
	public static Package:string  = "TownEvent";
	public static Component:string  = "Bubble";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Bubble.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Bubble {
		var obj = new UI_Bubble();
		if(component==null){component = UI_Bubble.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bubble = <fgui.GImage>component.GetChild("Bubble");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
		this.m_Prohibit = <fgui.GImage>component.GetChild("Prohibit");
	}
}