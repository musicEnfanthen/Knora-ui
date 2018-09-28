import { JsonObject, JsonProperty } from 'json2typescript';


@JsonObject('ResourceInfo')
export class ResourceInfo {

    // @JsonProperty('id', String)
    // public id: string = undefined;

    // id
    @JsonProperty('id', String)
    public id: string = undefined;

    // label
    @JsonProperty('label', String)
    public label: string = undefined;

    // type
    @JsonProperty('type', String)
    public type: string = undefined;


}
