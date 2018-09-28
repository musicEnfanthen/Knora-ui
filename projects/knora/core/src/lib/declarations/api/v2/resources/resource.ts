import { JsonObject, JsonProperty } from 'json2typescript';
import { ResourceInfo } from './resourceInfo';
import { Incoming } from './incoming';


@JsonObject('Resource')
export class Resource {

    // @JsonProperty('id', String)
    // public id: string = undefined;

    // resInfo
    @JsonProperty('resInfo', ResourceInfo)
    public resInfo: ResourceInfo = undefined;

    // properties

    // incoming
    @JsonProperty('incoming', Incoming)
    public incoming: Incoming = undefined;

    // representation
    @JsonProperty('representation', Representation)
    public representation: Representation = undefined;


}
