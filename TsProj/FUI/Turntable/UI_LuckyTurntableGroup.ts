/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Turntable from "./UI_Turntable";
import UI_Button from "./UI_Button";

import * as fgui from "ue"
export default class UI_LuckyTurntableGroup {

	public m_belt:fgui.GImage;
	public m_title:fgui.GTextField;
	public m_chassis:fgui.GImage;
	public m_lamp:fgui.GImage;
	public m_Turntable:UI_Turntable;
	public m_Button:UI_Button;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tgre8ndbtn7k1w";
	public static Package:string  = "Turntable";
	public static Component:string  = "LuckyTurntableGroup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_LuckyTurntableGroup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_LuckyTurntableGroup {
		var obj = new UI_LuckyTurntableGroup();
		if(component==null){component = UI_LuckyTurntableGroup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_belt = <fgui.GImage>component.GetChild("belt");
		this.m_title = <fgui.GTextField>component.GetChild("title");
		this.m_chassis = <fgui.GImage>component.GetChild("chassis");
		this.m_lamp = <fgui.GImage>component.GetChild("lamp");
		this.m_Turntable =  UI_Turntable.createInstance(component.GetChild("Turntable") as fgui.GComponent, WorldContextObject);
		this.m_Button =  UI_Button.createInstance(component.GetChild("Button") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}