import { Router } from "./router.js";
import { countDownToStar } from "./engine.js";
import { state } from "./state.js";

const router = new Router();

router.add("/", "/src/pages/menu.html");
router.add('/start', "/src/pages/game.html");
router.add(404, "/src/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => {
    router.route()

    state.actions.countDownToStartId = setInterval(countDownToStar, 1000);
}