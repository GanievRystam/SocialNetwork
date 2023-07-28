import { SocialComponents } from "../../core/SocialComponent";

export class Toolbar extends SocialComponents {
    static className = 'toolbar-social';
    toHTML(): string {
        return `<h1>TOOLBAR</h1>`
    }
}