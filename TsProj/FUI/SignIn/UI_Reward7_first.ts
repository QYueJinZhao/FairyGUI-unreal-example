/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Reward7_first {

	public m_c1:fgui.GController;
	public m_Bg:fgui.GImage;
	public m_animation:fgui.GMovieClip;
	public m_character:fgui.GImage;
	public m_name:fgui.GImage;
	public m_date:fgui.GTextField;
	public m_date2:fgui.GTextField;
	public m_Received:fgui.GImage;
	public static URL:string = "ui://h9dczuj8daci4n";
	public static Package:string  = "SignIn";
	public static Component:string  = "Reward7_first";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Reward7_first.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Reward7_first {
		var obj = new UI_Reward7_first();
		if(component==null){component = UI_Reward7_first.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_animation = <fgui.GMovieClip>component.GetChild("animation");
		this.m_character = <fgui.GImage>component.GetChild("character");
		this.m_name = <fgui.GImage>component.GetChild("name");
		this.m_date = <fgui.GTextField>component.GetChild("date");
		this.m_date2 = <fgui.GTextField>component.GetChild("date2");
		this.m_Received = <fgui.GImage>component.GetChild("Received");
	}
}