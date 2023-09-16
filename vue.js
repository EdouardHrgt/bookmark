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

    const faqs = ref([
      {
        id: '1',
        q: 'What is Bookmark?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
      },
      {
        id: '2',
        q: 'How can I request a new browser?',
        a: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
      },
      {
        id: '3',
        q: 'Is there a mobile app?',
        a: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
      },
      {
        id: '4',
        q: 'What about other Chromium browsers?',
        a: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
      },
    ]);

    let menu = ref(false);
    let idx = ref(0);
    let isError = ref(false);
    let emailMsg = ref('');
    let isOpen = ref(false);
    const checkEmail = (e) => {
      e.preventDefault();
      if (emailMsg.value.length <= 10) {
        isError.value = true;
      } else {
        isError.value = false;
        alert('Your message has been sent!');
      }
    };

    const handleFaq = (id) => {
      if (isOpen.value === id) {
        isOpen.value = false;
      } else {
        isOpen.value = id;
      }
    };

    return {
      bookmarks,
      idx,
      isError,
      isOpen,
      emailMsg,
      faqs,
      menu,
      checkEmail,
      handleFaq,
    };
  },
});
app.mount('#app');
