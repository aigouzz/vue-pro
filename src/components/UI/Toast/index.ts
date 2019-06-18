
export default {
  data() {
    return {
      showing: false,
      text: '这是个提示',
    };
  },
  methods: {
    show(text='') {
      this.text = text || this.text;
      this.showing = true;
    },
    hide() {
      this.showing = false;
    },
  },
};


