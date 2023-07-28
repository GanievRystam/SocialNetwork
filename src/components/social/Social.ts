import { $ } from "../../core/Dom";

interface Employee {
    components?: object[],
    [key:string]: unknown
}
export class Social {
    $el:HTMLElement;
    components:any;
    constructor(id:string, options: Employee) {
        this.$el = document.querySelector(id);
        this.components = options.components || [];
    }
    getRoot() {
        const $root = $.create('div');
        this.components.forEach((Component:any) => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            $el.innerHTML = component.toHTML();
            $root.append($el);
        });
        return $root;
    }
    render() {
        this.$el.append(this.getRoot());
    }
}