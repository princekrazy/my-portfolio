import aiChatbot from "../content/featured/ai-chatbot/meta.js";
import uberclone from "../content/featured/uber-clone/meta.js";
import uberbackend from "../content/featured/uber-backend/meta.js";
import weather from "../content/other/weather/meta.js";
import americabound from "../content/featured/america-bound/meta.js";
import shonafrontend from "../content/featured/shona-frontend/meta.js";
import shonabackend from "../content/featured/shona-backend/meta.js";
import bankapp from "../content/other/bankapp/meta.js";
import vaultapp from "../content/other/vaultapp/meta.js";
import emptyapp from "../content/other/empty-library/meta.js";
import emojiapp from "../content/other/emoji-sweeper/meta.js";
import pastpaperapp from "../content/other/past-paper/meta.js";
import dinogame from "../content/featured/neuro-run/meta.js";
const projects = {
  "ai-chatbot": aiChatbot,
  weather: weather,
  "uber-clone-frontend": uberclone,
  "uber-clone-backend": uberbackend,
  americabound: americabound,
  "shona-ai-translator": shonafrontend,
  "shona-ai-translator-backend": shonabackend,
  "vault-app": vaultapp,
  "vault-manager-desktop": bankapp,
  "the-empty-library": emptyapp,
  "emoji-sweeper": emojiapp,
  "past-paper-helper": pastpaperapp,
  neurorun: dinogame,
};

export const featuredProjects = [
  uberclone,
  uberbackend,
  americabound,
  shonafrontend,
  shonabackend,
  dinogame,
];

export const otherProjects = [
  bankapp,
  vaultapp,
  emptyapp,
  emojiapp,
  pastpaperapp,
];

export function getProjectById(id) {
  return projects[id];
}
