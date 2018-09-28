import { JsonObject, JsonProperty } from 'json2typescript';
import { ReadResource } from './read-resource';


@JsonObject('Incoming')
export class Incoming {

    // links
    @JsonProperty('links', [ReadResource])
    public links: ReadResource[] = undefined;

    // regions
    @JsonProperty('regions', [ReadResource])
    public regions: ReadResource[] = undefined;

    // sequences
    @JsonProperty('sequences', [ReadResource])
    public sequences: ReadResource[] = undefined;

    // representations
    @JsonProperty('representations', [ReadResource])
    public representations: ReadResource[] = undefined;


}
