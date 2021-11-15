const walkthrougharray = [
  {
    id: 0,
    text: "Hello! and welcome to your new Driff workspace! In this workspace a lot of awesome things will happen! Since you are new to Driff we will guide you with how everything works. This quick guide will teach you everything you need to know! Click the next button to start your awesome journey!",
    linknext: "#",
    linkback: "#",
    styletype: "highlight2",
    position: "walkthroughposition1",
    visnext: "visible",
    visback: "hidden",
    idName: "stage0",
  },
  {
    id: 1,
    text: "This is the timeline of your workspace,Here you can see all the awesome stuff that happened in the timespan of your project. This gives you information about: People that have been added, posts that have been made and other fun stuff!",
    linknext: "#",
    linkback: "/Dashboard",
    styletype: "highlight2",
    position: "walkthroughposition2",
    visnext: "visible",
    visback: "visible",
    idName: "stage1",
  },
  {
    id: 2,
    text: "This is the team tab on your dashboard, here you can see several people that are also in this workspace.",
    linknext: "/Chat",
    linkback: "#",
    styletype: "highlight2",
    position: "walkthroughposition3",
    visnext: "visible",
    visback: "visible",
    idName: "stage2",
  },
  {
    id: 3,
    text: "This is the overview of all your chats, you can see the different chats you have started and joined.Want to start a new chat? Searching for a person is available at the top so you can start a new chat with someone!",
    linknext: "#",
    linkback: "/Dashboard",
    styletype: "highlight1",
    position: "walkthroughposition4",
    visnext: "visible",
    visback: "visible",
    idName: "stage3",
  },
  {
    id: 4,
    text: "This is the chat, this can be either a normal or group chat. At the moment you are looking at a group chat, you can see all the messages sent and all posts created.If you want to respond you can either type a new message or respond with an emoji.",
    linknext: "#",
    linkback: "#",
    styletype: "highlight2",
    position: "walkthroughposition5",
    visnext: "hidden",
    visback: "visible",
    idName: "stage4",
  },
];

export function textdisplayReducer(state = ["test"], action) {
  switch (action.type) {
    default:
      return walkthrougharray;
  }
}
