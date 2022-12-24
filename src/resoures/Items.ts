import { Resource } from "@src/defs/resource";
import _Gun from "./json/gun.json";
import _Torpedo from "./json/torpedo.json";
import _Antiair from "./json/antiair.json";
import _Airplane from "./json/airplane.json";
import _Accessory from "./json/accessory.json";
import _Special from "./json/special.json";


export const Gun:Array<Resource> = ((_Gun as unknown) as Array<Resource>);

export const Torpedo:Array<Resource> = ((_Torpedo as unknown) as Array<Resource>);

export const Antiair:Array<Resource> = ((_Antiair as unknown) as Array<Resource>);

export const Airplane:Array<Resource> = ((_Airplane as unknown) as Array<Resource>);

export const Accessory:Array<Resource> = ((_Accessory as unknown) as Array<Resource>);

export const Special:Array<Resource> = ((_Special as unknown) as Array<Resource>);