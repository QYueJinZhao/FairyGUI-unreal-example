/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_ElectricVehicle {

	public m_TailGas:fgui.GImage;
	public m_TailGas2:fgui.GImage;
	public m_wheel2:fgui.GImage;
	public m_wheel1:fgui.GImage;
	public m_Frame:fgui.GImage;
	public m_body:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://4pjqltd9j17p4";
	public static Package:string  = "CloudLoading";
	public static Component:string  = "ElectricVehicle";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_ElectricVehicle.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_ElectricVehicle {
		var obj = new UI_ElectricVehicle();
		if(component==null){component = UI_ElectricVehicle.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_TailGas = <fgui.GImage>component.GetChild("TailGas");
		this.m_TailGas2 = <fgui.GImage>component.GetChild("TailGas2");
		this.m_wheel2 = <fgui.GImage>component.GetChild("wheel2");
		this.m_wheel1 = <fgui.GImage>component.GetChild("wheel1");
		this.m_Frame = <fgui.GImage>component.GetChild("Frame");
		this.m_body = <fgui.GImage>component.GetChild("body");
		this.m_t0 = component.GetTransition("t0");
	}
}