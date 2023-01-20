import { Resource } from "@src/defs/types";
import _Gun from "@src/static/json/gun.json";
import _Torpedo from "@src/static/json/torpedo.json";
import _Antiair from "@src/static/json/antiair.json";
import _Airplane from "@src/static/json/airplane.json";
import _Accessory from "@src/static/json/accessory.json";
import _Special from "@src/static/json/special.json";

export const Gun:Array<Resource> = ((_Gun as unknown) as Array<Resource>);

export const Torpedo:Array<Resource> = ((_Torpedo as unknown) as Array<Resource>);

export const Antiair:Array<Resource> = ((_Antiair as unknown) as Array<Resource>);

export const Airplane:Array<Resource> = ((_Airplane as unknown) as Array<Resource>);

export const Accessory:Array<Resource> = ((_Accessory as unknown) as Array<Resource>);

export const Special:Array<Resource> = ((_Special as unknown) as Array<Resource>);