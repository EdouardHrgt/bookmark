const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const bookmarks = ref([
      {
        title: 'Bookmark in one click',
        txt: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        img: './images/illustration-features-tab-1.svg',
      },
      {
        title: 'Intelligent search',
        txt: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        img: './images/illustration-features-tab-2.svg',
      },
      {
        title: 'Share your bookmarks',
        txt: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        img: './images/illustration-features-tab-3.svg',
      },
    ]);

    let idx = ref(0);

    return {
      bookmarks,
      idx,
    };
  },
});
app.mount('#app');
