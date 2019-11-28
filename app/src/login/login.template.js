import { debris } from "../../../debris";

const login = `<div>
    <form>
        <input>
        <br>
        <input type="password" />
        <br />
        <input type="button" />
    </form>
</div>`

export let loginElement = debris.FragmentElement.buildElement(login)

