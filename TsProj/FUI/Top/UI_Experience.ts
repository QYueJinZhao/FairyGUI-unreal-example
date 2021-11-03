/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Experience {

	public m_n2:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_n4:fgui.GImage;
	public m_n5:fgui.GImage;
	public m_n6:fgui.GImage;
	public m_n7:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_n10:fgui.GImage;
	public m_ExperienceGiftBox:fgui.GImage;
	public m_arrow:fgui.GImage;
	public m_Experience_:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://p6ocxgyav2ma1z";
	public static Package:string  = "Top";
	public static Component:string  = "Experience";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Experience.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Experience {
		var obj = new UI_Experience();
		if(component==null){component = UI_Experience.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n2 = <fgui.GImage>component.GetChild("n2");
		this.m_n3 = <fgui.GImage>component.GetChild("n3");
		this.m_n4 = <fgui.GImage>component.GetChild("n4");
		this.m_n5 = <fgui.GImage>component.GetChild("n5");
		this.m_n6 = <fgui.GImage>component.GetChild("n6");
		this.m_n7 = <fgui.GImage>component.GetChild("n7");
		this.m_n9 = <fgui.GImage>component.GetChild("n9");
		this.m_n10 = <fgui.GImage>component.GetChild("n10");
		this.m_ExperienceGiftBox = <fgui.GImage>component.GetChild("ExperienceGiftBox");
		this.m_arrow = <fgui.GImage>component.GetChild("arrow");
		this.m_Experience_ = <fgui.GImage>component.GetChild("Experience+");
		this.m_t0 = component.GetTransition("t0");
	}
}