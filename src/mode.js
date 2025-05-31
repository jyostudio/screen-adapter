import Enum from "@jyostudio/enum";

export default class Mode extends Enum {
    static {
        this.set({
            none: 0,
            cover: 1,
            contain: 2,
            fill: 3,
            fixedWidth: 4
        });
    }
}