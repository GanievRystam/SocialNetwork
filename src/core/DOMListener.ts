export class DOMListener {
    $root;
    constructor($root:any) {
        if(!$root) {
            throw new Error('NO $root provided for DomListener!');
        }
        this.$root = $root;
    }
}