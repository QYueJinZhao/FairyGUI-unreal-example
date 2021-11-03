/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_radiation {

	public m_n3:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tfx03j5ppip13";
	public static Package:string  = "Revenue";
	public static Component:string  = "radiation";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_radiation.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_radiation {
		var obj = new UI_radiation();
		if(component==null){component = UI_radiation.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n3 = <fgui.GImage>component.GetChild("n3");
		this.m_t0 = component.GetTransition("t0");
	}
}