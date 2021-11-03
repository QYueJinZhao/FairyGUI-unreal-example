/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnDouble {

	public m_button:fgui.GController;
	public m_BtnDouble:fgui.GImage;
	public static URL:string = "ui://tfx03j5ppip19";
	public static Package:string  = "Revenue";
	public static Component:string  = "BtnDouble";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnDouble.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnDouble {
		var obj = new UI_BtnDouble();
		if(component==null){component = UI_BtnDouble.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BtnDouble = <fgui.GImage>component.GetChild("BtnDouble");
	}
}