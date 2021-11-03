/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Bar {

	public m_n0:fgui.GImage;
	public m_bar:fgui.GImage;
	public static URL:string = "ui://vw08vbbglako19";
	public static Package:string  = "SceneUI";
	public static Component:string  = "Bar";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Bar.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Bar {
		var obj = new UI_Bar();
		if(component==null){component = UI_Bar.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_bar = <fgui.GImage>component.GetChild("bar");
	}
}