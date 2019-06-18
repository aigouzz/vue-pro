
export default {
  data() {
    return {
      showing: false,
      text: '这是个提示',
      type: 'normal',
    };
  },
  methods: {
    show(text='', type='normal') {
      this.text = text || this.text;
      this.type = type;
      this.showing = true;
    },
    hide() {
      this.showing = false;
    },
  },
};


